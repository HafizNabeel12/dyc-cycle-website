"use client";
import React, { useState } from "react";

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: "Retur",
    content: `
Du har 14 dagers angrerett på alle kjøp gjort i vår nettbutikk.

Varen må returneres ubrukt, i original stand og emballasje.

Kunden betaler returfrakt, med mindre returen skyldes en feil fra vår side.

Kontakt oss på support@sykkellageret.no før du sender varen tilbake.
    `,
  },
  {
    title: "Reklamasjon",
    content: `
Retur må alltid avtales med oss på forhånd. Når vi har bekreftet at returen oppfyller våre retningslinjer, vil du motta nødvendig informasjon som returadresse og videre prosedyre.

Vi tilbyr 14 dagers angrerett fra den dagen du mottar varen, i tråd med angrerettloven.

Produktet må returneres i original stand og emballasje.

Kunden dekker returkostnader med mindre annet er avtalt.

Ved feil eller mangler dekkes returkostnadene av oss.

For å avtale retur, kontakt oss på support@sykkellageret.no med ordrenummer og informasjon om varen du ønsker å returnere.
    `,
  },
];

const ReturPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 pt-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
          Retur og reklamasjon
        </h1>
        <p className="text-center text-gray-500 text-sm mb-10">
          Sist oppdatert: 26. september 2025
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {index + 1}. {section.title}
                </span>
                <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturPage;
