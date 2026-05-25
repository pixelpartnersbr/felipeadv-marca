// docx-builder.js
// Build a minimal .docx (Office Open XML) file with a full-page background
// image as the page header, leaving the body editable for typing in Word.
//
// Depends on globals:
//   JSZip            (https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js)
//   htmlToImage      (https://unpkg.com/html-to-image@1.11.13/dist/html-to-image.js)

// ----- XML templates -------------------------------------------------------

const CONTENT_TYPES_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;

const ROOT_RELS_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

const DOC_RELS_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>
</Relationships>`;

const HEADER_RELS_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image1.png"/>
</Relationships>`;

const STYLES_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Garamond" w:hAnsi="Garamond" w:cs="Garamond"/>
        <w:sz w:val="24"/>
        <w:szCs w:val="24"/>
        <w:lang w:val="pt-BR" w:eastAsia="pt-BR" w:bidi="ar-SA"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:after="120" w:line="312" w:lineRule="auto"/>
        <w:jc w:val="both"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:qFormat/>
  </w:style>
</w:styles>`;

function buildDocumentXml({ marginsTwips, bodyParagraphs }) {
  const m = marginsTwips;
  // bodyParagraphs contains full <w:p>…</w:p> XML strings — just concatenate.
  const body = (bodyParagraphs && bodyParagraphs.length
    ? bodyParagraphs.join("")
    : `<w:p><w:r><w:t></w:t></w:r></w:p>`);

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${body}
    <w:sectPr>
      <w:headerReference w:type="default" r:id="rId2"/>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="${m.top}" w:right="${m.right}" w:bottom="${m.bottom}" w:left="${m.left}" w:header="0" w:footer="0" w:gutter="0"/>
      <w:cols w:space="708"/>
      <w:docGrid w:linePitch="360"/>
    </w:sectPr>
  </w:body>
</w:document>`;
}

// ----- Word paragraph builders --------------------------------------------

function xmlEsc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

// Build a single <w:p> from runs and options.
// runs: array of { text, bold?, italic?, size?, color?, caps?, letterSpacing? }
// opts: { jc, firstLine, indent, before, after, line }
function buildParagraph(runs, opts = {}) {
  const {
    jc, firstLine = 0, indent = 0,
    before = 0, after = 120, line = 312,
  } = opts;

  const pPrLines = [];
  if (jc) pPrLines.push(`<w:jc w:val="${jc}"/>`);
  if (firstLine || indent) {
    const parts = [];
    if (firstLine) parts.push(`w:firstLine="${firstLine}"`);
    if (indent) parts.push(`w:left="${indent}"`);
    pPrLines.push(`<w:ind ${parts.join(" ")}/>`);
  }
  pPrLines.push(`<w:spacing w:before="${before}" w:after="${after}" w:line="${line}" w:lineRule="auto"/>`);
  const pPr = `<w:pPr>${pPrLines.join("")}</w:pPr>`;

  const runsXml = (Array.isArray(runs) ? runs : [runs]).map(r => {
    if (typeof r === "string") r = { text: r };
    const rPrLines = [];
    if (r.bold) rPrLines.push("<w:b/>");
    if (r.italic) rPrLines.push("<w:i/>");
    if (r.size) rPrLines.push(`<w:sz w:val="${r.size}"/><w:szCs w:val="${r.size}"/>`);
    if (r.letterSpacing) rPrLines.push(`<w:spacing w:val="${r.letterSpacing}"/>`);
    if (r.color) rPrLines.push(`<w:color w:val="${r.color}"/>`);
    if (r.caps) rPrLines.push("<w:caps/>");
    const rPr = rPrLines.length ? `<w:rPr>${rPrLines.join("")}</w:rPr>` : "";
    return `<w:r>${rPr}<w:t xml:space="preserve">${xmlEsc(r.text || "")}</w:t></w:r>`;
  }).join("");

  return `<w:p>${pPr}${runsXml}</w:p>`;
}

