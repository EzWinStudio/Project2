const steps = [
  {
    time: "00:00",
    title: "Keşif",
    copy: "İhtiyaç, sunucu düzeni ve hedef netleşir; kapsam yazılır.",
  },
  {
    time: "04:12",
    title: "Kurulum",
    copy: "Bot, veri ve altyapı ayağa kalkar; ilk sürüm çalışır.",
  },
  {
    time: "08:36",
    title: "Panel",
    copy: "Yönetim tarafı bağlanır; ayarlar Discord'dan ve webden yürür.",
  },
  {
    time: "12:08",
    title: "Test",
    copy: "Raid, hata ve kenar durum senaryoları tek tek denenir.",
  },
  {
    time: "16:40",
    title: "Yayın",
    copy: "Teslim, dokümantasyon ve bakım; sistem açık kalır.",
  },
];

export default function Process() {
  return (
    <section className="section" id="surec" aria-labelledby="surec-title">
      <div className="wrap">
        <div className="sec-head reveal" data-reveal>
          <div>
            <span className="sec-index">04 / Süreç</span>
            <h2 className="sec-title" id="surec-title">
              Fikirden <em>yayına</em>
            </h2>
          </div>
          <p className="sec-note">
            Her proje aynı zaman çizgisinde ilerler: net kapsam, çalışan sürüm, görünür panel, test
            ve açık teslim.
          </p>
        </div>

        <div className="process reveal" data-reveal>
          <span className="process-line" aria-hidden="true">
            <i />
          </span>
          {steps.map((step) => (
            <article className="step" key={step.title}>
              <span className="tc">{step.time}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
