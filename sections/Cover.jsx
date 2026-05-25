// Cover + Manifesto (chapters 00, 01)

function Cover() {
  return (
    <section id="cover" className="chapter" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 64,
      paddingBottom: 48,
    }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.18em",
          color: "var(--fbm-ink-pale)",
          textTransform: "uppercase",
        }}>
          <span>FBM — Identidade Visual</span>
          <span>Edição 01 · 2026</span>
        </div>
      </div>

      <div className="container" style={{ width: "100%" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow no-rule" style={{ marginBottom: 28 }}>
            Manual da Marca · v 1.0
          </div>
          <h1 className="serif-display" style={{
            fontSize: "var(--fs-mega)",
            margin: 0,
            color: "var(--fbm-navy)",
            fontWeight: 300,
          }}>
            Felipe de Bortoli<br/>
            <em style={{ color: "var(--fbm-gold-deep)", fontWeight: 300 }}>Munhoz</em>
          </h1>
          <div style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}>
            <div style={{ width: 60, height: 1, background: "var(--fbm-gold)" }} />
            <div className="cinzel" style={{
              fontSize: 13,
              letterSpacing: "0.4em",
              color: "var(--fbm-gold-deep)",
            }}>
              Advocacia · OAB/ES 27.026
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 380px) 1fr",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "end",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            padding: 32,
            background: "var(--fbm-paper-warm)",
            border: "1px solid var(--fbm-rule)",
          }}>
            <FBMLogo width={280} showName={true} paperColor="var(--fbm-paper-warm)" />
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>O documento</div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(20px, 2vw, 28px)",
              lineHeight: 1.4,
              color: "var(--fbm-ink)",
              margin: "0 0 24px 0",
              maxWidth: "44ch",
              fontStyle: "italic",
              fontWeight: 300,
            }}>
              Este manual reúne os fundamentos visuais e verbais que sustentam a
              presença pública do advogado Felipe de Bortoli Munhoz — uma identidade
              de tradição clássica aplicada com rigor contemporâneo.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
              marginTop: 40,
              paddingTop: 24,
              borderTop: "1px solid var(--fbm-rule)",
            }}>
              <CoverMeta label="Origem" value="Vila Velha — ES" />
              <CoverMeta label="Categoria" value="Advocacia individual" />
              <CoverMeta label="Inscrição" value="OAB/ES 27.026" />
              <CoverMeta label="Aplicação" value="Identidade institucional" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}>
        <div className="mono" style={{ color: "var(--fbm-ink-pale)" }}>
          Capítulo 00 · Capa
        </div>
        <a href="#manifesto" style={{
          textDecoration: "none",
          color: "var(--fbm-navy)",
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          fontFamily: "'Cinzel', serif",
          fontSize: 11,
          letterSpacing: "0.28em",
        }}>
          Começar a leitura
          <span style={{ fontSize: 18 }}>↓</span>
        </a>
      </div>
    </section>
  );
}

function CoverMeta({ label, value }) {
  return (
    <div>
      <div className="cinzel" style={{
        fontSize: 9,
        letterSpacing: "0.3em",
        color: "var(--fbm-gold-deep)",
        marginBottom: 6,
      }}>{label}</div>
      <div style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: 16,
        color: "var(--fbm-navy)",
      }}>{value}</div>
    </div>
  );
}

function Manifesto() {
  const values = [
    { num: "I",   word: "Rigor",        desc: "Cada peça produzida carrega o peso de uma decisão estudada. Não há improviso, não há atalho." },
    { num: "II",  word: "Discrição",    desc: "A marca não disputa atenção; ela ocupa o espaço com a serenidade de quem sabe o que diz." },
    { num: "III", word: "Permanência",  desc: "Recusamos modismos. Trabalhamos com formas que sobrevivem ao seu tempo." },
    { num: "IV",  word: "Confiança",    desc: "Toda comunicação deve sustentar a relação fiduciária entre advogado e cliente." },
  ];

  return (
    <section id="manifesto" className="chapter">
      <div className="section-mark">Cap. 01 · Manifesto</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">01</div>
          <div className="chapter-title">
            <div className="eyebrow">Manifesto da marca</div>
            <h1>Um escritório é, antes de tudo, uma forma de presença.</h1>
            <p className="lead">
              Antes de qualquer logo, paleta ou tipografia, esta identidade
              parte de uma convicção: a forma como um advogado se apresenta
              é parte da sua tese. Postura, linguagem e estética são,
              juntas, a primeira peça que o cliente lê.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          marginTop: 24,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Posicionamento</div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              lineHeight: 1.4,
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--fbm-navy)",
              margin: "0 0 24px 0",
            }}>
              "Uma advocacia construída sobre tradição, exercida com a
              clareza e a precisão que o tempo presente exige."
            </p>
            <hr className="divider-gold" />
            <p style={{ color: "var(--fbm-ink-soft)" }}>
              O escritório opera no ponto em que a tradição jurídica brasileira
              encontra as expectativas contemporâneas de clareza, agilidade e
              acessibilidade. A identidade visual existe para tornar essa
              posição imediatamente legível — antes da primeira frase falada.
            </p>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Promessa</div>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontFamily: "'EB Garamond', serif",
              fontSize: 17,
              lineHeight: 1.6,
            }}>
              {[
                "Postura institucional, ainda em escritório individual.",
                "Linguagem direta, sem floreios desnecessários.",
                "Estética sóbria que sobrevive ao escrutínio do tempo.",
                "Coerência rigorosa entre todos os pontos de contato.",
              ].map((t, i) => (
                <li key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "32px 1fr",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--fbm-rule)",
                  alignItems: "baseline",
                }}>
                  <span className="cinzel" style={{
                    fontSize: 10,
                    color: "var(--fbm-gold-deep)",
                    letterSpacing: "0.2em",
                  }}>0{i+1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 120 }}>
          <div className="eyebrow" style={{ marginBottom: 40 }}>Valores fundadores</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--fbm-rule)",
            border: "1px solid var(--fbm-rule)",
          }}>
            {values.map(v => (
              <div key={v.num} style={{
                background: "var(--fbm-paper)",
                padding: "40px 36px",
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: 24,
                alignItems: "baseline",
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 36,
                  fontStyle: "italic",
                  color: "var(--fbm-gold)",
                  fontWeight: 300,
                }}>{v.num}</div>
                <div>
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 14,
                    letterSpacing: "0.3em",
                    color: "var(--fbm-navy)",
                    marginBottom: 12,
                  }}>{v.word.toUpperCase()}</div>
                  <p style={{
                    margin: 0,
                    color: "var(--fbm-ink-soft)",
                    fontSize: 15.5,
                    lineHeight: 1.55,
                  }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Cover = Cover;
window.Manifesto = Manifesto;
