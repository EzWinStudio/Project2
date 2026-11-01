import CopyInvite from "@/components/CopyInvite";
import { DISCORD_INVITE, DISCORD_LABEL, GITHUB_URL } from "@/data/projects";

export default function Contact() {
  return (
    <section className="contact" id="iletisim" aria-labelledby="iletisim-title">
      <div className="contact-marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((group) => (
            <span key={group}>
              Bir sonraki proje <b>·</b> Bir sonraki proje <b>·</b> Bir sonraki proje <b>·</b>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap contact-inner">
        <span className="sec-index">06 / İletişim</span>
        <h2 className="contact-title" id="iletisim-title">
          Sıradaki sistem <em>senin</em> olsun.
        </h2>

        <div className="contact-panel">
          <div>
            <span className="label">Discord / davet</span>
            <p className="invite">{DISCORD_LABEL}</p>
            <p className="note">
              Bot, panel, FiveM scripti ya da kurgu. Hangi sistemin eksik olduğunu yazman yeter;
              kapsamı birlikte çıkaralım.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer noopener"
            >
              Sunucuya gel
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            <CopyInvite value={DISCORD_INVITE} label="Daveti kopyala" />
          </div>
        </div>

        <div className="contact-channels">
          <div>
            <span className="label">Discord / topluluk</span>
            <p>
              Manga ve anime kanalları açık. Bölüm, çeviri ve sezon sohbeti aynı sunucuda.
            </p>
          </div>
          <div className="channel-tags">
            <span className="channel-tag">Manga</span>
            <span className="channel-tag">Anime</span>
            <a
              className="chip channel-cta"
              href={DISCORD_INVITE}
              target="_blank"
              rel="noreferrer noopener"
            >
              Kanallara katıl ↗
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <span>© 2026 EzWin — Tüm sistemler tek masada.</span>
            <div className="footer-links">
              <a href="#sistemler">Sistemler</a>
              <a href="#yetenekler">Yetenekler</a>
              <a href="#surec">Süreç</a>
              <a href={DISCORD_INVITE} target="_blank" rel="noreferrer noopener">
                Discord ↗
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
        <p className="footer-word" aria-hidden="true">
          <span className="fw-ez">EZ</span>
          <span className="fw-win">WIN</span>
        </p>
      </footer>
    </section>
  );
}
