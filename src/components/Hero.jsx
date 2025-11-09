import Badge from './Badge.jsx';
import heroIllustration from '../assets/hero-illustration.svg';

function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section id="hero" className="pt-24 sm:pt-32 lg:pt-36">
      <div className="vf-container grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <Badge className="w-fit text-sm normal-case" variant="primary">
            Trova il professionista giusto, subito.
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Connettiamo utenti e liberi professionisti con un matching intelligente basato su AI.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            VibeFinder semplifica la ricerca di professionisti qualificati in base al tuo bisogno,
            alla disponibilità e alla qualità del servizio. Dì cosa ti serve, il nostro motore AI
            estrae i dettagli chiave e ti mette in contatto con i profili più adatti.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onPrimaryClick}
              className="rounded-full bg-vf-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-vf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
            >
              Inizia ora
            </button>
            <button
              type="button"
              onClick={onSecondaryClick}
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
            >
              Scopri di più
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-vf-primary" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 4v10l-7 4-7-4V7l7-4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Matching AI end-to-end
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-vf-primary" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M5 7h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              Conversazione naturale
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[480px] items-center justify-center rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10">
            <img
              src={heroIllustration}
              alt="Interfaccia di conversazione di VibeFinder"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