// Build the editable petição template body (works inside any letterhead).
function buildPetitionBody() {
  const NAVY = "152D52";
  const GOLD = "9B7F50";

  return [
    // Endereço ao juiz
    buildParagraph(
      [{ text: "EXMO. SR. DR. JUIZ DE DIREITO DA ", italic: true },
       { text: "___ª VARA CÍVEL", bold: true, italic: true },
       { text: " DA COMARCA DE VILA VELHA — ESTADO DO ESPÍRITO SANTO", italic: true }],
      { jc: "right", after: 480 }
    ),

    // Processo nº
    buildParagraph(
      [{ text: "PROCESSO Nº 0000000-00.2026.8.08.0000", color: GOLD, size: 18, letterSpacing: 30 }],
      { jc: "left", after: 360 }
    ),

    // Título: PETIÇÃO INICIAL
    buildParagraph(
      [{ text: "PETIÇÃO INICIAL", bold: true, color: NAVY, size: 24, letterSpacing: 100 }],
      { jc: "center", before: 240, after: 480 }
    ),

    // Parágrafo 1 — qualificação
    buildParagraph(
      [{ text: "FULANO DE TAL", bold: true },
       { text: ", brasileiro, casado, portador da Cédula de Identidade RG nº 0.000.000 SSP/ES, inscrito no CPF/MF sob nº 000.000.000-00, residente e domiciliado nesta Comarca, vem, respeitosamente, à presença de Vossa Excelência, por intermédio de seu advogado " },
       { text: "infra-assinado", italic: true },
       { text: ", conforme procuração anexa, propor a presente" }],
      { jc: "both", firstLine: 1134 } // 2cm indent
    ),

    // Tipo de ação — destaque
    buildParagraph(
      [{ text: "AÇÃO DE COBRANÇA C/C INDENIZAÇÃO POR DANOS MORAIS", bold: true, color: NAVY, letterSpacing: 30 }],
      { jc: "center", before: 240, after: 240 }
    ),

    // ...em face de
    buildParagraph(
      [{ text: "em face de " },
       { text: "EMPRESA RÉ LTDA.", bold: true },
       { text: ", pessoa jurídica de direito privado, inscrita no CNPJ sob nº 00.000.000/0001-00, com sede na cidade de Vitória/ES, pelos fatos e fundamentos jurídicos que passa a expor." }],
      { jc: "both", firstLine: 1134 }
    ),

    // Seção: I — DOS FATOS
    buildParagraph(
      [{ text: "I — DOS FATOS", bold: true, color: NAVY, letterSpacing: 24 }],
      { jc: "left", before: 480, after: 240 }
    ),

    // Corpo dos fatos
    buildParagraph(
      "O Autor manteve relação contratual com a Ré entre os meses de janeiro e outubro do corrente exercício, oportunidade em que firmou instrumento particular de prestação de serviços cuja contraprestação foi devidamente adimplida em sua integralidade, conforme comprovantes que ora se acostam aos autos.",
      { jc: "both", firstLine: 1134 }
    ),

    // Placeholder para o próprio advogado preencher
    buildParagraph(
      [{ text: "[Continue redigindo aqui — fundamentos jurídicos, pedidos, etc.]", italic: true, color: "999999" }],
      { jc: "left", before: 240, after: 240 }
    ),

    // Fecho
    buildParagraph(
      [{ text: "Termos em que, pede deferimento." }],
      { jc: "left", before: 480, after: 240 }
    ),

    // Local e data
    buildParagraph(
      [{ text: "Vila Velha/ES, ___ de ____________ de 2026.", italic: true, color: "4A5168" }],
      { jc: "right", after: 720 }
    ),

    // Assinatura — linha
    buildParagraph(
      [{ text: "_______________________________________" }],
      { jc: "center", after: 60 }
    ),

    // Nome do advogado
    buildParagraph(
      [{ text: "FELIPE DE BORTOLI MUNHOZ", bold: true, color: NAVY, letterSpacing: 40 }],
      { jc: "center", after: 60 }
    ),

    // OAB
    buildParagraph(
      [{ text: "OAB/ES 27.026", color: GOLD, letterSpacing: 50 }],
      { jc: "center", after: 120 }
    ),
  ];
}

function buildHeaderXml({ pageWidthEMU = 7559675, pageHeightEMU = 10691495 }) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
       xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
       xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
  <w:p>
    <w:pPr>
      <w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/>
      <w:rPr><w:sz w:val="2"/></w:rPr>
    </w:pPr>
    <w:r>
      <w:rPr><w:noProof/><w:sz w:val="2"/></w:rPr>
      <w:drawing>
        <wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="1" behindDoc="1" locked="1" layoutInCell="1" allowOverlap="1">
          <wp:simplePos x="0" y="0"/>
          <wp:positionH relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionH>
          <wp:positionV relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionV>
          <wp:extent cx="${pageWidthEMU}" cy="${pageHeightEMU}"/>
          <wp:effectExtent l="0" t="0" r="0" b="0"/>
          <wp:wrapNone/>
          <wp:docPr id="1" name="Papel timbrado"/>
          <wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>
          <a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
            <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
              <pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">
                <pic:nvPicPr>
                  <pic:cNvPr id="1" name="Papel timbrado"/>
                  <pic:cNvPicPr><a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></pic:cNvPicPr>
                </pic:nvPicPr>
                <pic:blipFill>
                  <a:blip r:embed="rId1"/>
                  <a:srcRect/>
                  <a:stretch><a:fillRect/></a:stretch>
                </pic:blipFill>
                <pic:spPr bwMode="auto">
                  <a:xfrm><a:off x="0" y="0"/><a:ext cx="${pageWidthEMU}" cy="${pageHeightEMU}"/></a:xfrm>
                  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
                  <a:noFill/>
                </pic:spPr>
              </pic:pic>
            </a:graphicData>
          </a:graphic>
        </wp:anchor>
      </w:drawing>
    </w:r>
  </w:p>
