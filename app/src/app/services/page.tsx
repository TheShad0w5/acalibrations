export default function ServicesPage() {
  const services = [
    {
      title: "ECU Calibration",
      body: "Standalone and OEM ECU calibration support for drivability, power delivery, safety strategies, transient response, and repeatable system behavior.",
    },
    {
      title: "Remote Calibration Support",
      body: "Log review, file review, configuration checks, and structured calibration direction for shops, builders, and technical teams.",
    },
    {
      title: "Controls Strategy",
      body: "Boost control, DBW, torque strategy, fuel system characterization, sensor scaling, compensations, and protection logic.",
    },
    {
      title: "Diagnostics & Troubleshooting",
      body: "Support for sync loss, startup issues, idle instability, fueling errors, sensor faults, CAN issues, and control-system conflicts.",
    },
    {
      title: "Motorsport Consulting",
      body: "Calibration and systems review for track, competition, high-output, and specialty applications where repeatability matters.",
    },
    {
      title: "Partner Shop Support",
      body: "White-label or collaborative technical support for performance shops that need calibration depth without adding full-time staff.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
          Services
        </p>

        <h1 className="max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl text-[var(--gold)]">
          Calibration Engineering, Strategy, and Technical Support
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Apollo Calibration Solutions provides professional B2B calibration support,
          dyno tuning, and technical consulting for performance shops, race teams,
          engine builders, and specialty vehicle programs.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          Owned and operated by Keith Fields, with over 20 years of calibration experience
          and more than 14,000 vehicles tuned since 2005.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl shadow-black/20 hover:border-[var(--gold)] transition-all"
            >
              <h2 className="text-xl font-black uppercase text-[var(--gold)]">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-zinc-400">{service.body}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 rounded-3xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 p-8 md:p-10">
          
          <h2 className="text-3xl font-black uppercase text-[var(--gold)]">
            Need Support on a Specific Project?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Send the platform, ECU, engine package, fuel system, hardware list,
            current issue, and available logs. We’ll help define the cleanest next step.
          </p>

          <a
            href="mailto:sales@apollocalibrationsolutions.com"
            className="mt-8 inline-block rounded-xl bg-[var(--gold)] px-6 py-4 text-sm font-bold uppercase tracking-wide text-black hover:bg-[var(--gold-dark)] transition-all"
          >
            Request Consultation
          </a>

        </section>
      </section>
    </main>
  );
}