import { useState } from 'react';

function FAQ({ id, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id={id} aria-labelledby="faq-title">
      <div className="vf-container max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            FAQ
          </span>
          <h2 id="faq-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Domande frequenti
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Tutte le risposte rapide su come funziona VibeFinder per utenti e professionisti.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-900 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vf-primary"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-question-${index}`}
                >
                  {item.question}
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition ${
                      isOpen ? 'bg-vf-primary text-white border-vf-primary' : 'text-slate-600'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      {isOpen ? (
                        <path
                          d="M4 8h8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      ) : (
                        <>
                          <path
                            d="M8 4v8"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4 8h8"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
