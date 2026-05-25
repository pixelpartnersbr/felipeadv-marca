// Chapter 03 — Colors (paleta)

const PALETTE = [
  {
    group: "primary",
    colors: [
      { name: "Navy Tribunal",  role: "Cor primária",   hex: "#152D52", rgb: "21, 45, 82",   cmyk: "100 88 33 38", pantone: "PMS 281 C", oklch: "0.27 0.10 263" },
      { name: "Ouro Pilar",     role: "Cor de acento",  hex: "#BC9D6E", rgb: "188, 157, 110", cmyk: "20 35 60 6",   pantone: "PMS 4525 C", oklch: "0.71 0.07 76" },
      { name: "Papel Cartório", role: "Fundo neutro",   hex: "#F5F0E6", rgb: "245, 240, 230", cmyk: "3 4 9 0",      pantone: "PMS Warm Gray 1 C", oklch: "0.96 0.01 85" },
    ],
  },
  {
    group: "support",
    colors: [
      { name: "Navy Profundo", role: "Apoio escuro",  hex: "#0E1F3A", rgb: "14, 31, 58",   cmyk: "100 90 50 60", pantone: "—", oklch: "0.20 0.08 263" },
      { name: "Ouro Antigo",   role: "Apoio dourado", hex: "#9B7F50", rgb: "155, 127, 80",  cmyk: "28 42 70 15", pantone: "—", oklch: "0.60 0.07 71"  },
      { name: "Papel Quente",  role: "Apoio cream",   hex: "#EFE7D6", rgb: "239, 231, 214", cmyk: "5 7 16 0",    pantone: "—", oklch: "0.94 0.02 85"  },
      { name: "Tinta",         role: "Tipografia",    hex: "#1B2436", rgb: "27, 36, 54",    cmyk: "85 75 45 50", pantone: "Black 7 C", oklch: "0.26 0.03 263" },
      { name: "Régua",         role: "Linhas finas",  hex: "#D9CDB4", rgb: "217, 205, 180", cmyk: "10 15 30 5",  pantone: "—", oklch: "0.85 0.03 85"  },
    ],
  },
];

