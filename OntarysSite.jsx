import { useState } from "react";

/* ——— Conteúdo editável ——————————————————————————————— */

const HERO_LINES = ["Seus dados", "viram uma", "ontologia.", "Dela nascem", "sistemas", "governados."];

const HERO_SUB = "Engenharia autônoma que conecta as fontes da sua empresa, modela o negócio e entrega analytics completo e softwares desde o primeiro dia.";

const STEPS = [
  {
    title: "Conectar",
    text: "Conectores nativos leem ERPs, CRMs, bancos de dados, data warehouses, lakes e planilhas onde eles estão — sem migração e sem trocar a nuvem ou o stack que sua empresa já usa.",
  },
  {
    title: "Modelar a ontologia",
    text: "A Ontarys mapeia as entidades do negócio — clientes, contratos, ativos, processos — e as relações entre elas. Seu time revisa e aprova o modelo.",
  },
  {
    title: "Gerar com engenharia autônoma",
    text: "Agentes de engenharia constroem pipelines, APIs, aplicações e painéis sobre a ontologia, com testes e documentação gerados junto.",
  },
  {
    title: "Governar e analisar",
    text: "Tudo nasce governado: permissões, linhagem e auditoria em cada dado, e analytics consultando sempre a mesma fonte da verdade.",
  },
];

const OFFERS = [
  {
    id: "ontologia",
    title: "Ontologia do negócio",
    summary: "Um modelo vivo da sua empresa, em que cada dado tem significado, dono e relação com o resto da operação.",
    items: [
      "Entidades, atributos e relações descritos na linguagem do negócio",
      "Uma só definição para cada conceito, compartilhada entre áreas e sistemas",
      "Versionamento do modelo, com histórico de cada mudança",
      "Novas fontes entram mapeadas na ontologia, não em mais um silo",
    ],
  },
  {
    id: "engenharia",
    title: "Engenharia autônoma",
    summary: "Agentes que escrevem, testam e mantêm os sistemas de dados a partir da ontologia, com revisão humana antes de ir para produção.",
    items: [
      "Pipelines de ingestão e transformação gerados automaticamente",
      "APIs e aplicações internas construídas sobre as entidades do negócio",
      "Testes, documentação e linhagem produzidos junto com o código",
      "Ajuste automático quando uma fonte ou o modelo muda",
    ],
  },
  {
    id: "governanca",
    title: "Governança completa",
    summary: "Controle sobre quem vê, altera e usa cada dado, aplicado por padrão em tudo o que a plataforma gera.",
    items: [
      "Permissões por entidade, atributo e perfil de acesso",
      "Linhagem de ponta a ponta, da fonte ao painel",
      "Trilha de auditoria de acessos e alterações",
      "Monitoramento contínuo da qualidade dos dados",
      "Classificação de dados sensíveis para apoiar a conformidade com a LGPD",
    ],
  },
  {
    id: "analytics",
    title: "Analytics e IA",
    summary: "Indicadores, painéis e perguntas em linguagem natural respondidas sobre dados já confiáveis.",
    items: [
      "Métricas com definição única, calculadas sobre a ontologia",
      "Painéis gerados e mantidos pela engenharia autônoma",
      "Perguntas em linguagem natural respondidas com a fonte citada",
      "Base governada pronta para modelos de IA da empresa",
    ],
  },
];

const COMPAT = ["Cloud pública e privada", "Data warehouses e lakes", "ERPs e CRMs", "Bancos on-premise", "APIs e integrações existentes"];

const CONTACT_EMAIL = "contato@ontarys.com";

/* ——— Símbolo ————————————————————————————————————————— */

