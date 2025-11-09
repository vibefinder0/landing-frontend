import Card from './Card.jsx';
import Badge from './Badge.jsx';

const FEATURES = [
  {
    title: 'Matching intelligente con LLM',
    description:
      'Estraiamo metadati dal bisogno dell’utente e troviamo i top professionisti più rilevanti.',
    icon: (
      <svg className="h-10 w-10 text-vf-primary" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4 6 9v14l10 5 10-5V9l-10-5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 16a4 4 0 0 1 8 0v4c0 2.18-1.82 4-4 4s-4-1.82-4-4v-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    title: 'Interfaccia semplice e conversazionale',
    description:
      'Domande mirate finché non abbiamo tutte le informazioni essenziali.',
    icon: (
      <svg className="h-10 w-10 text-vf-primary" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 7h20v18l-6-4H6V7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 13h8M12 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Scalabilità su Google Cloud',
    description: 'Architettura su Cloud Run, BigQuery e Cloud Storage.',
    icon: (
      <svg className="h-10 w-10 text-vf-primary" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 12a8 8 0 0 1 15.5-3.25A6 6 0 1 1 24 24H11a5 5 0 0 1-3-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 21v-6l4 2 4-2v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: 'Trasparenza',
    description: 'Regole chiare, nessun costo nascosto.',
    icon: (
      <svg className="h-10 w-10 text-vf-primary" viewBox="0 0 32 32" fill="none">
        <path
          d="M10 6h12l4 6-15 14H6V12l4-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M14 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
];

function Features({ id }) {
  return (
    <section id={id} aria-labelledby="features-title">
      <div className="vf-container flex flex-col gap-12">
        <div className="max-w-3xl">
          <Badge variant="subtle">Cosa facciamo</Badge>
          <h2 id="features-title" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Matching personalizzato e trasparente per ogni esigenza
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Automazione intelligente, interfaccia conversazionale e infrastruttura scalabile: il
            motore VibeFinder ti connette con chi può risolvere davvero il tuo problema.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <Card key={feature.title}>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-vf-primary/10 p-4 text-vf-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
