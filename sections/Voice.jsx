// Chapter 06 — Voz e tom

function Voice() {
  return (
    <section id="voz" className="chapter deep">
      <div className="section-mark">Cap. 06 · Voz e tom</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">06</div>
          <div className="chapter-title">
            <div className="eyebrow">Voz e tom</div>
            <h1 style={{ color: "var(--fbm-paper)" }}>
              Falamos como escrevemos: com precisão, sem perder a humanidade.
            </h1>
            <p className="lead">
              Toda escolha lexical é uma decisão estratégica. A linguagem
              da marca recusa tanto o juridiquês ornamental quanto o
              coloquialismo informal — opera no registro culto, claro,
              direto.
            </p>
          </div>
        </div>

        {/* Voice attributes */}
        <SubsectionDark num="6.1" title="Atributos da voz" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: "var(--fbm-navy-soft)",
          border: "1px solid var(--fbm-navy-soft)",
          marginBottom: 80,
        }}>
          {[
            { title: "Precisa",   sub: "Não, exata.",      desc: "Cada palavra carrega a responsabilidade do que afirma." },
            { title: "Sóbria",    sub: "Mas não fria.",    desc: "Reserva profissional sem barreira humana." },
            { title: "Clara",     sub: "Para quem lê.",    desc: "O cliente entende em primeira leitura, sem advogado tradutor." },
            { title: "Firme",     sub: "Sem ser dura.",    desc: "Postura institucional que conduz, não impõe." },
          ].map(a => (
            <div key={a.title} style={{
              background: "var(--fbm-navy-deep)",
              padding: 36,
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 400,
                color: "var(--fbm-gold)",
                marginBottom: 4,
              }}>{a.title}</div>
              <div style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: "italic",
                fontSize: 14,
                color: "var(--fbm-gold-soft)",
                marginBottom: 20,
              }}>{a.sub}</div>
              <p style={{
                margin: 0,
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "var(--fbm-paper)",
              }}>{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Tom espectro */}
        <SubsectionDark num="6.2" title="O espectro de tom" />
        <p style={{ color: "var(--fbm-gold-soft)", maxWidth: "60ch", marginBottom: 32 }}>
          O mesmo conteúdo se desloca conforme o canal — mantendo a voz,
          ajustando o tom.
        </p>
        <ToneSpectrum />

        {/* Diz / não diz */}
        <SubsectionDark num="6.3" title="Diz e não diz" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginTop: 24,
        }}>
          <DizNaoDiz
            tipo="diz"
            items={[
              "Recebemos a documentação. Em até 5 dias úteis enviamos a análise.",
              "A decisão foi parcialmente favorável. Vamos recorrer.",
              "Não recomendo essa estratégia. Aqui está o motivo.",
              "Honorários: R$ X. Forma de pagamento: à combinar.",
            ]}
          />
          <DizNaoDiz
            tipo="naodiz"
            items={[
              "Outrossim, faz-se mister salientar que, hodiernamente…",
              "Manda quem pode, obedece quem tem juízo.",
              "Vamos brigar até o fim! Não vão calar a gente!",
              "Confie, vai dar tudo certo no final.",
            ]}
          />
        </div>

        {/* Princípios de copy */}
        <SubsectionDark num="6.4" title="Princípios de escrita" />
        <div style={{
          marginTop: 24,
          background: "var(--fbm-navy-deep)",
          padding: "48px 40px",
          border: "1px solid var(--fbm-navy-soft)",
        }}>
          <ol style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px 60px",
          }}>
            {[
              ["Frase curta, ideia inteira.", "Períodos longos são para a peça — não para a conversa."],
              ["Verbo antes de adjetivo.",    "Conjugue. Não enfeite."],
              ["Cliente é segunda pessoa.",   "Tratamento formal (você), nunca terceira pessoa distante."],
              ["Latim, com cuidado.",         "Use quando é o termo técnico. Não como ornamento."],
              ["Números com contexto.",       "R$ X em 12 meses dentro do prazo de Y. Não apenas R$ X."],
              ["Pontuação para respirar.",    "O texto tem que poder ser lido em voz alta."],
            ].map(([t, sub], i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16 }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 36,
                  color: "var(--fbm-gold)",
                  lineHeight: 1,
                  fontWeight: 300,
                }}>{i + 1}</div>
                <div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    color: "var(--fbm-paper)",
                    marginBottom: 4,
                    lineHeight: 1.2,
                  }}>{t}</div>
                  <div style={{
                    fontSize: 13.5,
                    color: "var(--fbm-gold-soft)",
                    fontStyle: "italic",
                  }}>{sub}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ToneSpectrum() {
  const tons = [
    { canal: "Peça processual", tom: "Formal técnico",  example: "Insurge-se o Autor contra a r. decisão que indeferiu o pedido liminar." },
    { canal: "Ofício / e-mail formal", tom: "Institucional", example: "Encaminho, anexa, a minuta do contrato para análise de Vossa Senhoria." },
    { canal: "WhatsApp com cliente", tom: "Cordial direto", example: "Bom dia. Recebi os documentos. Em 48h te retorno com o parecer." },
    { canal: "Post / redes sociais", tom: "Editorial sóbrio", example: "Três coisas que todo contrato de prestação de serviço deveria prever." },
  ];
  return (
    <div style={{
      background: "var(--fbm-navy-deep)",
      border: "1px solid var(--fbm-navy-soft)",
    }}>
      {tons.map((t, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "200px 200px 1fr",
          gap: 32,
          padding: "28px 32px",
          borderTop: i === 0 ? 0 : "1px solid var(--fbm-navy-soft)",
          alignItems: "start",
        }}>
          <div>
            <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.3em", marginBottom: 4 }}>CANAL</div>
            <div style={{ fontSize: 14, color: "var(--fbm-paper)" }}>{t.canal}</div>
          </div>
          <div>
            <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.3em", marginBottom: 4 }}>TOM</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontStyle: "italic",
              color: "var(--fbm-gold)",
            }}>{t.tom}</div>
          </div>
          <div>
            <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.3em", marginBottom: 4 }}>EXEMPLO</div>
            <div style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 15.5,
              color: "var(--fbm-paper)",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}>"{t.example}"</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DizNaoDiz({ tipo, items }) {
  const isDiz = tipo === "diz";
  return (
    <div style={{
      background: "var(--fbm-navy-deep)",
      border: "1px solid",
      borderColor: isDiz ? "var(--fbm-gold)" : "var(--fbm-error)",
      padding: 32,
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
      }}>
        <div style={{
          width: 26, height: 26,
          borderRadius: "50%",
          background: isDiz ? "var(--fbm-gold)" : "var(--fbm-error)",
          color: isDiz ? "var(--fbm-navy)" : "var(--fbm-paper)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Cinzel', serif",
          fontSize: 13,
          fontWeight: 600,
        }}>{isDiz ? "✓" : "×"}</div>
        <div className="cinzel" style={{
          fontSize: 12,
          letterSpacing: "0.3em",
          color: isDiz ? "var(--fbm-gold)" : "var(--fbm-error)",
        }}>{isDiz ? "Diz assim" : "Não diz assim"}</div>
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((t, i) => (
          <li key={i} style={{
            padding: "14px 0",
            borderBottom: i === items.length - 1 ? 0 : "1px solid var(--fbm-navy-soft)",
            color: "var(--fbm-paper)",
            fontFamily: "'EB Garamond', serif",
            fontSize: 15.5,
            lineHeight: 1.5,
            fontStyle: "italic",
            opacity: isDiz ? 1 : 0.7,
            textDecoration: isDiz ? "none" : "line-through",
            textDecorationColor: "var(--fbm-error)",
          }}>"{t}"</li>
        ))}
      </ul>
    </div>
  );
}

window.Voice = Voice;
