function Pricing({ id }) {
  return (
    <section id={id} aria-labelledby="pricing-title">
      <div className="vf-container flex flex-col items-center gap-12 text-center">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Prezzi
          </span>
          <h2 id="pricing-title" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Un prezzo trasparente per ogni nuova opportunità
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Il modello di pricing di VibeFinder è studiato per essere sostenibile e chiaro sin dal
            primo giorno: paghi solo quando decidi di accettare una richiesta.
          </p>
        </div>
        <div className="w-full max-w-3xl rounded-[32px] border border-vf-primary/20 bg-white p-10 shadow-lg shadow-vf-primary/10">
          <p className="text-sm font-semibold uppercase tracking-wide text-vf-primary">
            Piano lancio
          </p>
          <h3 className="mt-3 text-4xl font-semibold text-slate-900">
            Fee fissa di 2 € per ogni contatto accettato dal professionista.
          </h3>
          <p className="mt-6 text-base text-slate-500">
            Nessun costo di iscrizione nella fase iniziale.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
