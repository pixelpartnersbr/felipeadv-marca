// Chapter 04 — Tipografia

const TYPE_SCALE = [
  { token: "Display",   font: "Cormorant Garamond", weight: 400, size: 96, line: 1.0,  letter: -0.01, use: "Capa, abertura de capítulos" },
  { token: "Heading 1", font: "Cormorant Garamond", weight: 400, size: 56, line: 1.08, letter: -0.005, use: "Títulos de seção" },
  { token: "Heading 2", font: "Cormorant Garamond", weight: 500, size: 36, line: 1.15, letter: 0,    use: "Subtítulos editoriais" },
  { token: "Heading 3", font: "Cinzel",             weight: 600, size: 14, line: 1.4,  letter: 0.22, use: "Etiquetas, eyebrows, OAB" },
  { token: "Body",      font: "EB Garamond",        weight: 400, size: 17, line: 1.55, letter: 0,    use: "Texto corrido, parágrafos" },
  { token: "Caption",   font: "EB Garamond",        weight: 400, size: 13.5, line: 1.5, letter: 0,   use: "Legendas, observações" },
  { token: "Mono",      font: "JetBrains Mono",     weight: 500, size: 11, line: 1.5,  letter: 0.05, use: "Dados técnicos, números de processo" },
];

function Typography() {
  return (
    <section id="tipografia" className="chapter">
      <div className="section-mark">Cap. 04 · Tipografia</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">04</div>
          <div className="chapter-title">
            <div className="eyebrow">Sistema tipográfico</div>
            <h1>Três famílias trabalhando juntas — uma para gravar, uma para ler, uma para registrar.</h1>
            <p className="lead">
              A hierarquia tipográfica é o sistema mais visível da marca.
              Combinamos Cinzel para a função epigráfica (etiquetas e
              monumentos), Cormorant/EB Garamond para a leitura humana
              e JetBrains Mono para os dados técnicos.
            </p>
          </div>
        </div>

        {/* Type families */}
        <SubsectionTitle num="4.1" title="As três famílias" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--fbm-rule)",
          border: "1px solid var(--fbm-rule)",
          marginBottom: 100,
        }}>
          <FontFamily
            family="Cinzel"
            role="Função epigráfica"
            desc="Inspirada em inscrições romanas, é usada para títulos curtos, eyebrows e identificadores."
            sample="OAB/ES 27.026"
            sampleFont="'Cinzel', serif"
            sampleSize={42}
            sampleSpacing="0.18em"
            sampleWeight={600}
            weights={["400", "500", "600", "700"]}
          />
          <FontFamily
            family="Cormorant Garamond"
            role="Função expressiva"
            desc="Serif de transição com altíssima personalidade. Para títulos e momentos editoriais."
            sample="Iustitia"
            sampleFont="'Cormorant Garamond', serif"
            sampleSize={72}
            sampleWeight={400}
            sampleStyle="italic"
            weights={["300", "400", "500", "600"]}
          />
          <FontFamily
            family="EB Garamond"
            role="Função de leitura"
            desc="Renderização digital fiel do Garamond clássico. Texto longo, ofícios, peças."
            sample="Aabcdefgh"
            sampleFont="'EB Garamond', serif"
            sampleSize={48}
            sampleWeight={400}
            weights={["400", "500", "600", "700"]}
          />
        </div>

        {/* Type scale */}
        <SubsectionTitle num="4.2" title="Escala tipográfica" />
        <div>
          {TYPE_SCALE.map(s => (
            <div key={s.token} className="specimen">
              <div className="meta">
                <div className="role">{s.token.toUpperCase()}</div>
                <div className="name">{s.font}</div>
                <div style={{ marginTop: 16 }}>
                  <div>{s.size}px · {s.weight}</div>
                  <div>line {s.line} · tracking {s.letter > 0 ? `+${s.letter*1000}` : s.letter*1000}</div>
                </div>
                <div style={{ marginTop: 16, fontStyle: "italic", color: "var(--fbm-gold-deep)", fontFamily: "'EB Garamond', serif", fontSize: 13.5 }}>
                  {s.use}
                </div>
              </div>
              <div className="glyphs" style={{
                fontFamily: `'${s.font}', serif`,
                fontSize: Math.min(s.size, 56),
                lineHeight: s.line,
                fontWeight: s.weight,
                letterSpacing: `${s.letter}em`,
                textTransform: s.font === "Cinzel" ? "uppercase" : "none",
              }}>
                {s.token === "Display" || s.token === "Heading 1"
                  ? "Direito, escrito"
                  : s.token === "Mono"
                  ? "0000000-00.2026.8.08.0000"
                  : "Da mesma forma como o Estado é estruturado, também a comunicação do escritório é estruturada."}
              </div>
            </div>
          ))}
        </div>

        {/* Pairing examples */}
        <SubsectionTitle num="4.3" title="Combinações em uso" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}>
          <PairingExample
            label="Cabeçalho de peça"
            eyebrow="OAB/ES 27.026"
            title="PETIÇÃO INICIAL"
            sub="Vila Velha — ES · Vara Cível"
          />
          <PairingExample
            label="Slide / apresentação"
            eyebrow="Capítulo 03"
            title="O contrato"
            sub="Como redigimos vínculos que sobrevivem ao desgaste"
            italic
          />
        </div>
      </div>
    </section>
  );
}

