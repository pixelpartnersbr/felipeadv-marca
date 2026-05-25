// Chapter 05 — Elementos gráficos

function Elements() {
  return (
    <section id="elementos" className="chapter warm">
      <div className="section-mark">Cap. 05 · Elementos</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">05</div>
          <div className="chapter-title">
            <div className="eyebrow">Sistema gráfico</div>
            <h1>O pilar, a régua, a numeração. Vocabulário pequeno, gramática rigorosa.</h1>
            <p className="lead">
              Além da marca, a identidade se sustenta sobre quatro elementos
              gráficos auxiliares. Cada um tem função estrutural definida e
              não pode ser substituído ou inventado.
            </p>
          </div>
        </div>

        {/* The pillar */}
        <SubsectionTitle num="5.1" title="O pilar dórico" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          background: "var(--fbm-rule)",
          border: "1px solid var(--fbm-rule)",
          marginBottom: 80,
        }}>
          <div style={{
            background: "var(--fbm-paper)",
            padding: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 360,
          }}>
            <FBMPillar width={120} height={220} color="var(--fbm-gold-deep)" />
          </div>
          <div style={{ background: "var(--fbm-paper)", padding: 48 }}>
            <div className="cinzel" style={{
              fontSize: 10, letterSpacing: "0.28em",
              color: "var(--fbm-gold-deep)", marginBottom: 16,
            }}>SÍMBOLO CENTRAL</div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 32, fontWeight: 400, margin: "0 0 20px 0",
              color: "var(--fbm-navy)",
            }}>Coluna sustentadora</h3>
            <p style={{ color: "var(--fbm-ink-soft)", lineHeight: 1.6, marginBottom: 24 }}>
              O pilar é a única figura simbólica autorizada na identidade.
              Remete diretamente à arquitetura jurídica clássica — a coluna
              do templo, o pilar do contrato, o sustento da ordem.
            </p>
            <UsageList items={[
              "Marca d'água sutil em documentos",
              "Selo isolado em redes sociais",
              "Elemento decorativo em fundo de slides",
              "Marca tipográfica em cabeçalhos",
            ]} />
          </div>
        </div>

        {/* Gold rule */}
        <SubsectionTitle num="5.2" title="A régua dourada" />
        <RuleShowcase />

        {/* Numbering system */}
        <SubsectionTitle num="5.3" title="Sistema de numeração" />
        <p style={{ maxWidth: "60ch", color: "var(--fbm-ink-soft)", marginBottom: 32 }}>
          Números são tratados como elementos editoriais — Cormorant
          itálico para chamadas, Cinzel para identificadores, JetBrains
          Mono para dados técnicos.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--fbm-rule)",
          border: "1px solid var(--fbm-rule)",
        }}>
          <NumberStyle
            type="Editorial"
            usage="Capa de capítulos, destaques"
            font="'Cormorant Garamond', serif"
            italic
            samples={["01", "02", "03"]}
          />
          <NumberStyle
            type="Identificador"
            usage="OAB, processos, etiquetas"
            font="'Cinzel', serif"
            spacing="0.18em"
            samples={["1.0", "27.026", "08"]}
          />
          <NumberStyle
            type="Dados técnicos"
            usage="Números de processo, datas"
            font="'JetBrains Mono', monospace"
            samples={["0000000", "2026.8.08", "13.5px"]}
          />
        </div>

        {/* Texture / pattern */}
        <SubsectionTitle num="5.4" title="Padrão de fundo" />
        <p style={{ maxWidth: "60ch", color: "var(--fbm-ink-soft)", marginBottom: 32 }}>
          Para superfícies que precisam de profundidade sem ornamento — capas,
          divisórias, fundos de slide — o pilar pode ser repetido em padrão
          discreto, sempre em opacidade ≤ 5%.
        </p>
        <PillarPattern />
      </div>
    </section>
  );
}

