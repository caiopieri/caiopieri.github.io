"use client";

import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import { content, links, type Lang } from "../lib/content";
import portrait from "../caio-cutout.png";

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
                <p className="about-body">{t.about.body}</p>
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
            <div className="footer-links mono">
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <span>{t.footer.note}</span>
            </div>
          </Reveal>
        </div>
        <p className="giant" aria-hidden>
          Caio·Pieri
        </p>
        <div className="footer-bottom mono">
          <span>{t.footer.rights}</span>
          <span>PT / EN</span>
        </div>
      </footer>
    </>
  );
}
