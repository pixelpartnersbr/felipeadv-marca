// Variation 1 — Classical Centered
// Logo centered at the top, address row below a gold rule, marca d'água sutil ao fundo.

function Letterhead1({ exampleText = true }) {
  return (
    <div className="a4 v1">
      {/* Marca d'água do pilar — bem sutil, dourada para não competir com o texto */}
      <div className="watermark" style={{
        bottom: "60px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
        <FBMWatermark size={320} opacity={0.05} color={FBM_GOLD} />
      </div>

      {/* Barra lateral fininha à esquerda */}
      <div style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0, width: 10,
        background: "linear-gradient(180deg, var(--fbm-navy) 0%, var(--fbm-navy) 88%, var(--fbm-gold) 88%, var(--fbm-gold) 100%)",
        zIndex: 1,
      }} />

      {/* Cabeçalho */}
      <header style={{
        position: "relative",
        zIndex: 2,
        padding: "56px 72px 0 72px",
        textAlign: "center",
      }}>
        <FBMLogo width={300} showName={true} showOab={true} paperColor="var(--fbm-paper)" />
        <hr className="gold-rule" style={{ width: 220, margin: "10px auto 0" }} />
      </header>

      {/* Corpo */}
      <main className="body" style={{ padding: "64px 96px 0 96px" }}>
        {exampleText && <PetitionExample />}
      </main>

      {/* Rodapé */}
      <footer style={{
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        padding: "0 72px 28px 82px",
        zIndex: 3,
      }}>
        <hr className="gold-rule" style={{ marginBottom: 10 }} />
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div className="contact-line">
            Vila Velha <span className="dot">·</span> Espírito Santo
            <span className="dot">·</span> 27 99500-9273
          </div>
          <div className="page-num">
            <span className="num">01</span>
            <span className="sep">/</span>
            <span style={{ color: "var(--fbm-ink-soft)" }}>01</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.Letterhead1 = Letterhead1;
