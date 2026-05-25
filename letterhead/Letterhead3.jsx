// Variation 3 — Barra Lateral Dominante
// Coluna lateral esquerda em navy com a marca em vertical + área principal limpa.
// Estilo mais editorial / contemporâneo mas ainda formal.

function Letterhead3({ exampleText = true }) {
  const SIDEBAR_W = 96;

  return (
    <div className="a4 v3">
      {/* Marca d'água — pilar quase imperceptível no corpo */}
      <div className="watermark" style={{
        bottom: "60px",
        right: "60px",
      }}>
        <FBMWatermark size={260} opacity={0.04} color={FBM_GOLD} />
      </div>

      {/* Barra lateral navy */}
      <aside style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0, width: SIDEBAR_W,
        background: "var(--fbm-navy)",
        color: "var(--fbm-paper)",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "44px 0 36px",
      }}>
        {/* Mini pilar no topo */}
        <div style={{ marginBottom: 24 }}>
          <FBMPillar width={48} height={88} color="var(--fbm-gold)" />
        </div>

        {/* Linha vertical dourada */}
        <div style={{
          flex: 1,
          width: 1,
          background: "linear-gradient(180deg, transparent 0%, var(--fbm-gold) 12%, var(--fbm-gold) 88%, transparent 100%)",
          margin: "8px 0",
        }} />

        {/* Nome vertical (rotacionado) */}
        <div style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontFamily: "'Cinzel', serif",
          fontSize: 11.5,
          letterSpacing: "0.42em",
          color: "var(--fbm-gold-soft)",
          textAlign: "center",
          margin: "16px 0",
        }}>
          FELIPE DE BORTOLI MUNHOZ
        </div>

        {/* Linha vertical dourada inferior */}
        <div style={{
          flex: 1,
          width: 1,
          background: "linear-gradient(180deg, transparent 0%, var(--fbm-gold) 12%, var(--fbm-gold) 88%, transparent 100%)",
          margin: "8px 0",
        }} />

        {/* OAB no rodapé da barra */}
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 8.5,
          letterSpacing: "0.32em",
          color: "var(--fbm-gold)",
          textAlign: "center",
          lineHeight: 1.5,
        }}>
          OAB/ES<br />27.026
        </div>
      </aside>

      {/* Cabeçalho principal */}
      <header style={{
        position: "relative",
        zIndex: 3,
        marginLeft: SIDEBAR_W,
        padding: "56px 60px 0 56px",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
          <div>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 9.5,
              letterSpacing: "0.4em",
              color: "var(--fbm-gold-deep)",
              marginBottom: 12,
            }}>
              ADVOCACIA
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', 'EB Garamond', Garamond, serif",
              fontSize: 38,
              lineHeight: 1.05,
              color: "var(--fbm-navy)",
              letterSpacing: "0.01em",
              fontWeight: 500,
            }}>
              Felipe de Bortoli<br />
              <em style={{ color: "var(--fbm-gold-deep)", fontWeight: 400 }}>Munhoz</em>
            </div>
          </div>

          {/* Bloco de contato */}
          <div style={{ textAlign: "right", marginTop: 8 }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 8.5,
              letterSpacing: "0.32em",
              color: "var(--fbm-gold-deep)",
              marginBottom: 8,
            }}>
              CONTATO
            </div>
            <div className="tiny-mono" style={{ lineHeight: 1.8, fontSize: 10 }}>
              +55 27 99500-9273<br />
              Vila Velha — ES
            </div>
          </div>
        </div>

        <hr className="gold-rule" style={{ marginTop: 28 }} />
      </header>

      {/* Corpo */}
      <main className="body" style={{
        position: "relative",
        zIndex: 3,
        marginLeft: SIDEBAR_W,
        padding: "44px 60px 0 56px",
      }}>
        {exampleText && <PetitionExample />}
      </main>

      {/* Rodapé */}
      <footer style={{
        position: "absolute",
        left: SIDEBAR_W, right: 0, bottom: 0,
        padding: "0 60px 28px 56px",
        zIndex: 3,
      }}>
        <hr className="gold-rule dashed" style={{ marginBottom: 10 }} />
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 8.5,
            letterSpacing: "0.3em",
            color: "var(--fbm-ink-soft)",
          }}>
            FELIPE DE BORTOLI MUNHOZ
            <span style={{ color: "var(--fbm-gold)", margin: "0 10px" }}>·</span>
            ADVOGADO
          </div>
          <div className="page-num">
            <span className="num">01</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.Letterhead3 = Letterhead3;
