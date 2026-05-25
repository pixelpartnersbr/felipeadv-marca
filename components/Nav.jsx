// Side navigation — sticky chapter list with active-section tracking.

const CHAPTERS = [
  { id: "manifesto",  num: "01", title: "Manifesto" },
  { id: "marca",      num: "02", title: "Marca" },
  { id: "cores",      num: "03", title: "Cores" },
  { id: "tipografia", num: "04", title: "Tipografia" },
  { id: "elementos",  num: "05", title: "Elementos" },
  { id: "voz",        num: "06", title: "Voz e tom" },
  { id: "aplicacoes", num: "07", title: "Aplicações" },
  { id: "cuidados",   num: "08", title: "Cuidados" },
  { id: "specs",      num: "09", title: "Especificações" },
];

function SideNav() {
  const [active, setActive] = React.useState("cover");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const ids = ["cover", ...CHAPTERS.map(c => c.id)];
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Close mobile drawer on link click
  function handleNavClick() {
    setOpen(false);
  }

  // Lock body scroll while drawer is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Mobile top bar — only visible on small screens */}
      <header className="mobile-bar">
        <a href="#cover" onClick={handleNavClick} className="mobile-bar-brand">
          <FBMPillar width={18} height={32} color="var(--fbm-gold)" />
          <div>
            <div className="mobile-bar-name">FBM</div>
            <div className="mobile-bar-sub">Manual da Marca</div>
          </div>
        </a>
        <button
          className="mobile-bar-toggle"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className={`burger ${open ? "open" : ""}`}>
            <span></span><span></span><span></span>
          </span>
        </button>
      </header>

      {/* Drawer backdrop */}
      <div
        className={`nav-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`side-nav ${open ? "open" : ""}`}>
        <a href="#cover" className="brand-mark" onClick={handleNavClick} style={{ textDecoration: "none" }}>
          <FBMPillar width={28} height={50} color="var(--fbm-gold)" />
          <div>
            <div className="name">Felipe de Bortoli<br/>Munhoz</div>
            <div className="role">Manual da Marca</div>
          </div>
        </a>

        <div>
          <div className="nav-label">Capítulos</div>
          <ol style={{ marginTop: 16 }}>
            {CHAPTERS.map(c => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className={active === c.id ? "active" : ""}
                  onClick={handleNavClick}
                >
                  <span className="num">{c.num}</span>
                  <span>{c.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="footer-meta">
          v 1.0 · 2026<br />
          Edição interna<br />
          Vila Velha — ES
        </div>
      </nav>
    </>
  );
}

window.SideNav = SideNav;
window.CHAPTERS = CHAPTERS;
