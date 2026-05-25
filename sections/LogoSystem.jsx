// Chapter 02 — Marca / Logo system
// Primary mark, variations, clear space, minimum sizes, color treatments, monogram

function LogoSystem() {
  return (
    <section id="marca" className="chapter warm">
      <div className="section-mark">Cap. 02 · Marca</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">02</div>
          <div className="chapter-title">
            <div className="eyebrow">A marca</div>
            <h1>O pilar, o monograma e o nome — três peças, uma só assinatura.</h1>
            <p className="lead">
              A marca FBM é construída sobre três elementos indissociáveis:
              o pilar clássico (símbolo central), o monograma (FBM) e a
              linha tipográfica do nome completo. As variações abaixo
              cobrem todos os usos institucionais permitidos.
            </p>
          </div>
        </div>

        {/* Primary lockup */}
        <PrimaryShowcase />

        {/* Variations grid */}
        <SubsectionTitle num="2.1" title="Variações autorizadas" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }}>
          <LogoSlot label="Versão completa" desc="Aplicação institucional padrão. Documentos, papelaria, fachada.">
            <FBMLogo width={260} showName={true} paperColor="var(--fbm-paper)" />
          </LogoSlot>

          <LogoSlot label="Versão reduzida" desc="Cabeçalhos, peças com pouca altura, slides.">
            <FBMLogo width={220} showName={false} paperColor="var(--fbm-paper)" />
          </LogoSlot>

          <LogoSlot label="Lockup horizontal" desc="Cabeçalho de e-mail, assinatura digital, slides 16:9.">
            <FBMHorizontal height={70} />
          </LogoSlot>

          <LogoSlot label="Monograma isolado" desc="Avatar de rede social, favicon, marca d'água, selo.">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 160 }}>
              <FBMPillar width={80} height={140} color="var(--fbm-gold)" />
            </div>
          </LogoSlot>
        </div>

        {/* Clear space */}
        <SubsectionTitle num="2.2" title="Área de respiro" />
        <p style={{ maxWidth: "60ch", color: "var(--fbm-ink-soft)", marginBottom: 40 }}>
          A unidade de respiro <strong>X</strong> equivale à altura da letra "M" no
          monograma. Nenhum elemento gráfico, texto ou borda deve invadir a
          área marcada — sob nenhuma circunstância.
        </p>
        <ClearSpaceDemo />

        {/* Minimum sizes */}
        <SubsectionTitle num="2.3" title="Tamanhos mínimos" />
        <MinSizeRow />

        {/* Color variations */}
        <SubsectionTitle num="2.4" title="Tratamentos cromáticos" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--fbm-rule)",
          border: "1px solid var(--fbm-rule)",
        }}>
          <ColorTreatment bg="var(--fbm-paper)" label="Padrão sobre cream" rec="Preferencial">
            <FBMLogo width={200} showName={true} paperColor="var(--fbm-paper)" />
          </ColorTreatment>
          <ColorTreatment bg="white" label="Sobre branco puro" rec="Permitida">
            <FBMLogo width={200} showName={true} paperColor="white" />
          </ColorTreatment>
          <ColorTreatment bg="var(--fbm-navy)" label="Negativa sobre navy" rec="Para fundos escuros" dark>
            <NegativeLogo width={200} />
          </ColorTreatment>
        </div>
      </div>
    </section>
  );
}

function PrimaryShowcase() {
  return (
    <div style={{
      background: "var(--fbm-paper)",
      border: "1px solid var(--fbm-rule)",
      padding: "80px 40px",
      marginBottom: 100,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 48,
    }}>
      <div className="showcase-labels" style={{
        position: "absolute",
        top: 24,
        left: 32,
        right: 32,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <div className="eyebrow no-rule">2.0 · Marca primária</div>
        <div className="mono">ASSINATURA OFICIAL</div>
      </div>

      <FBMLogo width={420} showName={true} paperColor="var(--fbm-paper)" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gap: 60,
        paddingTop: 32,
        borderTop: "1px solid var(--fbm-rule)",
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <CompositionMeta label="Símbolo" value="Pilar dórico" />
        <CompositionMeta label="Monograma" value="FBM" />
        <CompositionMeta label="Tipografia" value="Cinzel · Garamond" />
      </div>
    </div>
  );
}

function CompositionMeta({ label, value }) {
  return (
    <div>
      <div className="cinzel" style={{
        fontSize: 9,
        letterSpacing: "0.32em",
        color: "var(--fbm-gold-deep)",
        marginBottom: 6,
      }}>{label}</div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 22,
        color: "var(--fbm-navy)",
        fontStyle: "italic",
        fontWeight: 400,
      }}>{value}</div>
    </div>
  );
}

function SubsectionTitle({ num, title }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "baseline",
      gap: 20,
      marginTop: 100,
      marginBottom: 32,
      paddingBottom: 16,
      borderBottom: "1px solid var(--fbm-rule)",
    }}>
      <span className="mono" style={{
        color: "var(--fbm-gold)",
        fontSize: 13,
      }}>{num}</span>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "var(--fs-h2)",
        fontWeight: 400,
        margin: 0,
        color: "var(--fbm-navy)",
        letterSpacing: "-0.005em",
      }}>{title}</h2>
    </div>
  );
}

