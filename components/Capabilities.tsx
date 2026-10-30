import type { CSSProperties } from "react";
import OpenProjectLink from "@/components/OpenProjectLink";

const capabilities = [
  {
    label: "01 / Backend",
    title: "Bot & backend",
    copy: "Guard, ticket, müzik, ekonomi. Sunucu tarafında kesintisiz çalışan sistemler.",
    big: "25",
    bigLabel: "guard modülü",
    tint: "#8b5cf6",
    chips: ["Node.js", "discord.js", "MongoDB", "Express"],
  },
  {
    label: "02 / Web",
    title: "Panel & arayüz",
    copy: "SSR, canlı akış ve yönetim panelleri; tarayıcıda oturan kontrol katmanı.",
    big: "4",
    bigLabel: "web paneli",
    tint: "#6366f1",
    chips: ["Next.js 16", "React 19", "TypeScript", "SSE"],
  },
  {
    label: "03 / FiveM",
    title: "FiveM & script",
    copy: "Script geliştirme, QBCore resource düzeni, veri yapısı ve kurulum.",
    big: "13",
    bigLabel: "script paketi",
    tint: "#22d3ee",
    chips: ["FiveM", "FXServer", "Lua", "txData"],
  },
  {
    label: "04 / Edit",
    title: "Kurgu & ses",
    copy: "Ritim kesme, ses-motion senkronu, altyazı ve dikey format çıkışları.",
    big: "93",
    bigLabel: "arşiv klibi",
    tint: "#f472b6",
    chips: ["Kurgu", "Ses", "Motion", "Altyazı"],
  },
];

const stack = [
  "Node.js",
  "discord.js",
  "MongoDB",
  "Express",
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind 4",
  "SQLite",
  "FiveM / FXServer",
  "Roblox Studio",
  "Luau",
  "Lua",
  "Canvas",
  "OAuth2",
  "SSE",
  "EJS",
  "AniList GraphQL",
];

export default function Capabilities() {
  return (
    <section className="section band-magenta" id="yetenekler" aria-labelledby="yetenekler-title">
      <div className="wrap">
        <div className="sec-head reveal" data-reveal>
          <div>
            <span className="sec-index">03 / Yetenekler</span>
            <h2 className="sec-title" id="yetenekler-title">
              Tek <em>masa</em>, dört disiplin
            </h2>
          </div>
          <p className="sec-note">
            Bot ve backend&apos;den panele, scriptten kurguya. Parçalar ayrı ayrı değil, aynı
            prodüksiyonun parçası.
          </p>
        </div>

        <div className="cap-grid">
          {capabilities.map((cap, index) => (
            <article
              className="cap reveal"
              data-reveal
              key={cap.title}
              style={
                {
                  "--tint": cap.tint,
                  "--d": `${index * 60}ms`,
                  "--cap-delay": `${index * 0.9}s`,
                } as CSSProperties
              }
            >
              <span className="cap-label">{cap.label}</span>
              <h3>{cap.title}</h3>
              <p>{cap.copy}</p>
              <div className="cap-foot">
                <div className="big">
                  {cap.big}
                  <span>{cap.bigLabel}</span>
                </div>
                <div className="cap-chips">
                  {cap.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="now-strip reveal" data-reveal>
            <span className="now-label">
              <span className="status-dot" aria-hidden="true" />
              Şu an
            </span>
            <p>
              <b>AniMax</b> — AniList kataloğu, özel oynatıcı ve hesap sistemi üzerinde
              çalışıyorum.
            </p>
            <OpenProjectLink id="animax" className="chip">
              Projeyi aç ↗
            </OpenProjectLink>
          </div>
        </div>

        <div className="tech-line reveal" data-reveal aria-hidden="true">
          <div className="tech-track">
            {[0, 1].map((group) => (
              <span key={group}>
                {stack.map((tech) => (
                  <span key={`${group}-${tech}`}>
                    {tech}
                    <i>✳</i>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
