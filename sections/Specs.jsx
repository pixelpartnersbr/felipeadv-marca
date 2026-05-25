// Chapter 09 — Especificações & Downloads

function Specs() {
  return (
    <section id="specs" className="chapter deep">
      <div className="section-mark">Cap. 09 · Especificações</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">09</div>
          <div className="chapter-title">
            <div className="eyebrow">Especificações de produção</div>
            <h1 style={{ color: "var(--fbm-paper)" }}>
              Como produzir, onde imprimir, o que entregar.
            </h1>
            <p className="lead">
              Especificações técnicas para impressão e digital — espessuras
              de papel, calibragem de cor, formatos de arquivo aprovados
              para cada uso.
            </p>
          </div>
        </div>

        {/* Papel timbrado — downloads */}
        <SubsectionDark num="9.1" title="Downloads de papel timbrado" />
        <p style={{ color: "var(--fbm-gold-soft)", maxWidth: "60ch", marginBottom: 32 }}>
          Três variações aprovadas. Cada uma disponível em três formatos:
          DOCX (editável no Word), PDF (impressão direta) e PNG (alta resolução).
        </p>
        <div style={{
          background: "var(--fbm-navy-deep)",
          border: "1px solid var(--fbm-navy-soft)",
          marginBottom: 80,
        }}>
          {[
            { num: "01", name: "Clássico centralizado",   link: "letterhead/print-v1.html" },
            { num: "02", name: "Cabeçalho dividido",      link: "letterhead/print-v2.html" },
            { num: "03", name: "Barra lateral editorial", link: "letterhead/print-v3.html" },
          ].map((v, i) => (
            <div key={v.num} style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr auto",
              gap: 24,
              padding: "24px 32px",
              borderTop: i === 0 ? 0 : "1px solid var(--fbm-navy-soft)",
              alignItems: "center",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--fbm-gold)",
              }}>{v.num}</div>
              <div>
                <div className="cinzel" style={{
                  fontSize: 9, letterSpacing: "0.3em",
                  color: "var(--fbm-gold-deep)", marginBottom: 4,
                }}>VARIAÇÃO</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22, color: "var(--fbm-paper)",
                }}>{v.name}</div>
              </div>
              <a href={v.link} target="_blank" rel="noopener" style={{
                padding: "12px 24px",
                background: "var(--fbm-gold)",
                color: "var(--fbm-navy)",
                fontFamily: "'Cinzel', serif",
                fontSize: 10,
                letterSpacing: "0.28em",
                textDecoration: "none",
                border: 0,
                cursor: "pointer",
              }}>BAIXAR ↓</a>
            </div>
          ))}
        </div>

        {/* Print specs */}
        <SubsectionDark num="9.2" title="Especificações de impressão" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          background: "var(--fbm-navy-soft)",
          border: "1px solid var(--fbm-navy-soft)",
          marginBottom: 80,
        }}>
          <SpecBlock title="Papel timbrado" rows={[
            ["Formato",  "A4 · 210 × 297 mm"],
            ["Gramatura", "120 g/m² · papel pólen marfim"],
            ["Cores", "CMYK · perfil ISO Coated v2"],
            ["Acabamento", "Sem laminação, sem verniz"],
            ["Sangra", "3 mm de cada lado"],
          ]} />
          <SpecBlock title="Cartão de visita" rows={[
            ["Formato",  "85 × 54 mm"],
            ["Gramatura", "300 g/m² · couché fosco"],
            ["Cores", "CMYK frente e verso"],
            ["Acabamento", "Laminação fosca · hot stamp dourado opcional no pilar"],
            ["Cantos", "Reto · sem arredondamento"],
          ]} />
          <SpecBlock title="Envelope ofício" rows={[
            ["Formato",  "229 × 162 mm"],
            ["Gramatura", "90 g/m² · papel pólen marfim"],
            ["Impressão", "Apenas frente · alinhada ao papel timbrado"],
            ["Aba", "Trapezoidal · sem janela"],
          ]} />
          <SpecBlock title="Pasta institucional" rows={[
            ["Formato",  "240 × 320 mm (interno A4 + 1 cm)"],
            ["Gramatura", "350 g/m² · cartão supremo"],
            ["Acabamento", "Laminação fosca · hot stamp ouro no pilar"],
            ["Bolso", "Interno único · sem corte para cartão"],
          ]} />
        </div>

        {/* File formats matrix */}
        <SubsectionDark num="9.3" title="Formatos de arquivo por uso" />
        <FormatMatrix />

        {/* Accessibility */}
        <SubsectionDark num="9.4" title="Acessibilidade tipográfica" />
        <p style={{ color: "var(--fbm-gold-soft)", maxWidth: "60ch", marginBottom: 32 }}>
          Mesmo numa marca clássica, contraste e tamanhos mínimos seguem
          padrão WCAG AA. Sem exceções.
        </p>
        <div style={{
          background: "var(--fbm-navy-deep)",
          border: "1px solid var(--fbm-navy-soft)",
          padding: "40px 48px",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
          }}>
            <A11yItem
              ratio="11.2 : 1"
              status="AAA"
              label="Navy sobre Papel"
              detail="#152D52 sobre #F5F0E6"
            />
            <A11yItem
              ratio="4.8 : 1"
              status="AA"
              label="Ouro sobre Papel"
              detail="#9B7F50 sobre #F5F0E6"
              note="Use Ouro Antigo (escuro) para texto. Ouro Pilar (claro) só em fundos escuros."
            />
            <A11yItem
              ratio="9.8 : 1"
              status="AAA"
              label="Papel sobre Navy"
              detail="#F5F0E6 sobre #152D52"
            />
          </div>
        </div>

        {/* Governance */}
        <SubsectionDark num="9.5" title="Governança da marca" />
        <div style={{
          background: "var(--fbm-navy-deep)",
          border: "1px solid var(--fbm-navy-soft)",
          padding: "40px 48px",
          marginBottom: 60,
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "20px 48px" }}>
            <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>RESPONSÁVEL</span>
            <span style={{ color: "var(--fbm-paper)" }}>Felipe de Bortoli Munhoz</span>

            <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>VERSÃO</span>
            <span style={{ color: "var(--fbm-paper)" }}>1.0 · maio de 2026</span>

            <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>REVISÃO PREVISTA</span>
            <span style={{ color: "var(--fbm-paper)" }}>Maio de 2028 (a cada 24 meses)</span>

            <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>EXCEÇÕES</span>
            <span style={{ color: "var(--fbm-gold-soft)", fontStyle: "italic" }}>
              Qualquer uso fora deste manual exige aprovação prévia por escrito.
            </span>
          </div>
        </div>

        {/* Closing */}
        <div style={{
          marginTop: 120,
          paddingTop: 60,
          borderTop: "1px solid var(--fbm-navy-soft)",
          textAlign: "center",
        }}>
          <FBMPillar width={40} height={76} color="var(--fbm-gold)" />
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            fontStyle: "italic",
            color: "var(--fbm-paper)",
            fontWeight: 300,
            margin: "32px 0 16px 0",
            maxWidth: "44ch",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.4,
          }}>
            "A coerência institucional não é fruto do acaso —
            é construção diária, peça a peça."
          </div>
          <div className="cinzel" style={{
            fontSize: 10,
            letterSpacing: "0.4em",
            color: "var(--fbm-gold)",
          }}>
            FIM · MANUAL DA MARCA · EDIÇÃO 01
          </div>
          <div className="mono" style={{
            fontSize: 10,
            color: "var(--fbm-navy-pale)",
            marginTop: 24,
          }}>
            FBM Advocacia · Vila Velha — Espírito Santo · 2026
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecBlock({ title, rows }) {
  return (
    <div style={{ background: "var(--fbm-navy-deep)", padding: 32 }}>
      <div className="cinzel" style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--fbm-gold)", marginBottom: 24 }}>
        {title}
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'EB Garamond', serif", fontSize: 14 }}>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <td style={{ color: "var(--fbm-gold-deep)", padding: "10px 0", verticalAlign: "top", width: 130, fontFamily: "'Cinzel', serif", fontSize: 9, letterSpacing: "0.22em", borderBottom: "1px dotted var(--fbm-navy-soft)" }}>
                {k.toUpperCase()}
              </td>
              <td style={{ color: "var(--fbm-paper)", padding: "10px 0", borderBottom: "1px dotted var(--fbm-navy-soft)" }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FormatMatrix() {
  const rows = [
    ["Web · favicon",         ".SVG · .ICO", "Monograma isolado"],
    ["Web · logo header",     ".SVG",         "Lockup horizontal"],
    ["Documento DOCX",        ".PNG @300dpi", "Papel timbrado inteiro"],
    ["Apresentação Keynote",  ".PDF · .PNG",  "Versões completa e reduzida"],
    ["Impressão offset",      ".PDF · .AI",   "CMYK · com sangra"],
    ["Bordado / hot stamp",   ".DXF · .SVG",  "Apenas monograma"],
    ["Vídeo / motion",        ".MOV · .PNG",  "Com alpha · vetorizado"],
  ];

  return (
    <div style={{
      background: "var(--fbm-navy-deep)",
      border: "1px solid var(--fbm-navy-soft)",
      marginBottom: 80,
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1.4fr",
        background: "var(--fbm-navy)",
        padding: "16px 24px",
      }}>
        {["Aplicação", "Formato", "Variação"].map(h => (
          <div key={h} className="cinzel" style={{
            fontSize: 9.5, letterSpacing: "0.3em",
            color: "var(--fbm-gold)",
          }}>{h}</div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1.4fr",
          padding: "16px 24px",
          borderTop: "1px solid var(--fbm-navy-soft)",
          alignItems: "center",
          fontSize: 14,
        }}>
          <div style={{ color: "var(--fbm-paper)" }}>{r[0]}</div>
          <div className="mono" style={{
            color: "var(--fbm-gold-soft)",
            fontSize: 11,
            letterSpacing: "0.05em",
          }}>{r[1]}</div>
          <div style={{
            color: "var(--fbm-gold-soft)",
            fontStyle: "italic",
            fontSize: 14,
          }}>{r[2]}</div>
        </div>
      ))}
    </div>
  );
}

function A11yItem({ ratio, status, label, detail, note }) {
  const colors = {
    AAA: "var(--fbm-success)",
    AA: "var(--fbm-gold)",
  };
  return (
    <div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 56,
        fontWeight: 300,
        color: "var(--fbm-paper)",
        lineHeight: 1,
        marginBottom: 8,
      }}>{ratio}</div>
      <div style={{
        display: "inline-block",
        padding: "3px 10px",
        background: colors[status],
        color: "var(--fbm-navy-deep)",
        fontFamily: "'Cinzel', serif",
        fontSize: 10,
        letterSpacing: "0.22em",
        marginBottom: 16,
      }}>{status}</div>
      <div style={{ color: "var(--fbm-paper)", fontSize: 15, marginBottom: 4 }}>{label}</div>
      <div className="mono" style={{ color: "var(--fbm-gold-deep)", fontSize: 10 }}>{detail}</div>
      {note && (
        <div style={{ marginTop: 12, fontSize: 12.5, color: "var(--fbm-gold-soft)", fontStyle: "italic", lineHeight: 1.5 }}>
          {note}
        </div>
      )}
    </div>
  );
}

window.Specs = Specs;