</w:hdr>`;
}

// ----- PNG capture ---------------------------------------------------------

async function captureLetterheadAsPng(element, pixelRatio = 2) {
  // Make sure web fonts are loaded
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  const rect = element.getBoundingClientRect();
  return await window.htmlToImage.toBlob(element, {
    pixelRatio,
    backgroundColor: "#F5F0E6",
    cacheBust: false,
    width: rect.width,
    height: rect.height,
    // We let html-to-image attempt its default font embedding — even though
    // Google Fonts CSS is CORS-blocked in sandboxed previews, the fonts are
    // already loaded in the host doc and the SVG foreignObject renderer
    // ends up using them for the canvas. First capture ~10s (CORS timeout
    // per @font-face). Pre-warmed on page load so user clicks feel instant.
  });
}

// Pre-warm html-to-image so the user's first click feels instant.
// Triggers the slow font-CSS CORS round-trip in the background once fonts load.
let _prewarmed = false;
async function prewarmCapture() {
  if (_prewarmed) return;
  _prewarmed = true;
  try {
    await document.fonts.ready;
    const el = document.querySelector('#capture-v1 .a4');
    if (!el) return;
    // Do a tiny capture just to flush the font CSS fetch attempts.
    await window.htmlToImage.toBlob(el, {
      pixelRatio: 0.5,
      width: el.getBoundingClientRect().width,
      height: el.getBoundingClientRect().height,
      backgroundColor: "#F5F0E6",
    });
  } catch (e) {
    console.warn("Pre-warm failed:", e);
  }
}

// ----- DOCX assembly -------------------------------------------------------

async function buildLetterheadDocx({ pngBlob, marginsTwips, bodyParagraphs }) {
  if (typeof JSZip === "undefined") {
    throw new Error("JSZip não está carregado.");
  }

  const zip = new JSZip();

  zip.file("[Content_Types].xml", CONTENT_TYPES_XML);
  zip.folder("_rels").file(".rels", ROOT_RELS_XML);
  zip.folder("word").folder("_rels").file("document.xml.rels", DOC_RELS_XML);
  zip.folder("word").folder("_rels").file("header1.xml.rels", HEADER_RELS_XML);
  zip.folder("word").file("styles.xml", STYLES_XML);
  zip.folder("word").file("document.xml", buildDocumentXml({ marginsTwips, bodyParagraphs }));
  zip.folder("word").file("header1.xml", buildHeaderXml({}));
  zip.folder("word").folder("media").file("image1.png", pngBlob);

  return await zip.generateAsync({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });
}

// ----- Triggering downloads ------------------------------------------------

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

async function downloadAsDocx(captureElement, filename, marginsTwips, bodyParagraphs) {
  const pngBlob = await captureLetterheadAsPng(captureElement, 2);
  if (!pngBlob) throw new Error("Falha ao gerar imagem do papel timbrado.");
  const docxBlob = await buildLetterheadDocx({ pngBlob, marginsTwips, bodyParagraphs });
  downloadBlob(docxBlob, filename);
}

async function downloadAsPng(captureElement, filename, pixelRatio = 3) {
  const pngBlob = await captureLetterheadAsPng(captureElement, pixelRatio);
  if (!pngBlob) throw new Error("Falha ao gerar imagem.");
  downloadBlob(pngBlob, filename);
}

// ----- Per-variation margins (twips, 1 inch = 1440) -----------------------
//
// Body text margins inside the A4 page. The "safe area" is whatever
// rectangle is free of the decorative letterhead chrome (logo, sidebar,
// footer, watermark). Tuned per variation.

const LETTERHEAD_MARGINS = {
  v1: { top: 5200, right: 1080, bottom: 1100, left: 1500 },  // logo centered top, slim left sidebar
  v2: { top: 3700, right:  960, bottom: 1000, left: 1050 },  // split header, less vertical chrome
  v3: { top: 3200, right:  900, bottom:  900, left: 2400 },  // wide left sidebar
};

Object.assign(window, {
  buildLetterheadDocx,
  buildPetitionBody,
  buildParagraph,
  captureLetterheadAsPng,
  downloadAsDocx,
  downloadAsPng,
  downloadBlob,
  prewarmCapture,
  LETTERHEAD_MARGINS,
});