function Symbol({ size = 120, id = "s", animate = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true" className={animate ? "sym sym-anim" : "sym"}>
      <defs>
        <clipPath id={`${id}c`}>
          <polygon points="60,23.1 91.957,41.55 91.957,78.45 60,96.9 28.043,78.45 28.043,41.55" />
        </clipPath>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4F5F7" />
          <stop offset="1" stopColor="#B8BCC2" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9A9FA6" />
          <stop offset="1" stopColor="#55595F" />
        </linearGradient>
        <linearGradient id={`${id}h`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F4F5F7" />
          <stop offset="0.5" stopColor="#9A9FA6" />
          <stop offset="1" stopColor="#D9DCE0" />
        </linearGradient>
        <radialGradient id={`${id}s`} cx="0.36" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.25" stopColor="#E6E8EB" />
          <stop offset="0.7" stopColor="#A7ACB3" />
          <stop offset="1" stopColor="#6C7178" />
        </radialGradient>
      </defs>
      <g clipPath={`url(#${id}c)`} className="sym-facet">
        <polygon points="98.105,38 60,104 40.95,93" fill={`url(#${id}a)`} />
        <polygon points="98.105,38 40.95,93 21.895,82" fill={`url(#${id}b)`} />
        <line x1="98.105" y1="38" x2="40.95" y2="93" stroke="#050505" strokeWidth="1.3" />
      </g>
      <polyline
        points="98.105,54 98.105,82 60,104 21.895,82 21.895,38 60,16 84.249,30"
        fill="none"
        stroke={`url(#${id}h)`}
        strokeWidth="5"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        className="sym-hex"
        pathLength="1"
      />
      <circle cx="98.105" cy="38" r="8.5" fill={`url(#${id}s)`} className="sym-node" />
    </svg>
  );
}

function Logo({ size = 34 }) {
  return (
    <a href="#topo" className="logo" aria-label="Ontarys, início">
      <Symbol size={size} id="logo" />
      <span>ontarys</span>
    </a>
  );
}

/* ——— Ilustração da ontologia ——————————————————————— */

const G_NODES = [
  { id: "cliente", label: "Cliente", x: 90, y: 70 },
  { id: "contrato", label: "Contrato", x: 280, y: 40 },
  { id: "pedido", label: "Pedido", x: 470, y: 80 },
  { id: "produto", label: "Produto", x: 500, y: 250 },
  { id: "fornecedor", label: "Fornecedor", x: 330, y: 330 },
  { id: "ativo", label: "Ativo", x: 110, y: 300 },
  { id: "colaborador", label: "Colaborador", x: 60, y: 185 },
];
const G_EDGES = [
  ["cliente", "contrato"], ["contrato", "pedido"], ["pedido", "produto"], ["produto", "fornecedor"],
  ["fornecedor", "ativo"], ["ativo", "colaborador"], ["colaborador", "cliente"], ["cliente", "pedido"],
];
const G_CENTER = { x: 290, y: 190 };

function OntologyGraph() {
  const pos = Object.fromEntries(G_NODES.map((n) => [n.id, n]));
  return (
    <figure className="graph">
      <svg viewBox="0 0 580 380" role="img" aria-label="Ontologia: entidades do negócio conectadas entre si e ao núcleo da Ontarys">
        <defs>
          <radialGradient id="gcore" cx="0.36" cy="0.32" r="0.75">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#E6E8EB" />
            <stop offset="0.75" stopColor="#A7ACB3" />
            <stop offset="1" stopColor="#6C7178" />
          </radialGradient>
        </defs>
        {G_NODES.map((n) => (
          <line key={"c" + n.id} x1={G_CENTER.x} y1={G_CENTER.y} x2={n.x} y2={n.y} stroke="#2A2C30" strokeWidth="1" strokeDasharray="3 5" />
        ))}
        {G_EDGES.map(([a, b]) => (
          <line key={a + b} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y} stroke="#6C7178" strokeWidth="1.4" />
        ))}
        {G_NODES.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="7" fill="#050505" stroke="#D9DCE0" strokeWidth="2" />
            <text x={n.x} y={n.y - 16} textAnchor="middle" className="g-label">{n.label}</text>
          </g>
        ))}
        <circle cx={G_CENTER.x} cy={G_CENTER.y} r="34" fill="none" stroke="#6C7178" strokeWidth="1" />
        <circle cx={G_CENTER.x} cy={G_CENTER.y} r="20" fill="url(#gcore)" />
      </svg>
      <figcaption>Cada entidade do negócio vira um nó da ontologia; cada relação, uma conexão que os sistemas gerados respeitam.</figcaption>
    </figure>
  );
}

/* ——— Página ————————————————————————————————————————— */

