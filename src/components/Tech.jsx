import Badge from './Badge.jsx';

const POINTS = [
  'LLM per estrazione metadati e dialogo naturale',
  'Matching su categoria, posizione, disponibilità, qualità/ranking',
  'Stack su Google Cloud: Cloud Run, BigQuery, Cloud Storage',
  'Roadmap: integrazione con ChatGPT (GPT Store / plugin API)'
];

function Tech({ id }) {
  return (
    <section id={id} aria-labelledby="tech-title">
      <div className="vf-container flex flex-col gap-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="subtle">Tecnologia</Badge>
            <h2 id="tech-title" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Architettura affidabile, scalabile e pronta all’integrazione
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Ogni decisione tecnica è orientata alla qualità del matching e alla rapidità di
              risposta. Dall’estrazione dei metadati alla selezione dei professionisti, tutto è
              orchestrato da pipeline AI sicure e monitorate.
            </p>
          </div>
          <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wide">
            ChatGPT integration (in arrivo)
          </Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-sm font-medium leading-relaxed text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-vf-primary/40 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-vf-primary/10 text-vf-primary">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M8 3v10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
