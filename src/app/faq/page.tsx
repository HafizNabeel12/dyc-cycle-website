"use client";
import React, { useState } from "react";

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: "Levering",
    content: `
Hvor lang tid tar levering?
Normalt 2–5 virkedager innen Norge.

Leverer dere til utlandet?
Foreløpig leverer vi kun innen Norge.
    `,
  },
  {
    title: "Montering",
    content: `
Leveres sykkelen ferdig montert?
Syklene leveres 85–95 % ferdig montert. Du trenger kun å sette på styre, pedaler og eventuelt hjul.

Kan jeg bestille montering?
Ja, vi tilbyr montering i vårt showroom mot et tillegg.
    `,
  },
  {
    title: "Batteri og lading",
    content: `
Hvor lang rekkevidde har batteriet?
Rekkevidden varierer fra 40–120 km avhengig av modell, terreng og bruk.

Hvor lang tid tar lading?
Vanlig ladetid er 4–6 timer.

Kan jeg lade batteriet inne?
Ja, batteriene kan tas av og lades inne.
    `,
  },
  {
    title: "Service og vedlikehold",
    content: `
Trenger sykkelen service?
Ja, vi anbefaler service én gang i året, eller oftere ved mye bruk.

Tilbyr dere reservedeler?
Ja, vi har reservedeler og tilbehør tilgjengelig i nettbutikken.
    `,
  },
  {
    title: "Retur og reklamasjon",
    content: `
Hvordan returnerer jeg en vare?
Kontakt oss på support@sykkellageret.no innen 14 dager. Varen må være ubrukt og i original emballasje.

Hvor lenge gjelder reklamasjon?
Opptil 5 år i henhold til norsk forbrukerlovgivning.
    `,
  },
  {
    title: "Bruk og regler",
    content: `
Trenger jeg førerkort for el-sykkel?
Nei, så lenge sykkelen følger norske regler (maks 25 km/t, 250W motor).

Kan jeg bruke sykkelen i sykkelfelt?
Ja, el-sykler regnes som vanlige sykler.
    `,
  },
  {
    title: "Kontakt oss",
    content: `
Har du spørsmål om våre el-sykler, bestillinger, retur eller service? Vårt kundeserviceteam hjelper deg gjerne.

📧 E-post: support@sykkellageret.no
📞 Telefon: [sett inn nummer]
🕐 Åpningstider: Mandag–Fredag kl. 09:00–16:00

Vi besvarer henvendelser vanligvis innen 24 timer på hverdager.
    `,
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 pt-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
          Ofte stilte spørsmål
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

export default FAQPage;
