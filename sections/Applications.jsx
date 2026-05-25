// Chapter 07 — Aplicações

function Applications() {
  return (
    <section id="aplicacoes" className="chapter">
      <div className="section-mark">Cap. 07 · Aplicações</div>
      <div className="container">
        <div className="chapter-head">
          <div className="chapter-num">07</div>
          <div className="chapter-title">
            <div className="eyebrow">Aplicações</div>
            <h1>Sete superfícies onde a marca tem que viver bem.</h1>
            <p className="lead">
              As aplicações abaixo cobrem os pontos de contato mais
              frequentes do escritório. Cada peça respeita rigorosamente
              o sistema gráfico — sem improviso, sem decoração extra.
            </p>
          </div>
        </div>

        {/* Papel timbrado */}
        <SubsectionTitle num="7.1" title="Papel timbrado" />
        <p style={{ maxWidth: "60ch", color: "var(--fbm-ink-soft)", marginBottom: 32 }}>
          Três variações aprovadas, cobrindo desde o uso mais clássico até
          o mais editorial. Disponíveis em DOCX, PDF e PNG no capítulo 09.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}>
          <LetterheadThumb num="01" name="Clássico centralizado" />
          <LetterheadThumb num="02" name="Cabeçalho dividido" />
          <LetterheadThumb num="03" name="Barra lateral editorial" />
        </div>

        {/* Business card */}
        <SubsectionTitle num="7.2" title="Cartão de visita" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 80,
        }}>
          <BusinessCard side="front" />
          <BusinessCard side="back" />
        </div>

        {/* Email signature */}
        <SubsectionTitle num="7.3" title="Assinatura de e-mail" />
        <EmailSignature />

        {/* Social avatar */}
        <SubsectionTitle num="7.4" title="Avatar institucional" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}>
          <SocialAvatar bg="var(--fbm-navy)" mark="gold" platform="Instagram · LinkedIn" />
          <SocialAvatar bg="var(--fbm-paper)" mark="navy" platform="Fundo claro" />
          <SocialAvatar bg="var(--fbm-gold)" mark="navy" platform="Acento dourado" />
          <SocialAvatar bg="var(--fbm-navy-deep)" mark="gold" wordmark platform="Quadrado wordmark" />
        </div>

        {/* Post template */}
        <SubsectionTitle num="7.5" title="Post institucional · 1080×1080" />
        <SocialPosts />

        {/* WhatsApp business */}
        <SubsectionTitle num="7.6" title="WhatsApp Business" />
        <WhatsAppCard />

        {/* Procuration / Selo */}
        <SubsectionTitle num="7.7" title="Selo de autoria" />
        <p style={{ maxWidth: "60ch", color: "var(--fbm-ink-soft)", marginBottom: 32 }}>
          Usado em pareceres, minutas e qualquer peça produzida pelo escritório.
          Funciona como assinatura visual de autoria.
        </p>
        <AuthorshipSeal />
      </div>
    </section>
  );
}

