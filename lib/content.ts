export type Lang = "pt" | "en";

type Project = {
  name: string;
  meta: string;
  desc: string;
  href: string;
  embed?: string;
};

type School = {
  school: string;
  course: string;
  status: string;
  place: string;
  logo: string;
  linkedin: string;
  site: string;
};

export type Dictionary = {
  nav: { label: string; href: string }[];
  hero: {
    kicker: string;
    line1: string;
    line2: string;
    sub: string;
    scroll: string;
  };
  projects: {
    label: string;
    intro: string;
    view: string;
    items: Project[];
  };
  about: {
    label: string;
    quote: string;
    body: string;
    caption: string;
    cv: string;
  };
  education: {
    label: string;
    intro: string;
    items: School[];
  };
  footer: {
    label: string;
    heading: string;
    connect: string;
    follow: string;
    note: string;
    rights: string;
  };
};

const LINKEDIN = "https://www.linkedin.com/in/caiopieri/";
const GITHUB = "https://github.com/caiopieri";
const FLINT = "https://flintapp.vercel.app";
const KORTEX = "https://getkortex.vercel.app";

export const content: Record<Lang, Dictionary> = {
  pt: {
    nav: [
      { label: "Projetos", href: "#projetos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Formação", href: "#formacao" },
      { label: "Contato", href: "#contato" },
    ],
    hero: {
      kicker: "Portfólio — São Paulo, Brasil",
      line1: "Entusiasta de tecnologia.",
      line2: "Construo para entender.",
      sub: "Caio Amaral de Pieri — projetos que nascem de curiosidade e viram software de verdade.",
      scroll: "Role para explorar",
    },
    projects: {
      label: "Projetos",
      intro: "Uma seleção de projetos autorais. Cada um começou com uma pergunta que eu ainda não sabia responder.",
      view: "Ver projeto",
      items: [
        {
          name: "Flint",
          meta: "iOS · iPadOS · Open source",
          desc: "App de notas que une edição em Markdown, escrita à mão nativa com Apple Pencil e IA local ou na nuvem — em um único lugar, com privacidade em primeiro lugar.",
          href: FLINT,
          embed: FLINT,
        },
        {
          name: "Kortex",
          meta: "IA · Orquestração multiagente",
          desc: "Um simulador de organização: recebe um objetivo, monta o time de especialistas que ele exige e conduz o processo inteiro — com gates e evidências — até entregar software, specs e design.",
          href: KORTEX,
          embed: KORTEX,
        },
      ],
    },
    about: {
      label: "Sobre",
      quote: "Quanto mais aprendo, mais claro fica o quanto ainda falta.",
      body: "Respiro tecnologia desde muito pequeno. Cresci desmontando ideias para entender como funcionam — e construindo projetos para descobrir se entendi mesmo. Na escola, liderei projetos do começo ao fim e representei times em competições como a Olimpíada Nacional de Aplicativos, o Solve for Tomorrow Brasil, da Samsung, e hackathons. Sigo do mesmo jeito: construindo, errando cedo e aprendendo.",
      caption: "Caio Amaral de Pieri — 2025",
      cv: "Baixar currículo",
    },
    education: {
      label: "Formação",
      intro: "Base técnica formal, curiosidade informal em tempo integral.",
      items: [
        {
          school: "Etec de Taboão da Serra",
          course: "Técnico em Desenvolvimento de Sistemas",
          status: "Concluído · 2025",
          place: "Taboão da Serra, SP",
          logo: "/logo-etec.png",
          linkedin: "https://www.linkedin.com/school/etecsp",
          site: "https://etects.cps.sp.gov.br/",
        },
        {
          school: "Universidade Anhembi Morumbi",
          course: "Engenharia da Computação",
          status: "Em curso · término previsto 2030",
          place: "Vila Olímpia, São Paulo, SP",
          logo: "/logo-anhembi.png",
          linkedin:
            "https://www.linkedin.com/school/universidade-anhembi-morumbi",
          site: "https://portal.anhembi.br/cursos/graduacao/engenharia-da-computacao-bacharelado/",
        },
      ],
    },
    footer: {
      label: "Contato",
      heading: "Vamos conversar.",
      connect: "Conectar",
      follow: "Seguir",
      note: "Feito com calma em São Paulo.",
      rights: "© 2026 Caio Amaral de Pieri",
    },
  },
  en: {
    nav: [
      { label: "Projects", href: "#projetos" },
      { label: "About", href: "#sobre" },
      { label: "Education", href: "#formacao" },
      { label: "Contact", href: "#contato" },
    ],
    hero: {
      kicker: "Portfolio — São Paulo, Brazil",
      line1: "Technology enthusiast.",
      line2: "I build to understand.",
      sub: "Caio Amaral de Pieri — projects born from curiosity that turn into real software.",
      scroll: "Scroll to explore",
    },
    projects: {
      label: "Projects",
      intro: "A selection of self-initiated projects. Each one started with a question I couldn't answer yet.",
      view: "View project",
      items: [
        {
          name: "Flint",
          meta: "iOS · iPadOS · Open source",
          desc: "A note-taking app that brings together Markdown editing, native Apple Pencil handwriting, and local or cloud AI — in a single, privacy-first place.",
          href: FLINT,
          embed: FLINT,
        },
        {
          name: "Kortex",
          meta: "AI · Multi-agent orchestration",
          desc: "An organization simulator: given a goal, it assembles the team of specialists the goal requires and runs the whole process — with gates and evidence — until it ships software, specs, and design.",
          href: KORTEX,
          embed: KORTEX,
        },
      ],
    },
    about: {
      label: "About",
      quote: "The more I learn, the clearer it becomes how much is still left.",
      body: "I have been breathing technology since I was very young. I grew up taking ideas apart to understand how they work — and building projects to find out whether I really did. At school, I led projects end to end and represented teams in competitions like the Brazilian National App Olympiad, Samsung's Solve for Tomorrow Brazil, and hackathons. I still work the same way: building, failing early, and learning.",
      caption: "Caio Amaral de Pieri — 2025",
      cv: "Download résumé",
    },
    education: {
      label: "Education",
      intro: "Formal technical foundation, full-time informal curiosity.",
      items: [
        {
          school: "Etec de Taboão da Serra",
          course: "Systems Development Technician",
          status: "Completed · 2025",
          place: "Taboão da Serra, SP — Brazil",
          logo: "/logo-etec.png",
          linkedin: "https://www.linkedin.com/school/etecsp",
          site: "https://etects.cps.sp.gov.br/",
        },
        {
          school: "Universidade Anhembi Morumbi",
          course: "Computer Engineering",
          status: "In progress · expected 2030",
          place: "Vila Olímpia, São Paulo, SP — Brazil",
          logo: "/logo-anhembi.png",
          linkedin:
            "https://www.linkedin.com/school/universidade-anhembi-morumbi",
          site: "https://portal.anhembi.br/cursos/graduacao/engenharia-da-computacao-bacharelado/",
        },
      ],
    },
    footer: {
      label: "Contact",
      heading: "Let's talk.",
      connect: "Connect",
      follow: "Follow",
      note: "Calmly made in São Paulo.",
      rights: "© 2026 Caio Amaral de Pieri",
    },
  },
};

export const links = {
  email: "caioamaralpieri@hotmail.com",
  github: GITHUB,
  linkedin: LINKEDIN,
};
