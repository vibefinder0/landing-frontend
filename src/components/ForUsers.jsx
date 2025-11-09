const BENEFITS = [
  'Registrazione semplice e guidata',
  'Conversazione naturale e senza gergo tecnico',
  'Tempi rapidi di risposta dai professionisti',
  'Professionisti verificati e qualificati'
];

function ForUsers({ id }) {
  return (
    <section id={id} aria-labelledby="for-users-title">
      <div className="vf-container grid gap-10 rounded-[32px] border border-slate-100 bg-white p-10 shadow-sm lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Per utenti
          </span>
          <h2 id="for-users-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Liberati dallo stress di cercare il professionista giusto
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            VibeFinder ascolta il tuo bisogno, arricchisce le informazioni e ti propone solo chi può
            davvero occuparsene, con tempi e costi chiari fin dall’inizio.
          </p>
        </div>
        <ul className="space-y-4">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
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
      </div>
    </section>
  );
}

export default ForUsers;
