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

  return (
    <nav className="side-nav">
      <a href="#cover" className="brand-mark" style={{ textDecoration: "none" }}>
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
              <a href={`#${c.id}`} className={active === c.id ? "active" : ""}>
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
  );
}

window.SideNav = SideNav;
window.CHAPTERS = CHAPTERS;
