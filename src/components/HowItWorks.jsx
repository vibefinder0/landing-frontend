const STEPS = [
  {
    title: 'Descrivi il bisogno',
    description: 'Es. “Ho una perdita in casa”',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 6h12v12l-4-3H6V6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Raccogliamo i metadati mancanti',
    description: 'Luogo, orario, urgenza, categoria',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4a5 5 0 0 1 5 5c0 3.5-5 10-5 10S7 12.5 7 9a5 5 0 0 1 5-5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="9" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Matching AI',
    description: 'Selezione top 5 professionisti',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="m5 9 6-5 6 5M5 15l6 5 6-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Contatto immediato',
    description: 'Il professionista accetta e sei subito in contatto',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h16v12H5l-1 3V5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 9h6M9 13h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }
];

function HowItWorks({ id }) {
  return (
    <section id={id} aria-labelledby="how-title">
      <div className="vf-container flex flex-col gap-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Come funziona
          </span>
          <h2 id="how-title" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Quattro passi, zero attriti
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Guidiamo ogni conversazione con domande mirate. La nostra AI arricchisce il contesto e
            restituisce solo professionisti realmente disponibili e qualificati.
          </p>
        </div>
        <ol className="relative space-y-10 border-l border-slate-200 pl-8 md:space-y-0 md:border-none md:pl-0 md:grid md:grid-cols-4 md:gap-6">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -left-[calc(2rem+1px)] top-8 hidden h-4 w-4 rounded-full border-2 border-white bg-vf-primary shadow-md md:block" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-vf-primary/10 text-vf-primary">
                {step.icon}
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-vf-primary">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
