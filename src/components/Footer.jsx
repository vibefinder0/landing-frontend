function Footer({ sections, onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="vf-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2 text-slate-600">
          <p className="text-sm font-semibold text-slate-900">© VibeFinder {year}</p>
          <p className="text-xs">
            Costruito con cura per connettere utenti e professionisti in modo trasparente.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => onNavigate(section.id)}
              className="text-left transition hover:text-vf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
            >
              {section.label}
            </button>
          ))}
          <a
            href="#"
            className="transition hover:text-vf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
          >
            Privacy
          </a>
          <a
            href="#"
            className="transition hover:text-vf-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
          >
            Termini
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
