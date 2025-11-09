function Contact({ id }) {
  return (
    <section id={id} aria-labelledby="contact-title">
      <div className="vf-container flex flex-col gap-6 rounded-[32px] border border-slate-100 bg-white p-10 text-center shadow-sm">
        <span className="mx-auto inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          Contatti
        </span>
        <h2 id="contact-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Parliamo delle tue esigenze
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          Vuoi portare i tuoi servizi a un nuovo livello? Scrivici, raccontaci cosa
          stai cercando e ti rispondiamo in meno di 24 ore.
        </p>
        <div className="pt-2">
          <a
            href="mailto:info@vibefinder.net"
            className="inline-flex items-center justify-center rounded-full bg-vf-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-vf-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
          >
            info@vibefinder.net
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
