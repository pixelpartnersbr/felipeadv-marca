// Chapter 08 — Cuidados (Misuse / Don'ts)

function Misuse() {
  return (
    <section id="cuidados" className="chapter warm">
      <div className="section-mark">Cap. 08 · Cuidados</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">08</div>
          <div className="chapter-title">
            <div className="eyebrow">O que evitar</div>
            <h1>A integridade da marca depende tanto do que ela é quanto do que ela recusa ser.</h1>
            <p className="lead">
              Os exemplos abaixo são casos reais que comprometem a
              percepção institucional. Nenhum deles é permitido em
              nenhum contexto — mesmo em peças temporárias.
            </p>
          </div>
        </div>

        <SubsectionTitle num="8.1" title="Sobre a marca" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 80,
        }}>
          <Misuse1 />
          <Misuse2 />
          <Misuse3 />
          <Misuse4 />
          <Misuse5 />
          <Misuse6 />
        </div>

        <SubsectionTitle num="8.2" title="Sobre composições" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 80,
        }}>
          <CompMisuse
            label="Não use gradiente"
            desc="Cores chapadas. Sempre."
            preview={
              <div style={{
                width: 200, height: 100,
                background: "linear-gradient(135deg, #152D52 0%, #BC9D6E 100%)",
              }}/>
            }
          />
          <CompMisuse
            label="Não use sombra dramática"
            desc="Profundidade é dada pela hierarquia tipográfica, não por efeitos."
            preview={
              <div style={{
                width: 100, height: 100, background: "var(--fbm-navy)",
                boxShadow: "8px 8px 0 rgba(188,157,110,0.6), 16px 16px 24px rgba(0,0,0,0.4)",
              }}/>
            }
          />
          <CompMisuse
            label="Não imite estilos alheios"
            desc="Tropicalismo, neon, brutalismo. Nada disso pertence a esta marca."
            preview={
              <div style={{
                width: 180, height: 100,
                background: "#ff006e",
                border: "4px dashed #ffbe0b",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "Impact, sans-serif",
                color: "#06d6a0",
                fontSize: 22,
              }}>FBM!!</div>
            }
          />
        </div>

        <SubsectionTitle num="8.3" title="Sobre cor" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}>
          <CompMisuse
            label="Não invente cores"
            desc="A paleta é fechada. Verde, vermelho, roxo institucional não existem."
            preview={
              <div style={{ display: "flex", gap: 6 }}>
                {["#00d4ff", "#9b00ff", "#ff5500", "#3dff7a"].map(c => (
                  <div key={c} style={{ width: 50, height: 50, background: c }}/>
                ))}
              </div>
            }
          />
          <CompMisuse
            label="Não use ouro vibrante"
            desc="O dourado da marca é sóbrio. Saturado vira ostensivo."
            preview={
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 80, height: 80, background: "#BC9D6E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel', serif", color: "white", fontSize: 11 }}>OK</div>
                <div style={{ width: 80, height: 80, background: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel', serif", color: "#152D52", fontSize: 11 }}>NÃO</div>
              </div>
            }
          />
          <CompMisuse
            label="Não use navy quase-preto"
            desc="O navy tem matiz. Não substitua por #000 ou cinza."
            preview={
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 80, height: 80, background: "#152D52", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel', serif", color: "white", fontSize: 11 }}>OK</div>
                <div style={{ width: 80, height: 80, background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel', serif", color: "white", fontSize: 11 }}>NÃO</div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

function MisuseCard({ label, desc, children }) {
  return (
    <div className="do-dont dont">
      <div className="badge">×</div>
      <div className="preview">{children}</div>
      <div className="label">
        <span style={{
          width: 22, height: 22, borderRadius: "50%",
          background: "var(--fbm-error)", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11,
        }}>×</span>
        <div>
          <div style={{ color: "var(--fbm-error)" }}>{label}</div>
          <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", color: "var(--fbm-ink-soft)", letterSpacing: 0, fontSize: 12.5, marginTop: 2, textTransform: "none" }}>{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Misuse1() {
  return (
    <MisuseCard label="Não distorça" desc="A proporção é fixa.">
      <div style={{ transform: "scaleX(1.6) scaleY(0.85)" }}>
        <FBMLogo width={180} showName={true} paperColor="var(--fbm-paper)" />
      </div>
    </MisuseCard>
  );
}

function Misuse2() {
  return (
    <MisuseCard label="Não gire" desc="A marca vive na horizontal.">
      <div style={{ transform: "rotate(-12deg)" }}>
        <FBMLogo width={200} showName={true} paperColor="var(--fbm-paper)" />
      </div>
    </MisuseCard>
  );
}

function Misuse3() {
  return (
    <MisuseCard label="Não invada o respiro" desc="Mantenha a área 3X livre.">
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <FBMLogo width={140} showName={true} paperColor="var(--fbm-paper)" />
        <div style={{
          height: 80, width: 4, background: "var(--fbm-navy)",
          marginLeft: -10,
        }}/>
        <div style={{ marginLeft: 4, fontSize: 11, color: "var(--fbm-ink)" }}>texto invasor</div>
      </div>
    </MisuseCard>
  );
}

function Misuse4() {
  return (
    <MisuseCard label="Não troque as cores" desc="Só os tratamentos aprovados (4 ao todo).">
      <FBMLogo width={200} showName={true} paperColor="#ff5500" />
      <div style={{ position: "absolute", inset: 0, background: "#ff5500", opacity: 0.15, pointerEvents: "none" }}/>
    </MisuseCard>
  );
}

function Misuse5() {
  return (
    <MisuseCard label="Não recomponha" desc="O pilar nunca aparece sozinho ao lado do nome.">
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <FBMPillar width={40} height={80} color="var(--fbm-gold)" />
        <div style={{
          fontFamily: "'Arial', sans-serif",
          fontSize: 20,
          color: "var(--fbm-navy)",
        }}>Felipe Munhoz</div>
      </div>
    </MisuseCard>
  );
}

function Misuse6() {
  return (
    <MisuseCard label="Não troque a fonte" desc="Garamond/Cinzel/JetBrains apenas.">
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Comic Sans MS', cursive",
          fontSize: 36,
          color: "var(--fbm-navy)",
        }}>FBM</div>
        <div style={{
          fontFamily: "'Comic Sans MS', cursive",
          fontSize: 12,
          color: "var(--fbm-gold-deep)",
        }}>FELIPE DE BORTOLI MUNHOZ</div>
      </div>
    </MisuseCard>
  );
}

function CompMisuse({ label, desc, preview }) {
  return (
    <MisuseCard label={label} desc={desc}>
      {preview}
    </MisuseCard>
  );
}

window.Misuse = Misuse;