function LetterheadThumb({ num, name }) {
  // Mini A4 representation
  return (
    <div style={{ background: "var(--fbm-paper-warm)", border: "1px solid var(--fbm-rule)" }}>
      <div style={{
        aspectRatio: "210 / 297",
        background: "var(--fbm-paper)",
        margin: 24,
        boxShadow: "0 8px 24px -12px rgba(21,45,82,0.25)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 12px 12px",
      }}>
        {num === "01" && (
          <>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "var(--fbm-navy)" }}/>
            <FBMLogo width={100} showName={true} paperColor="var(--fbm-paper)" />
            <div style={{ width: 60, height: 1, background: "var(--fbm-gold)", marginTop: 4 }}/>
            <FillerText />
          </>
        )}
        {num === "02" && (
          <div style={{ width: "100%" }}>
            <div style={{ position: "absolute", left: 12, top: 16, bottom: 16, width: 1, background: "var(--fbm-gold)" }}/>
            <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: 18 }}>
              <FBMLogo width={70} showName={false} paperColor="var(--fbm-paper)" />
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 7, fontFamily: "'Cinzel', serif", color: "var(--fbm-navy)", letterSpacing: "0.1em" }}>F. B. MUNHOZ</div>
                <div style={{ fontSize: 5, fontFamily: "'Cinzel', serif", color: "var(--fbm-gold-deep)", letterSpacing: "0.2em", marginTop: 2 }}>OAB/ES 27.026</div>
              </div>
            </div>
            <div style={{ paddingLeft: 18 }}><FillerText /></div>
          </div>
        )}
        {num === "03" && (
          <div style={{ width: "100%", display: "flex", height: "100%" }}>
            <div style={{ width: 32, background: "var(--fbm-navy)", display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 0" }}>
              <FBMPillar width={14} height={26} color="var(--fbm-gold)" />
            </div>
            <div style={{ flex: 1, padding: "8px 12px" }}>
              <div style={{ fontSize: 9, fontFamily: "'Cormorant Garamond', serif", color: "var(--fbm-navy)" }}>Felipe de Bortoli</div>
              <div style={{ fontSize: 9, fontFamily: "'Cormorant Garamond', serif", color: "var(--fbm-gold-deep)", fontStyle: "italic" }}>Munhoz</div>
              <div style={{ height: 1, background: "var(--fbm-gold)", marginTop: 6 }}/>
              <FillerText />
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: "14px 20px 20px", borderTop: "1px solid var(--fbm-rule)" }}>
        <div className="cinzel" style={{ fontSize: 10, color: "var(--fbm-navy)", marginBottom: 4 }}>
          {num} · {name}
        </div>
        <div style={{ fontSize: 12, color: "var(--fbm-ink-pale)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>
          A4 · 210×297mm
        </div>
      </div>
    </div>
  );
}

function FillerText() {
  return (
    <div style={{ marginTop: 12, width: "100%" }}>
      {[1, 0.9, 1, 0.85, 1, 1, 0.7].map((w, i) => (
        <div key={i} style={{
          height: 1.5,
          background: "var(--fbm-ink-pale)",
          opacity: 0.3,
          width: `${w * 100}%`,
          marginBottom: 4,
        }}/>
      ))}
    </div>
  );
}

function BusinessCard({ side }) {
  return (
    <div style={{ background: "var(--fbm-paper-warm)", border: "1px solid var(--fbm-rule)" }}>
      <div style={{ padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
        <div style={{
          width: 360,
          aspectRatio: "1.586",
          background: side === "front" ? "var(--fbm-paper)" : "var(--fbm-navy)",
          color: side === "front" ? "var(--fbm-ink)" : "var(--fbm-paper)",
          boxShadow: "0 12px 32px -12px rgba(21,45,82,0.3), 0 4px 8px -4px rgba(21,45,82,0.15)",
          position: "relative",
          padding: "26px 28px",
          display: "flex",
          flexDirection: side === "front" ? "column" : "column",
          justifyContent: side === "front" ? "space-between" : "center",
          alignItems: side === "back" ? "center" : "flex-start",
          overflow: "hidden",
        }}>
          {side === "front" ? (
            <>
              <div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 8,
                  letterSpacing: "0.32em",
                  color: "var(--fbm-gold-deep)",
                  marginBottom: 6,
                }}>ADVOCACIA · OAB/ES 27.026</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  lineHeight: 1.1,
                  color: "var(--fbm-navy)",
                }}>
                  Felipe de Bortoli<br/>
                  <em style={{ color: "var(--fbm-gold-deep)" }}>Munhoz</em>
                </div>
              </div>
              <div style={{ width: 40, height: 1, background: "var(--fbm-gold)" }}/>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                color: "var(--fbm-ink-soft)",
                lineHeight: 1.7,
              }}>
                +55 27 99500-9273<br/>
                Vila Velha · Espírito Santo
              </div>
            </>
          ) : (
            <>
              <FBMPillar width={50} height={94} color="var(--fbm-gold)" />
              <div style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 9,
                letterSpacing: "0.32em",
                color: "var(--fbm-gold-soft)",
                marginTop: 16,
                textAlign: "center",
              }}>
                FELIPE DE BORTOLI MUNHOZ
              </div>
            </>
          )}
        </div>
      </div>
      <div style={{ padding: "14px 20px", borderTop: "1px solid var(--fbm-rule)" }}>
        <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-navy)" }}>
          {side === "front" ? "FRENTE" : "VERSO"} · 85 × 54 mm
        </div>
      </div>
    </div>
  );
}

function EmailSignature() {
  return (
    <div style={{
      background: "var(--fbm-paper-warm)",
      border: "1px solid var(--fbm-rule)",
      padding: 48,
      marginBottom: 80,
    }}>
      <div style={{
        background: "white",
        border: "1px solid #e0e0e0",
        padding: "32px 40px",
        maxWidth: 580,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}>
        <div style={{ fontSize: 13, color: "#666", marginBottom: 24, fontStyle: "italic" }}>
          — atenciosamente,
        </div>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <tr>
              <td style={{
                paddingRight: 24,
                borderRight: "2px solid #BC9D6E",
                verticalAlign: "top",
              }}>
                <FBMPillar width={42} height={78} color="#152D52" />
              </td>
              <td style={{ paddingLeft: 24, verticalAlign: "top" }}>
                <div style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 18,
                  color: "#152D52",
                  marginBottom: 2,
                  fontWeight: "bold",
                }}>Felipe de Bortoli Munhoz</div>
                <div style={{
                  fontSize: 10,
                  color: "#9B7F50",
                  letterSpacing: "0.18em",
                  marginBottom: 12,
                }}>ADVOGADO · OAB/ES 27.026</div>
                <div style={{ fontSize: 12, color: "#4A5168", lineHeight: 1.6 }}>
                  +55 27 99500-9273<br/>
                  contato@fbmadvocacia.com.br<br/>
                  Vila Velha — Espírito Santo
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 16 }} className="mono" style={{ color: "var(--fbm-ink-pale)", fontSize: 11, marginTop: 14 }}>
        HTML inline · funciona em Gmail, Outlook, Apple Mail
      </div>
    </div>
  );
}

