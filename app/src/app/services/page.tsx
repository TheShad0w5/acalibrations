export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
          Apollo Calibration Solutions
        </p>

        <h1 className="max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl text-[var(--gold)]">
          B2B Calibration Support for Serious Performance Programs
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Apollo Calibration Solutions provides professional calibration support, dyno tuning,
          and technical consulting for performance shops, race teams, engine builders, and
          specialty vehicle programs.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          Owned and operated by Keith Fields, with over 20 years of calibration experience
          and more than 14,000 vehicles tuned since 2005.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:sales@apollocalibrationsolutions.com"
            className="rounded-xl bg-[var(--gold)] px-6 py-4 text-sm font-bold uppercase tracking-wide text-black hover:bg-[var(--gold-dark)]"
          >
            Request Consultation
          </a>

          <a
            href="/services"
            className="rounded-xl border border-zinc-700 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:border-[var(--gold)]"
          >
            View Services
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {[
            "ECU Calibration",
            "Controls Strategy",
            "Remote Support",
            "Advanced Diagnostics",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-sm font-semibold uppercase tracking-wide text-zinc-300 hover:border-[var(--gold)] transition-all"
            >
              {item}
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}