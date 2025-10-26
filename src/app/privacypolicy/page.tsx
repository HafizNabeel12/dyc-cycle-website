"use client";

import React, { useState } from "react";

const sections = [
  {
    title: "1. Behandlingsansvarlig",
    content: `Det er JALUT AI INNOSCRIBE (org.nr. 932806517) som er behandlingsansvarlig for personopplysninger som behandles. Vår registrerte adresse er Niels Juels Gate 70, Oslo, Norge. Spørsmål om personvern kan sendes til support@sykkellageret.no.`,
  },
  {
    title: "2. Innsamling og behandling av personopplysninger",
    content: `Vi samler inn personopplysninger når du handler hos oss, registrerer deg for nyhetsbrev, bruker nettsiden vår eller kommuniserer med oss. Dette kan inkludere:\n- Navn, e-post, telefonnummer\n- Leverings- og fakturaadresse\n- Betalingsinformasjon (via sikre tredjepartsløsninger)\n- IP-adresse og tekniske data (gjennom cookies)\n- Kjøpshistorikk og bruk av nettstedet`,
  },
  {
    title: "3. Formål og lovgrunnlag",
    content: `Vi behandler opplysninger for å:\n- Oppfylle kjøpsavtaler (ordrebehandling, levering, kundeservice)\n- Overholde juridiske forpliktelser (bokføring, forbrukerrettigheter)\n- Gi kundeservice, håndtere reklamasjoner og returer\n- Sende nyhetsbrev og tilbud dersom du har gitt samtykke\n- Forbedre nettsiden og markedsføringen gjennom analyse (kun med samtykke)`,
  },
  {
    title: "4. Informasjonskapsler",
    content: `Vi bruker cookies for nødvendige funksjoner (handlekurv, innlogging), analyse og markedsføring. Samtykke til ikke-nødvendige cookies administreres via vårt cookie-banner. Du kan når som helst endre eller trekke tilbake samtykket ditt.`,
  },
  {
    title: "5. Bruk av tredjeparter og overføring av data",
    content: `Vi samarbeider med tredjepartsleverandører for betaling (f.eks. Vipps, Klarna), frakt (f.eks. PostNord, Bring) og markedsføring (f.eks. Google, Meta). Disse mottar kun nødvendige data for å utføre sine tjenester. Ved overføring utenfor EU/EØS benyttes EUs standardkontrakter (SCC).`,
  },
  {
    title: "6. Lagring og sletting",
    content: `- Ordre- og kjøpsdata lagres minimum 5 år i henhold til bokføringsloven.\n- Markedsføringssamtykke lagres maks 24 måneder etter siste aktivitet.\n- Supporthenvendelser slettes normalt innen 12 måneder.\n- Data slettes når formålet opphører, med mindre lov krever videre lagring.`,
  },
  {
    title: "7. Sikkerhet",
    content: `Vi beskytter dataene dine med SSL-kryptering, brannmurer, tilgangskontroll og regelmessige sikkerhetsrutiner. Kun autoriserte personer har tilgang til personopplysninger.`,
  },
  {
    title: "8. Dine rettigheter",
    content: `Du har rett til innsyn, retting, sletting, begrensning av behandling, dataportabilitet og å trekke tilbake samtykke.`,
  },
  {
    title: "9. Kontakt",
    content: `For spørsmål om personvern kontakt oss på support@sykkellageret.no.`,
  },
];

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mt-24">
          Personvernvilkår
        </h1>
        <p className="text-center text-gray-500 mt-3 text-sm">
          Sist oppdatert: 24. september 2025
        </p>

        {/* Accordion */}
        <div className="mt-10 space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {section.title}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
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

export default PrivacyPolicy;