function UsageList({ items }) {
  return (
    <ul style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.6,
    }}>
      {items.map((t, i) => (
        <li key={i} style={{
          display: "grid",
          gridTemplateColumns: "20px 1fr",
          gap: 12,
          padding: "10px 0",
          borderBottom: i === items.length - 1 ? 0 : "1px dotted var(--fbm-rule)",
          color: "var(--fbm-ink)",
        }}>
          <span style={{ color: "var(--fbm-gold)", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>·</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function RuleShowcase() {
  return (
    <div style={{
      background: "var(--fbm-paper)",
      border: "1px solid var(--fbm-rule)",
      padding: "60px 40px",
      marginBottom: 80,
    }}>
      <div style={{ display: "grid", gap: 48 }}>
        <RuleVariant label="Régua simples · 1px" sample={<hr className="gold-rule" style={{ width: "100%" }} />} usage="Separador padrão" />
        <RuleVariant label="Régua tracejada · 1px" sample={<div style={{ borderTop: "1px dashed var(--fbm-gold)", width: "100%" }} />} usage="Divisão delicada, rodapé" />
        <RuleVariant label="Régua dupla · 4px" sample={
          <div style={{ height: 6, width: "100%", borderTop: "1px solid var(--fbm-gold)", borderBottom: "1px solid var(--fbm-gold)" }} />
        } usage="Destaque editorial, abertura de seção" />
        <RuleVariant label="Régua dupla com losango" sample={
          <div style={{ height: 8, width: "100%", borderTop: "1px solid var(--fbm-gold)", borderBottom: "1px solid var(--fbm-gold)", position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: -4, width: 8, height: 8, background: "var(--fbm-paper)", borderLeft: "1px solid var(--fbm-gold)", borderRight: "1px solid var(--fbm-gold)", transform: "translateX(-50%)" }}>
              <div style={{ position: "absolute", inset: 2, background: "var(--fbm-gold)" }}></div>
            </div>
          </div>
        } usage="Cabeçalho de papelaria nobre" />
      </div>
    </div>
  );
}

function RuleVariant({ label, sample, usage }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 180px", gap: 32, alignItems: "center" }}>
      <div>
        <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--fbm-navy)" }}>{label}</div>
      </div>
      <div>{sample}</div>
      <div style={{ fontSize: 12.5, color: "var(--fbm-ink-soft)", fontStyle: "italic", textAlign: "right" }}>
        {usage}
      </div>
    </div>
  );
}

function NumberStyle({ type, usage, font, italic, spacing, samples }) {
  return (
    <div style={{ background: "var(--fbm-paper)", padding: 32 }}>
      <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.3em", marginBottom: 4 }}>
        {type.toUpperCase()}
      </div>
      <div style={{ fontSize: 13.5, color: "var(--fbm-ink-soft)", fontStyle: "italic", marginBottom: 32 }}>
        {usage}
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}>
        {samples.map((s, i) => (
          <div key={i} style={{
            fontFamily: font,
            fontSize: i === 0 ? 56 : (i === 1 ? 38 : 22),
            fontStyle: italic ? "italic" : "normal",
            fontWeight: italic ? 300 : (font.includes("Cinzel") ? 600 : 500),
            color: i === 0 ? "var(--fbm-gold)" : "var(--fbm-navy)",
            letterSpacing: spacing || 0,
            lineHeight: 1,
          }}>{s}</div>
        ))}
      </div>
    </div>
  );
}

function PillarPattern() {
  // Generate a grid of small pillar marks at low opacity
  const rows = 4;
  const cols = 9;
  return (
    <div style={{
      background: "var(--fbm-navy)",
      padding: 48,
      border: "1px solid var(--fbm-rule)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="pillar-pattern-grid" style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: 28,
        minHeight: 280,
        placeItems: "center",
      }}>
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div key={i} style={{ opacity: 0.16 }}>
            <FBMPillar width={22} height={42} color="var(--fbm-gold)" />
          </div>
        ))}
      </div>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, transparent 0%, rgba(21,45,82,0.7) 100%)",
        display: "flex",
        alignItems: "flex-end",
        padding: 32,
      }}>
        <div className="cinzel" style={{
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "var(--fbm-gold-soft)",
        }}>
          Padrão "Colunata" · Opacidade 16% · Para fundos institucionais
        </div>
      </div>
    </div>
  );
}

window.Elements = Elements;