function LogoSlot({ label, desc, children }) {
  return (
    <div style={{
      background: "var(--fbm-paper)",
      border: "1px solid var(--fbm-rule)",
    }}>
      <div style={{
        padding: 40,
        minHeight: 240,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {children}
      </div>
      <div style={{
        borderTop: "1px solid var(--fbm-rule)",
        padding: "18px 24px",
      }}>
        <div className="cinzel" style={{
          fontSize: 10,
          color: "var(--fbm-navy)",
          marginBottom: 4,
        }}>{label}</div>
        <div style={{
          fontSize: 13.5,
          color: "var(--fbm-ink-soft)",
          lineHeight: 1.5,
        }}>{desc}</div>
      </div>
    </div>
  );
}

function ClearSpaceDemo() {
  // X = ~14px in this rendering
  const X = 14;
  return (
    <div style={{
      background: "var(--fbm-paper)",
      border: "1px solid var(--fbm-rule)",
      padding: 60,
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        position: "relative",
        padding: X * 3,
        outline: `1px dashed var(--fbm-gold)`,
      }}>
        {/* X markers */}
        <span style={{
          position: "absolute", top: -10, left: -10,
          fontFamily: "'Cinzel', serif", fontSize: 10, color: "var(--fbm-gold-deep)",
          background: "var(--fbm-paper)", padding: "2px 4px",
        }}>3X</span>

        <FBMLogo width={260} showName={true} paperColor="var(--fbm-paper)" />
      </div>
    </div>
  );
}

function MinSizeRow() {
  const sizes = [
    { label: "Impresso · 40mm", w: 200, ctx: "Cartões, papelaria" },
    { label: "Digital · 120px", w: 120, ctx: "Cabeçalhos web" },
    { label: "Mínimo · 24mm",   w: 96, ctx: "Limite absoluto" },
  ];
  return (
    <div style={{
      background: "var(--fbm-paper)",
      border: "1px solid var(--fbm-rule)",
      padding: "60px 40px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-end",
      gap: 40,
      flexWrap: "wrap",
    }}>
      {sizes.map(s => (
        <div key={s.label} style={{ textAlign: "center" }}>
          <div style={{ marginBottom: 24, minHeight: 100, display: "flex", alignItems: "flex-end" }}>
            <FBMHorizontal height={s.w / 3.8} />
          </div>
          <hr className="divider-rule" />
          <div className="cinzel" style={{
            fontSize: 10,
            color: "var(--fbm-navy)",
            marginTop: 16,
          }}>{s.label}</div>
          <div style={{
            fontSize: 12,
            color: "var(--fbm-ink-pale)",
            marginTop: 4,
          }}>{s.ctx}</div>
        </div>
      ))}
    </div>
  );
}

function ColorTreatment({ bg, label, rec, children, dark }) {
  return (
    <div style={{ background: "var(--fbm-paper)" }}>
      <div style={{
        background: bg,
        padding: "60px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 220,
      }}>
        {children}
      </div>
      <div style={{ padding: 20 }}>
        <div className="cinzel" style={{
          fontSize: 10,
          color: "var(--fbm-navy)",
          marginBottom: 4,
        }}>{label}</div>
        <div style={{ fontSize: 12.5, color: "var(--fbm-gold-deep)", fontStyle: "italic" }}>
          {rec}
        </div>
      </div>
    </div>
  );
}

// Negative version of the logo (gold pillar + cream FBM on dark)
function NegativeLogo({ width = 200 }) {
  const h = width / 1.5;
  return (
    <svg width={width} height={h} viewBox="0 0 360 240" style={{ display: "block" }}>
      <g transform="translate(120, 0)">
        <g fill="var(--fbm-gold)">
          <rect x="0"  y="20" width="120" height="9" />
          <rect x="8"  y="29" width="104" height="6" />
          <rect x="16" y="35" width="88"  height="5" />
          <rect x="22" y="40" width="76"  height="4" />
          <rect x="18" y="44" width="84"  height="6" />
          <rect x="24" y="50" width="72"  height="76" />
          <rect x="18" y="126" width="84" height="6" />
          <rect x="22" y="132" width="76" height="4" />
          <rect x="16" y="136" width="88" height="5" />
          <rect x="8"  y="141" width="104" height="6" />
          <rect x="0"  y="147" width="120" height="9" />
        </g>
        <g fill="var(--fbm-navy)">
          <rect x="30" y="54" width="2.5" height="68" />
          <rect x="40" y="54" width="2.5" height="68" />
          <rect x="50" y="54" width="2.5" height="68" />
          <rect x="60" y="54" width="2.5" height="68" />
          <rect x="70" y="54" width="2.5" height="68" />
          <rect x="80" y="54" width="2.5" height="68" />
          <rect x="87.5" y="54" width="2.5" height="68" />
        </g>
      </g>
      <text x="180" y="92" textAnchor="middle"
            fontFamily="'Cormorant Garamond', serif" fontSize="74" fontWeight="500"
            fill="var(--fbm-paper)" letterSpacing="2">FBM</text>
      <text x="180" y="180" textAnchor="middle"
            fontFamily="'Cinzel', serif" fontSize="18.5" fontWeight="600"
            fill="var(--fbm-paper)" letterSpacing="2">FELIPE DE BORTOLI MUNHOZ</text>
      <text x="180" y="205" textAnchor="middle"
            fontFamily="'Cinzel', serif" fontSize="11" fontWeight="500"
            fill="var(--fbm-gold)" letterSpacing="3.5">OAB/ES 27.026</text>
    </svg>
  );
}

window.LogoSystem = LogoSystem;
window.NegativeLogo = NegativeLogo;
window.SubsectionTitle = SubsectionTitle;