function FontFamily({ family, role, desc, sample, sampleFont, sampleSize, sampleWeight, sampleStyle, sampleSpacing, weights }) {
  return (
    <div style={{
      background: "var(--fbm-paper)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      minHeight: 360,
    }}>
      <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--fbm-gold-deep)", marginBottom: 6 }}>
        {role}
      </div>
      <div style={{
        fontFamily: sampleFont,
        fontSize: 32,
        color: "var(--fbm-navy)",
        marginBottom: 20,
        fontWeight: family === "Cinzel" ? 600 : 400,
        letterSpacing: family === "Cinzel" ? "0.04em" : 0,
      }}>
        {family}
      </div>
      <p style={{
        fontSize: 13.5,
        color: "var(--fbm-ink-soft)",
        lineHeight: 1.55,
        margin: 0,
      }}>{desc}</p>

      <div style={{
        marginTop: "auto",
        paddingTop: 28,
        borderTop: "1px solid var(--fbm-rule)",
        marginTop: 28,
      }}>
        <div style={{
          fontFamily: sampleFont,
          fontSize: sampleSize,
          fontWeight: sampleWeight,
          fontStyle: sampleStyle || "normal",
          letterSpacing: sampleSpacing || 0,
          color: "var(--fbm-navy)",
          lineHeight: 1,
          marginBottom: 16,
          minHeight: sampleSize * 1.1,
        }}>{sample}</div>
        <div style={{
          display: "flex",
          gap: 12,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: "var(--fbm-ink-pale)",
          letterSpacing: "0.05em",
        }}>
          {weights.map(w => <span key={w}>{w}</span>)}
        </div>
      </div>
    </div>
  );
}

function PairingExample({ label, eyebrow, title, sub, italic }) {
  return (
    <div style={{ background: "var(--fbm-paper)", border: "1px solid var(--fbm-rule)" }}>
      <div style={{
        padding: "60px 40px",
        minHeight: 220,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <div className="cinzel" style={{
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "var(--fbm-gold-deep)",
          marginBottom: 14,
        }}>{eyebrow}</div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 44,
          fontStyle: italic ? "italic" : "normal",
          fontWeight: italic ? 400 : 500,
          color: "var(--fbm-navy)",
          marginBottom: 12,
          lineHeight: 1.05,
          letterSpacing: italic ? "-0.005em" : "0.02em",
        }}>{title}</div>
        <div style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: 16,
          fontStyle: "italic",
          color: "var(--fbm-ink-soft)",
        }}>{sub}</div>
      </div>
      <div style={{
        borderTop: "1px solid var(--fbm-rule)",
        padding: "12px 20px",
      }}>
        <div className="cinzel" style={{
          fontSize: 9,
          letterSpacing: "0.28em",
          color: "var(--fbm-ink-pale)",
        }}>{label}</div>
      </div>
    </div>
  );
}

window.Typography = Typography;
