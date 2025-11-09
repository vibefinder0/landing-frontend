const BENEFITS = [
  'Canale di acquisizione clienti mirato',
  'Profilo completo con competenze, area di servizio, disponibilità',
  'Richieste qualificate e con contesto completo',
  'Fee chiara per ogni contatto accettato'
];

function ForPros({ id, onCtaClick }) {
  return (
    <section id={id} aria-labelledby="for-pros-title">
      <div className="vf-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 flex flex-col gap-4 rounded-[32px] border border-slate-100 bg-white p-10 shadow-sm lg:order-1">
          <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Per professionisti
          </span>
          <h2 id="for-pros-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Un flusso costante di richieste in linea con il tuo profilo
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Sfrutta l’IA di VibeFinder per ricevere richieste già contestualizzate e con clienti
            pronti a partire. Gestisci la tua disponibilità in tempo reale e accetta solo le richieste
            che vuoi.
          </p>
          <ul className="space-y-4 pt-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-vf-primary/10 text-vf-primary">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                    <path
                      d="m4 8 2.5 2.5L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-sm font-medium leading-relaxed text-slate-700">{benefit}</p>
              </li>
            ))}
          </ul>
          <div className="pt-6">
            <button
              type="button"
              onClick={onCtaClick}
              className="rounded-full border border-vf-primary bg-white px-6 py-3 text-sm font-semibold text-vf-primary transition hover:bg-vf-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
            >
              Diventa professionista
            </button>
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-white to-slate-100 p-8 shadow-lg">
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Dashboard
                </p>
                <h3 className="text-2xl font-semibold text-slate-900">Panoramica richieste</h3>
              </div>
              <div className="space-y-3">
                {['Idraulica', 'Architettura', 'Consulenza legale'].map((category) => (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{category}</p>
                      <p className="text-xs text-slate-500">3 richieste in attesa</p>
                    </div>
                    <span className="rounded-full bg-vf-primary/10 px-3 py-1 text-xs font-semibold text-vf-primary">
                      AI Match
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Disponibilità
                </p>
                <div className="mt-2 flex items-center justify-between text-slate-800">
                  <span>Lun - Sab</span>
                  <span>08:00 - 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForPros;
