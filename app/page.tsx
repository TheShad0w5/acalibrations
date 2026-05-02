export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          A Calibrations
        </p>

        <h1 className="max-w-4xl text-5xl font-black uppercase leading-tight md:text-7xl">
          Calibration Engineering for Serious Vehicle Programs
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          ECU calibration, controls strategy, diagnostics support, and technical consulting
          for performance shops, race teams, engine builders, and specialty vehicle programs.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:sales@acalibrations.com"
            className="rounded-xl bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-red-700"
          >
            Request Consultation
          </a>

          <a
            href="#services"
            className="rounded-xl border border-zinc-700 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white hover:border-red-600"
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
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-sm font-semibold uppercase tracking-wide text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-t border-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Core Services
          </p>

          <h2 className="max-w-3xl text-4xl font-black uppercase md:text-5xl">
            Technical support for calibration problems that need more than a canned answer.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "ECU Calibration",
                body: "Standalone and OEM calibration support focused on drivability, repeatability, protection logic, and system behavior.",
              },
              {
                title: "Remote Calibration Support",
                body: "Log review, file review, diagnostic direction, and project-based support for partner shops and technical teams.",
              },
              {
                title: "Controls Strategy",
                body: "DBW, boost control, torque strategy, fuel system characterization, sensor scaling, and compensations.",
              },
              {
                title: "Diagnostics",
                body: "Structured troubleshooting for sync loss, sensor faults, fueling errors, idle control, startup, and instability.",
              },
              {
                title: "Motorsport Consulting",
                body: "Calibration refinement and system review for track, competition, and high-performance use cases.",
              },
              {
                title: "Platform Support",
                body: "Emtron, Haltech, MoTeC, Link ECU, HP Tuners, and select OEM ECU ecosystems.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-xl font-black uppercase">{service.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}