function SocialAvatar({ bg, mark, platform, wordmark }) {
  return (
    <div style={{ background: "var(--fbm-paper-warm)", border: "1px solid var(--fbm-rule)" }}>
      <div style={{ padding: 32, display: "flex", justifyContent: "center" }}>
        <div style={{
          width: 180, height: 180,
          borderRadius: "50%",
          background: bg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(21,45,82,0.2)",
        }}>
          {wordmark ? (
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 56,
              color: mark === "gold" ? "var(--fbm-gold)" : "var(--fbm-navy)",
              letterSpacing: "0.04em",
              fontWeight: 500,
            }}>FBM</div>
          ) : (
            <FBMPillar
              width={56}
              height={106}
              color={mark === "gold" ? "var(--fbm-gold)" : "var(--fbm-navy)"}
            />
          )}
        </div>
      </div>
      <div style={{ padding: "12px 16px", borderTop: "1px solid var(--fbm-rule)" }}>
        <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-navy)", letterSpacing: "0.2em" }}>{platform}</div>
      </div>
    </div>
  );
}

function SocialPosts() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    }}>
      <PostTpl variant="quote" />
      <PostTpl variant="title" />
      <PostTpl variant="data" />
    </div>
  );
}

function PostTpl({ variant }) {
  const common = {
    aspectRatio: "1 / 1",
    background: "var(--fbm-paper)",
    padding: 28,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  };
  return (
    <div style={{ background: "var(--fbm-paper-warm)", border: "1px solid var(--fbm-rule)" }}>
      {variant === "quote" && (
        <div style={{ ...common, background: "var(--fbm-navy)", color: "var(--fbm-paper)", justifyContent: "space-between" }}>
          <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold)", letterSpacing: "0.3em" }}>
            FBM · CITAÇÃO
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            lineHeight: 1.25,
            fontStyle: "italic",
            color: "var(--fbm-paper)",
            fontWeight: 300,
          }}>
            "O contrato não é o que está escrito;<br/>é o que os dois entendem."
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width: 32, height: 1, background: "var(--fbm-gold)" }}/>
            <FBMPillar width={20} height={36} color="var(--fbm-gold)" />
          </div>
        </div>
      )}
      {variant === "title" && (
        <div style={{ ...common, justifyContent: "space-between" }}>
          <div>
            <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.3em" }}>
              #03 · CONTRATOS
            </div>
            <div style={{ width: 24, height: 1, background: "var(--fbm-gold)", marginTop: 14 }}/>
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 36,
            lineHeight: 1.05,
            color: "var(--fbm-navy)",
          }}>
            Três cláusulas que <em style={{ color: "var(--fbm-gold-deep)" }}>todo</em> contrato deveria prever
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <FBMPillar width={20} height={36} color="var(--fbm-gold-deep)" />
            <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-ink-pale)", letterSpacing: "0.28em" }}>
              FBM ADVOCACIA
            </div>
          </div>
        </div>
      )}
      {variant === "data" && (
        <div style={{ ...common, background: "var(--fbm-paper-warm)", justifyContent: "space-between" }}>
          <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.3em" }}>
            DADOS · 2026
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 96,
              lineHeight: 1,
              color: "var(--fbm-navy)",
              fontWeight: 300,
              fontStyle: "italic",
            }}>87<span style={{ color: "var(--fbm-gold)" }}>%</span></div>
            <div style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 14,
              color: "var(--fbm-ink-soft)",
              fontStyle: "italic",
              marginTop: 8,
            }}>dos acordos extrajudiciais<br/>resolvidos em até 90 dias</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: 32, height: 1, background: "var(--fbm-gold)" }}/>
            <div className="cinzel" style={{ fontSize: 9, color: "var(--fbm-ink-pale)", letterSpacing: "0.28em" }}>FBM</div>
          </div>
        </div>
      )}
    </div>
  );
}

