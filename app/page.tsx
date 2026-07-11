"use client";

import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { content, links, type Lang } from "../lib/content";
import portrait from "../caio-cutout.webp";

export default function Page() {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const t = content[lang];

  return (
    <>
      <header className="site-header mono">
        <a href="#top">Caio·Pieri</a>
        <nav className="site-nav" aria-label="Principal">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="lang-toggle" role="group" aria-label="Idioma / Language">
          <button aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>
            PT
          </button>
          <span aria-hidden>/</span>
          <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
            EN
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <p className="kicker mono">{t.hero.kicker}</p>
          <h1 className="hero-title">
            {t.hero.line1}
            <em className="serif">{t.hero.line2}</em>
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-foot mono">
            <span>{t.hero.scroll} ↓</span>
            <span>São Paulo — BR</span>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="section-inner">
            <Reveal>
              <p className="label mono">(1) {t.projects.label}</p>
              <h2 className="section-title">{t.projects.intro}</h2>
            </Reveal>
            <div className="cards">
              {t.projects.items.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <article className="project-card">
                    <div className="project-visual" aria-hidden>
                      <div className="chrome">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="visual-body">
                        <span className="visual-name serif">{p.name}</span>
                        <span className="visual-meta mono">{p.meta}</span>
                      </div>
                    </div>
                    <div className="project-info">
                      <p className="project-index mono">
                        0{i + 1} — {p.meta}
                      </p>
                      <h3>{p.name}</h3>
                      <p className="project-desc">{p.desc}</p>
                      <a
                        className="btn mono"
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.projects.view} →
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section about">
          <div className="section-inner">
            <Reveal>
              <p className="label mono">(2) {t.about.label}</p>
              <blockquote className="about-quote serif">
                “{t.about.quote}”
              </blockquote>
            </Reveal>
            <div className="about-grid">
              <Reveal delay={120}>
                <div className="about-text">
                  <p className="about-body">{t.about.body}</p>
                  <a
                    className="cv-btn mono"
                    href="/Caio_Amaral_de_Pieri_CV.pdf"
                    download="Caio_Amaral_de_Pieri_CV.pdf"
                  >
                    {t.about.cv} ↓
                  </a>
                </div>
              </Reveal>
              <Reveal>
                <figure className="photo-figure">
                  <img
                    className="cutout"
                    src={portrait.src}
                    alt="Retrato de Caio Amaral de Pieri"
                    width={portrait.width}
                    height={portrait.height}
                  />
                  <figcaption className="photo-caption mono">
                    {t.about.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="formacao" className="section">
          <div className="section-inner">
            <Reveal>
              <p className="label mono">(3) {t.education.label}</p>
              <h2 className="section-title">{t.education.intro}</h2>
            </Reveal>
            <div className="edu-grid">
              {t.education.items.map((e, i) => (
                <Reveal key={e.school} delay={i * 80}>
                  <article className="edu-card">
                    <a
                      className="edu-logo"
                      href={e.site}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Site — ${e.school}`}
                    >
                      <img src={e.logo} alt={`Logo ${e.school}`} />
                    </a>
                    <h3>{e.school}</h3>
                    <p className="edu-course">{e.course}</p>
                    <p className="edu-meta">{e.status}</p>
                    <p className="edu-meta">{e.place}</p>
                    <div className="edu-foot mono">
                      <span>0{i + 1}</span>
                      <span className="edu-links">
                        <a href={e.site} target="_blank" rel="noreferrer">
                          Site ↗
                        </a>
                        <a href={e.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn ↗
                        </a>
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="site-footer">
        <div className="section-inner">
          <Reveal>
            <p className="label mono">(4) {t.footer.label}</p>
            <h2 className="footer-heading serif">{t.footer.heading}</h2>
            <a className="email-link" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            <div className="profiles">
              <a
                className="profile-card"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="profile-ic" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </span>
                <span className="profile-meta">
                  <span className="profile-name">LinkedIn</span>
                  <span className="profile-handle mono">/in/caiopieri</span>
                </span>
                <span className="profile-go mono">{t.footer.connect} ↗</span>
              </a>
              <a
                className="profile-card"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="profile-ic" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7 0-.7 0-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1 0-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.1 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                  </svg>
                </span>
                <span className="profile-meta">
                  <span className="profile-name">GitHub</span>
                  <span className="profile-handle mono">@caiopieri</span>
                </span>
                <span className="profile-go mono">{t.footer.follow} ↗</span>
              </a>
            </div>
          </Reveal>
        </div>
        <p className="giant" aria-hidden>
          Caio·Pieri
        </p>
        <div className="footer-bottom mono">
          <span>{t.footer.rights}</span>
          <span>{t.footer.note}</span>
        </div>
      </footer>
    </>
  );
}