function Colors() {
  const [copied, setCopied] = React.useState(null);

  function copy(hex, key) {
    navigator.clipboard?.writeText(hex);
    setCopied(key);
    setTimeout(() => setCopied(null), 1200);
  }

  return (
    <section id="cores" className="chapter dark">
      <div className="section-mark">Cap. 03 · Cores</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">03</div>
          <div className="chapter-title">
            <div className="eyebrow">Paleta de cores</div>
            <h1 style={{ color: "var(--fbm-paper)" }}>
              Três cores essenciais. Cinco de apoio. Nenhuma a mais.
            </h1>
            <p className="lead">
              A paleta deriva diretamente da iconografia clássica do direito:
              o azul profundo das togas e códigos, o dourado do pilar e o
              creme do papel-ofício. Nenhuma cor entra na paleta sem
              justificativa funcional.
            </p>
          </div>
        </div>

        {/* Primary palette */}
        <div style={{ marginTop: 40 }}>
          <PaletteSection
            label="3.1 · Cores primárias"
            sub="As três cores que carregam 90% da identidade. Devem aparecer em qualquer aplicação institucional."
            colors={PALETTE[0].colors}
            copied={copied}
            onCopy={copy}
          />
        </div>

        {/* Support palette */}
        <div style={{ marginTop: 100 }}>
          <PaletteSection
            label="3.2 · Cores de apoio"
            sub="Variações para hierarquia, contraste e legibilidade. Usar com parcimônia."
            colors={PALETTE[1].colors}
            copied={copied}
            onCopy={copy}
            compact
          />
        </div>

        {/* Proportions */}
        <div style={{ marginTop: 120 }}>
          <SubsectionDark num="3.3" title="Proporção recomendada" />
          <p style={{
            color: "var(--fbm-gold-soft)",
            maxWidth: "60ch",
            marginBottom: 32,
          }}>
            A hierarquia de presença mantém a sobriedade institucional:
            o papel domina, o navy estrutura e o ouro pontua.
          </p>
          <ProportionBar />
        </div>

        {/* Combinations */}
        <div style={{ marginTop: 120 }}>
          <SubsectionDark num="3.4" title="Combinações aprovadas" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            marginTop: 24,
          }}>
            <Combo fg="#152D52" bg="#F5F0E6" label="Navy sobre cream" rec="Padrão"/>
            <Combo fg="#F5F0E6" bg="#152D52" label="Cream sobre navy" rec="Cabeçalhos escuros"/>
            <Combo fg="#9B7F50" bg="#F5F0E6" label="Ouro sobre cream" rec="Detalhes refinados"/>
            <Combo fg="#BC9D6E" bg="#152D52" label="Ouro sobre navy" rec="Acentos elegantes"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaletteSection({ label, sub, colors, copied, onCopy, compact }) {
  return (
    <div>
      <SubsectionDark num={label.split(" · ")[0]} title={label.split(" · ")[1]} />
      <p style={{
        color: "var(--fbm-gold-soft)",
        maxWidth: "60ch",
        marginBottom: 32,
      }}>{sub}</p>
      <div style={{
        display: "grid",
        gridTemplateColumns: compact ? "repeat(auto-fit, minmax(200px, 1fr))" : "repeat(3, 1fr)",
        gap: 16,
      }}>
        {colors.map(c => (
          <div
            key={c.hex}
            className={`swatch ${copied === c.hex ? "copied" : ""}`}
            onClick={() => onCopy(c.hex, c.hex)}
          >
            <div className="chip" data-copy={`Clique para copiar ${c.hex}`}
                 style={{ background: c.hex, height: compact ? 140 : 220 }}>
            </div>
            <div className="meta">
              <div className="role">{c.role}</div>
              <div className="name">{c.name}</div>
              {!compact && (
                <div className="values">
                  <div><span>HEX</span><span>{c.hex}</span></div>
                  <div><span>RGB</span><span>{c.rgb}</span></div>
                  <div><span>CMYK</span><span>{c.cmyk}</span></div>
                  <div><span>Pantone</span><span>{c.pantone}</span></div>
                </div>
              )}
              {compact && (
                <div className="values">
                  <div><span>HEX</span><span>{c.hex}</span></div>
                  <div><span>CMYK</span><span>{c.cmyk}</span></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubsectionDark({ num, title }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "baseline",
      gap: 20,
      paddingBottom: 16,
      borderBottom: "1px solid var(--fbm-navy-soft)",
      marginBottom: 32,
    }}>
      <span className="mono" style={{ color: "var(--fbm-gold)", fontSize: 13 }}>{num}</span>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "var(--fs-h2)",
        fontWeight: 400,
        margin: 0,
        color: "var(--fbm-paper)",
        letterSpacing: "-0.005em",
      }}>{title}</h2>
    </div>
  );
}

function ProportionBar() {
  return (
    <div>
      <div style={{
        display: "flex",
        height: 80,
        border: "1px solid var(--fbm-navy-soft)",
        borderRadius: 2,
        overflow: "hidden",
      }}>
        <div style={{ flex: 70, background: "#F5F0E6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="cinzel" style={{ fontSize: 11, color: "var(--fbm-navy)" }}>70% Papel</span>
        </div>
        <div style={{ flex: 22, background: "#152D52", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="cinzel" style={{ fontSize: 11, color: "var(--fbm-paper)" }}>22% Navy</span>
        </div>
        <div style={{ flex: 8, background: "#BC9D6E", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="cinzel" style={{ fontSize: 10, color: "var(--fbm-navy-deep)" }}>8% Ouro</span>
        </div>
      </div>
      <div style={{
        display: "flex",
        fontSize: 11,
        color: "var(--fbm-gold-soft)",
        marginTop: 14,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.08em",
      }}>
        <div style={{ flex: 70 }}>Fundos, áreas vazias, papel</div>
        <div style={{ flex: 22 }}>Tipografia, estrutura</div>
        <div style={{ flex: 8 }}>Detalhes, linhas, acentos</div>
      </div>
    </div>
  );
}

function Combo({ fg, bg, label, rec }) {
  return (
    <div style={{ border: "1px solid var(--fbm-navy-soft)" }}>
      <div style={{
        background: bg,
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: fg,
          fontSize: 28,
          fontStyle: "italic",
        }}>Aa</div>
      </div>
      <div style={{ padding: "14px 16px", background: "var(--fbm-navy-deep)" }}>
        <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-paper)", marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 12, color: "var(--fbm-gold-soft)", fontStyle: "italic" }}>{rec}</div>
      </div>
    </div>
  );
}

window.Colors = Colors;
window.PALETTE = PALETTE;
window.SubsectionDark = SubsectionDark;