function WhatsAppCard() {
  return (
    <div style={{
      background: "var(--fbm-paper-warm)",
      border: "1px solid var(--fbm-rule)",
      padding: 48,
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 48,
      alignItems: "center",
      marginBottom: 80,
    }}>
      {/* Phone frame */}
      <div style={{
        width: 280,
        height: 540,
        background: "#1c1c1c",
        borderRadius: 32,
        padding: 8,
        boxShadow: "0 24px 60px -20px rgba(0,0,0,0.4)",
      }}>
        <div style={{
          background: "#0b141a",
          height: "100%",
          borderRadius: 24,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* WA header */}
          <div style={{
            background: "#202c33",
            padding: "12px 14px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", background: "#152D52",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <FBMPillar width={16} height={30} color="#BC9D6E" />
            </div>
            <div>
              <div style={{ color: "#e9edef", fontSize: 13, fontFamily: "Arial, sans-serif", fontWeight: 600 }}>FBM Advocacia</div>
              <div style={{ color: "#8696a0", fontSize: 10, fontFamily: "Arial, sans-serif" }}>Conta comercial · Online</div>
            </div>
          </div>
          {/* Chat */}
          <div style={{
            flex: 1,
            padding: "16px 12px",
            background: "#0b141a",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}>
            <ChatBubble side="them" text="Bom dia. Recebi sua documentação." />
            <ChatBubble side="them" text="Em até 48h envio o parecer com a recomendação." />
            <ChatBubble side="me" text="Combinado, obrigado!" />
          </div>
        </div>
      </div>

      {/* Specs */}
      <div>
        <div className="cinzel" style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--fbm-gold-deep)", marginBottom: 16 }}>
          PERFIL COMERCIAL
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 400,
          margin: "0 0 24px 0",
          color: "var(--fbm-navy)",
        }}>Padrão da conta WhatsApp Business</h3>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "12px 32px", fontSize: 14.5 }}>
          <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>NOME</span>
          <span>FBM Advocacia</span>
          <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>FOTO</span>
          <span>Pilar dourado sobre fundo navy</span>
          <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>CATEGORIA</span>
          <span>Serviços jurídicos</span>
          <span className="cinzel" style={{ fontSize: 9, color: "var(--fbm-gold-deep)", letterSpacing: "0.28em" }}>STATUS</span>
          <span style={{ fontStyle: "italic", color: "var(--fbm-ink-soft)" }}>
            "Atendimento de segunda a sexta · 9h–18h"
          </span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ side, text }) {
  const bg = side === "me" ? "#005c4b" : "#202c33";
  const color = "#e9edef";
  return (
    <div style={{
      alignSelf: side === "me" ? "flex-end" : "flex-start",
      background: bg,
      color,
      padding: "8px 11px",
      borderRadius: 8,
      fontSize: 12,
      fontFamily: "Arial, sans-serif",
      maxWidth: "80%",
      borderBottomLeftRadius: side === "them" ? 0 : 8,
      borderBottomRightRadius: side === "me" ? 0 : 8,
    }}>{text}</div>
  );
}

function AuthorshipSeal() {
  return (
    <div style={{
      background: "var(--fbm-paper-warm)",
      border: "1px solid var(--fbm-rule)",
      padding: 60,
      display: "flex",
      justifyContent: "center",
      gap: 60,
      flexWrap: "wrap",
    }}>
      {/* Circular seal */}
      <div style={{
        width: 200, height: 200,
        borderRadius: "50%",
        border: "1.5px solid var(--fbm-gold)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "var(--fbm-paper)",
      }}>
        <div style={{
          position: "absolute",
          inset: 10,
          borderRadius: "50%",
          border: "1px solid var(--fbm-gold-soft)",
        }}/>
        <div style={{ textAlign: "center", zIndex: 1 }}>
          <FBMPillar width={36} height={68} color="var(--fbm-gold)" />
          <div className="cinzel" style={{
            fontSize: 8,
            letterSpacing: "0.32em",
            color: "var(--fbm-navy)",
            marginTop: 8,
          }}>FBM · 2026</div>
        </div>
        {/* Curved text would go here in production */}
      </div>

      {/* Horizontal seal */}
      <div style={{
        padding: "18px 28px",
        border: "1px solid var(--fbm-gold)",
        display: "flex",
        alignItems: "center",
        gap: 18,
        background: "var(--fbm-paper)",
      }}>
        <FBMPillar width={20} height={38} color="var(--fbm-gold-deep)" />
        <div>
          <div className="cinzel" style={{ fontSize: 9, letterSpacing: "0.28em", color: "var(--fbm-gold-deep)" }}>
            REDIGIDO POR
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            color: "var(--fbm-navy)",
          }}>Felipe de Bortoli Munhoz</div>
          <div className="mono" style={{ fontSize: 9, color: "var(--fbm-ink-pale)", letterSpacing: "0.1em" }}>
            OAB/ES 27.026
          </div>
        </div>
      </div>
    </div>
  );
}

window.Applications = Applications;
