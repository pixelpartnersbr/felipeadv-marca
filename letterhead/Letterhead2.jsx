// Variation 2 — Logo Esquerda + Contato Direita
// Cabeçalho assimétrico com a logo à esquerda e dados de contato em coluna à direita.
// Barra lateral dourada vertical fina, marca d'água do pilar deslocada para a margem.

function Letterhead2({ exampleText = true }) {
  return (
    <div className="a4 v2">
      {/* Marca d'água — deslocada para a margem direita */}
      <div className="watermark" style={{
        bottom: "80px",
        right: "-60px",
      }}>
        <FBMWatermark size={280} opacity={0.04} color={FBM_GOLD} />
      </div>

      {/* Barra lateral dourada fina */}
      <div style={{
        position: "absolute",
        left: 32, top: 56, bottom: 56, width: 2,
        background: "var(--fbm-gold)",
        zIndex: 1,
      }} />
      {/* Acento navy no topo da barra */}
      <div style={{
        position: "absolute",
        left: 30, top: 56, width: 6, height: 60,
        background: "var(--fbm-navy)",
        zIndex: 2,
      }} />

      {/* Cabeçalho */}
      <header style={{
        position: "relative",
        zIndex: 2,
        padding: "52px 64px 0 70px",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "end",
        gap: 32,
      }}>
        <div>
          <FBMLogo width={210} showName={false} paperColor="var(--fbm-paper)" />
        </div>

        <div style={{ textAlign: "right", paddingBottom: 8 }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 16,
            letterSpacing: "0.18em",
            color: "var(--fbm-navy)",
            fontWeight: 600,
            marginBottom: 4,
          }}>
            FELIPE DE BORTOLI MUNHOZ
          </div>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 9.5,
            letterSpacing: "0.32em",
            color: "var(--fbm-gold-deep)",
            marginBottom: 14,
          }}>
            ADVOGADO  ·  OAB/ES 27.026
          </div>
          <hr className="gold-rule" style={{ marginBottom: 10, opacity: 0.6 }} />
          <div className="tiny-mono" style={{ lineHeight: 1.7 }}>
            Vila Velha · Espírito Santo<br />
            +55 27 99500-9273
          </div>
        </div>
      </header>

      {/* Régua dupla decorativa */}
      <div style={{ padding: "20px 64px 0 70px", position: "relative", zIndex: 2 }}>
        <div style={{
          height: 6, position: "relative",
          borderTop: "1px solid var(--fbm-gold)",
          borderBottom: "1px solid var(--fbm-gold)",
        }}>
          <div style={{
            position: "absolute", left: "50%", top: -4, transform: "translateX(-50%)",
            width: 8, height: 8, background: "var(--fbm-paper)",
            borderLeft: "1px solid var(--fbm-gold)",
            borderRight: "1px solid var(--fbm-gold)",
          }} />
          <div style={{
            position: "absolute", left: "50%", top: -2, transform: "translateX(-50%)",
            width: 4, height: 4, background: "var(--fbm-gold)",
          }} />
        </div>
      </div>

      {/* Corpo */}
      <main className="body" style={{ padding: "52px 80px 0 90px" }}>
        {exampleText && <PetitionExample />}
      </main>

      {/* Rodapé */}
      <footer style={{
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        padding: "0 64px 32px 70px",
        zIndex: 3,
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}>
          <div>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 9,
              letterSpacing: "0.32em",
              color: "var(--fbm-gold-deep)",
              marginBottom: 4,
            }}>
              ESCRITÓRIO
            </div>
            <div style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 11,
              color: "var(--fbm-ink)",
              lineHeight: 1.45,
            }}>
              Vila Velha — Espírito Santo
            </div>
          </div>

          <div className="page-num">
            <span style={{ color: "var(--fbm-ink-soft)" }}>página</span>
            <span className="num">01</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.Letterhead2 = Letterhead2;