export default function OntarysSite() {
  const [open, setOpen] = useState("ontologia");
  const [menu, setMenu] = useState(false);

  return (
    <div className="ont" id="topo">
      <style>{CSS}</style>

      <header className="bar">
        <Logo />
        <button className="menu-btn" aria-expanded={menu} aria-controls="nav" onClick={() => setMenu(!menu)}>
          {menu ? "Fechar" : "Menu"}
        </button>
        <nav id="nav" className={menu ? "nav nav-open" : "nav"}>
          <a href="#sobre" onClick={() => setMenu(false)}>Sobre</a>
          <a href="#como-funciona" onClick={() => setMenu(false)}>Como funciona</a>
          <a href="#plataforma" onClick={() => setMenu(false)}>Plataforma</a>
          <a href="#contato" className="nav-cta" onClick={() => setMenu(false)}>Fale com a gente</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
        <h1 className="hero-title">
          {HERO_LINES.map((l, i) => (
            <span key={i} className={i >= 3 ? "line line-silver" : "line"}>{l}{" "}</span>
          ))}
        </h1>
        <p className="hero-sub">{HERO_SUB}</p>
        </div>
        <div className="hero-mark">
          <Symbol size={420} id="hero" animate />
        </div>
      </section>

      <section className="about" id="sobre">
        <p className="signature">&lt;sistema operacional de dados&gt;</p>
        <div className="about-body">
          <p>
            A Ontarys é uma plataforma de ontologia. Ela se conecta aos dados da sua empresa e os organiza em um modelo
            vivo do negócio. Sobre esse modelo, a engenharia autônoma gera sistemas prontos para uso, com controle de
            acesso, rastreabilidade e analytics completos.
          </p>
          <p>
            Não substituímos o data warehouse, o data lake ou a nuvem que você já usa: a Ontarys roda sobre essa
            infraestrutura, dá significado de negócio aos dados que já estão nela e automatiza o que se constrói por cima.
          </p>
          <a className="link" href="#como-funciona">Veja como funciona</a>
        </div>
      </section>

      <section className="compat">
        <h2 className="h2">Funciona sobre a infraestrutura que você já tem</h2>
        <ul className="compat-list">
          {COMPAT.map((c) => (
            <li key={c} className="compat-tag">{c}</li>
          ))}
        </ul>
      </section>

      <section className="how" id="como-funciona">
        <h2 className="h2">Dos dados brutos a sistemas governados</h2>
        <div className="how-grid">
          <OntologyGraph />
          <ol className="steps">
            {STEPS.map((st, i) => (
              <li key={st.title} className="step">
                <span className="step-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-text">{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="offers" id="plataforma">
        <h2 className="h2">A plataforma</h2>
        <div className="offer-list">
          {OFFERS.map((o) => {
            const isOpen = open === o.id;
            return (
              <article key={o.id} className={isOpen ? "offer offer-open" : "offer"}>
                <h3>
                  <button className="offer-head" aria-expanded={isOpen} aria-controls={`p-${o.id}`} onClick={() => setOpen(isOpen ? null : o.id)}>
                    <span className="offer-title">{o.title}</span>
                    <span className="offer-toggle" aria-hidden="true" />
                  </button>
                </h3>
                <div className="offer-panel" id={`p-${o.id}`} role="region">
                  <div className="offer-inner">
                    <p className="offer-summary">{o.summary}</p>
                    <ul>
                      {o.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                    <a className="link" href="#contato">Ver uma demonstração</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact" id="contato">
        <Symbol size={96} id="cta" />
        <h2 className="contact-title">Veja a ontologia da sua empresa ganhar forma.</h2>
        <p className="contact-sub">Implantação acompanhada por especialistas, do primeiro conector aos primeiros sistemas em produção.</p>
        <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>Agendar uma demonstração</a>
      </section>

      <footer className="foot">
        <Logo size={28} />
        <p>© 2026 Ontarys</p>
      </footer>
    </div>
  );
}

/* ——— Estilos ——————————————————————————————————————— */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Michroma&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@500&display=swap');

.ont{
  --black:#050505; --ink:#141416; --line:#2A2C30; --graphite:#6C7178;
  --silver:#A8ADB4; --silver-hi:#E4E6E9; --white:#F5F6F7;
  --display:'Michroma','Eurostile','Bank Gothic',sans-serif;
  --body:'IBM Plex Sans','Helvetica Neue',sans-serif;
  --mono:'IBM Plex Mono',Menlo,monospace;
  background:var(--black); color:var(--silver-hi); font-family:var(--body);
  font-size:18px; line-height:1.6; min-height:100vh; overflow-x:clip;
}
.ont *{box-sizing:border-box}
.ont a{color:inherit}
.ont :focus-visible{outline:2px solid var(--silver-hi); outline-offset:4px}

.bar{position:sticky; top:0; z-index:10; display:flex; align-items:center; justify-content:space-between;
  padding:20px clamp(20px,5vw,72px); background:rgba(5,5,5,.86); backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line)}
.logo{display:flex; align-items:center; gap:12px; text-decoration:none}
.logo span{font-family:var(--display); text-transform:uppercase; letter-spacing:.16em; font-size:15px; color:var(--silver-hi)}
.nav{display:flex; align-items:center; gap:36px}
.nav a{text-decoration:none; font-size:15px; color:var(--silver)}
.nav a:hover{color:var(--white)}
.nav .nav-cta{color:var(--black); background:var(--silver-hi); padding:10px 18px; border-radius:2px}
.nav .nav-cta:hover{background:var(--white); color:var(--black)}
.menu-btn{display:none; background:none; border:1px solid var(--line); color:var(--silver-hi);
  font:500 14px var(--body); padding:10px 16px; min-height:44px; cursor:pointer}

.hero{display:grid; grid-template-columns:minmax(0,1.35fr) minmax(0,1fr); align-items:center; gap:40px;
  padding:clamp(56px,9vw,128px) clamp(20px,5vw,72px) clamp(64px,8vw,112px); max-width:1440px; margin:0 auto}
.hero-title{margin:0; font-family:var(--display); font-weight:400; text-transform:uppercase;
  font-size:clamp(26px,4.2vw,58px); line-height:1.18; letter-spacing:.02em}
.line{display:block; color:var(--white)}
.line-silver{color:var(--silver)}
.hero-mark{display:flex; justify-content:center}
.hero-mark .sym{width:100%; max-width:420px; height:auto}

.sym-anim .sym-hex{stroke-dasharray:1; stroke-dashoffset:1; animation:draw 1.6s cubic-bezier(.65,0,.35,1) .2s forwards}
.sym-anim .sym-facet{opacity:0; animation:fade .9s ease 1.3s forwards}
.sym-anim .sym-node{opacity:0; transform-origin:98px 38px; transform:scale(.2); animation:pop .6s cubic-bezier(.3,1.6,.5,1) 1.7s forwards}
@keyframes draw{to{stroke-dashoffset:0}}
@keyframes fade{to{opacity:1}}
@keyframes pop{to{opacity:1; transform:scale(1)}}
@media (prefers-reduced-motion:reduce){
  .sym-anim .sym-hex,.sym-anim .sym-facet,.sym-anim .sym-node{animation:none; opacity:1; stroke-dashoffset:0; transform:none}
}

.about{display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:32px;
  padding:clamp(56px,7vw,96px) clamp(20px,5vw,72px); border-top:1px solid var(--line); max-width:1440px; margin:0 auto}
.signature{grid-column:1 / span 4; margin:0; font-family:var(--mono); font-size:15px; color:var(--silver)}
.about-body{grid-column:5 / span 7}
.about-body p{margin:0 0 24px; font-size:clamp(19px,1.6vw,23px); line-height:1.55; color:var(--white); max-width:34em}
.link{font-size:16px; font-weight:500; color:var(--white); text-decoration:underline; text-underline-offset:6px;
  text-decoration-color:var(--graphite)}
.link:hover{text-decoration-color:var(--white)}

.compat{padding:clamp(40px,5vw,64px) clamp(20px,5vw,72px); border-top:1px solid var(--line); max-width:1440px; margin:0 auto}
.compat .h2{margin-bottom:24px; font-size:clamp(17px,1.9vw,22px)}
.compat-list{display:flex; flex-wrap:wrap; gap:12px; margin:0; padding:0; list-style:none}
.compat-tag{font-family:var(--mono); font-size:13px; color:var(--silver); border:1px solid var(--line); padding:8px 14px; border-radius:999px}

.offers{padding:clamp(56px,7vw,96px) clamp(20px,5vw,72px); border-top:1px solid var(--line); max-width:1440px; margin:0 auto}
.h2{margin:0 0 48px; font-family:var(--display); font-weight:400; text-transform:uppercase; letter-spacing:.04em;
  font-size:clamp(20px,2.4vw,32px); color:var(--white); line-height:1.3}
.offer{border-top:1px solid var(--line)}
.offer:last-child{border-bottom:1px solid var(--line)}
.offer h3{margin:0}
.offer-head{width:100%; display:flex; align-items:center; justify-content:space-between; gap:24px; background:none; border:0;
  padding:30px 0; cursor:pointer; color:var(--silver); text-align:left; min-height:44px}
.offer-head:hover,.offer-open .offer-head{color:var(--white)}
.offer-title{font-family:var(--display); text-transform:uppercase; letter-spacing:.06em; font-size:clamp(16px,1.8vw,24px); line-height:1.3}
.offer-toggle{position:relative; width:18px; height:18px; flex:none}
.offer-toggle::before,.offer-toggle::after{content:""; position:absolute; left:0; top:8px; width:18px; height:2px; background:currentColor; transition:transform .3s ease}
.offer-toggle::after{transform:rotate(90deg)}
.offer-open .offer-toggle::after{transform:rotate(0)}
.offer-panel{display:grid; grid-template-rows:0fr; transition:grid-template-rows .4s ease}
.offer-open .offer-panel{grid-template-rows:1fr}
.offer-inner{overflow:hidden; display:grid; grid-template-columns:minmax(0,5fr) minmax(0,7fr); column-gap:48px}
.offer-open .offer-inner{padding-bottom:36px}
.offer-summary{margin:0; font-size:19px; color:var(--white); max-width:28em}
.offer ul{list-style:none; margin:0; padding:0; grid-row:span 2}
.offer li{padding:12px 0 12px 28px; border-top:1px solid var(--line); position:relative; color:var(--silver-hi); font-size:17px}
.offer li::before{content:"»"; position:absolute; left:0; color:var(--graphite)}
.offer .link{align-self:end; margin-top:24px; justify-self:start}
@media (prefers-reduced-motion:reduce){.offer-panel,.offer-toggle::before,.offer-toggle::after{transition:none}}

.contact{display:flex; flex-direction:column; align-items:center; text-align:center; gap:32px;
  padding:clamp(72px,10vw,140px) clamp(20px,5vw,72px); border-top:1px solid var(--line)}
.contact-title{margin:0; font-family:var(--display); font-weight:400; text-transform:uppercase; letter-spacing:.03em;
  font-size:clamp(22px,3.2vw,44px); line-height:1.25; color:var(--white); max-width:18em}
.btn{display:inline-flex; align-items:center; min-height:52px; padding:0 28px; background:var(--silver-hi); color:var(--black);
  text-decoration:none; font-weight:500; font-size:16px; border-radius:2px}
.ont .btn{color:var(--black)}
.btn:hover{background:var(--white)}

.foot{display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;
  padding:28px clamp(20px,5vw,72px); border-top:1px solid var(--line)}
.foot p{margin:0; font-size:14px; color:var(--graphite)}

@media (max-width:900px){
  .hero{grid-template-columns:1fr}
  .hero-mark{order:-1; justify-content:flex-start}
  .hero-mark .sym{max-width:180px}
  .about{grid-template-columns:1fr}
  .signature,.about-body{grid-column:auto}
  .offer-inner{grid-template-columns:1fr; row-gap:24px}
}
@media (max-width:760px){
  .menu-btn{display:inline-flex; align-items:center}
  .nav{display:none; position:absolute; top:100%; left:0; right:0; flex-direction:column; align-items:stretch; gap:0;
    background:var(--black); border-bottom:1px solid var(--line); padding:8px 20px 20px}
  .nav-open{display:flex}
  .nav a{padding:14px 0; border-bottom:1px solid var(--line)}
  .nav .nav-cta{margin-top:16px; text-align:center; border:0}
}
.how{padding:clamp(56px,7vw,96px) clamp(20px,5vw,72px); border-top:1px solid var(--line); max-width:1440px; margin:0 auto}
.how-grid{display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:clamp(32px,5vw,80px); align-items:start}
.graph{margin:0; position:sticky; top:110px}
.graph svg{width:100%; height:auto; display:block}
.g-label{font-family:var(--body); font-size:13px; fill:#C9CCD1}
.graph figcaption{margin-top:16px; font-size:15px; color:var(--graphite); max-width:36em}
.steps{list-style:none; margin:0; padding:0}
.step{display:grid; grid-template-columns:56px minmax(0,1fr); gap:16px; padding:28px 0; border-top:1px solid var(--line)}
.step:last-child{border-bottom:1px solid var(--line)}
.step-n{font-family:var(--mono); font-size:15px; color:var(--silver); padding-top:3px}
.step-title{margin:0 0 8px; font-family:var(--display); font-weight:400; text-transform:uppercase; letter-spacing:.05em; font-size:17px; color:var(--white); line-height:1.35}
.step-text{margin:0; color:var(--silver-hi); font-size:17px; max-width:34em}
.contact-sub{margin:-8px 0 0; color:var(--silver); max-width:32em}
@media (max-width:900px){
  .how-grid{grid-template-columns:1fr}
  .graph{position:static}
}
.hero-sub{margin:36px 0 0; font-size:clamp(18px,1.5vw,21px); line-height:1.55; color:var(--silver); max-width:30em}
`;