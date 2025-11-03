"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TechnicalSpecifications({ product }: { product: any }) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="mt-16 -mx-6 lg:-mx-8">
      <div className="bg-black w-full px-6 py-8 lg:px-8 lg:py-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 ">
          Tekniske spesifikasjoner
        </h2>
        <div className="w-full h-px bg-white mb-8"></div>

        <div className="w-full   space-y-0 items-start">
          {/* GENERAL INFORMATION Section */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleAccordion("general")}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white uppercase">GENERELL INFORMASJON</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "general" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "general" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Modell" value={product.technicalSpecifications?.general?.model} />
                  <SpecRow label="Rammetype" value={product.technicalSpecifications?.general?.frameType} />
                  <SpecRow label="Rammemateriale" value={product.technicalSpecifications?.general?.frameMaterial} />
                  <SpecRow label="Vekt" value={product.technicalSpecifications?.general?.weight} />
                  <SpecRow label="Maks last" value={product.technicalSpecifications?.general?.maxLoad} />
                  <SpecRow label="Anbefalt høyde" value={product.technicalSpecifications?.general?.recommendedHeight} />
                  <SpecRow label="Sammenleggbar" value={product.technicalSpecifications?.general?.foldable ? "Ja" : "Nei"} />
                  <SpecRow label="Dimensjoner (utfoldet)" value={product.technicalSpecifications?.general?.dimensions?.unfolded} />
                  {product.technicalSpecifications?.general?.dimensions?.folded !== "N/A (non-folding)" && (
                    <SpecRow label="Dimensjoner (sammenlagt)" value={product.technicalSpecifications?.general?.dimensions?.folded} />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* MOTOR & POWER Section */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleAccordion("motor")}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white uppercase">MOTOR & KRAFT</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "motor" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "motor" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Motortype" value={product.technicalSpecifications?.motor?.type} />
                  <SpecRow label="Kraft" value={product.technicalSpecifications?.motor?.power} />
                  <SpecRow label="Toppkraft" value={product.technicalSpecifications?.motor?.peakPower} />
                  {product.technicalSpecifications?.motor?.torque && (
                    <SpecRow label="Dreiemoment" value={product.technicalSpecifications?.motor?.torque} />
                  )}
                  <SpecRow label="Plassering" value={product.technicalSpecifications?.motor?.location} />
                  <SpecRow label="Dreiemoment sensor" value={product.technicalSpecifications?.motor?.torqueSensor ? "Ja" : "Nei"} />
                </div>
              </div>
            )}
          </div>

          {/* BATTERY & CHARGING Section */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleAccordion("battery")}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white uppercase">BATTERI & LADING</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "battery" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "battery" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Batteritype" value={product.technicalSpecifications?.battery?.type} />
                  <SpecRow label="Spenning" value={product.technicalSpecifications?.battery?.voltage} />
                  <SpecRow label="Kapasitet" value={product.technicalSpecifications?.battery?.capacity} />
                  <SpecRow label="Energi (Wh)" value={product.technicalSpecifications?.battery?.capacityWh} />
                  <SpecRow label="Avtakbart" value={product.technicalSpecifications?.battery?.removable ? "Ja" : "Nei"} />
                  <SpecRow label="Ladetid" value={product.technicalSpecifications?.battery?.chargingTime} />
                  <SpecRow label="Batterilevetid" value={product.technicalSpecifications?.battery?.batteryLife} />
                </div>
              </div>
            )}
          </div>

          {/* PERFORMANCE Section */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleAccordion("performance")}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white uppercase">YTELSE</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "performance" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "performance" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Toppfart" value={product.technicalSpecifications?.performance?.maxSpeed} />
                  <SpecRow label="Rekkevidde (ren elektrisk)" value={product.technicalSpecifications?.performance?.range?.pureElectric} />
                  <SpecRow label="Rekkevidde (pedalassistanse)" value={product.technicalSpecifications?.performance?.range?.pedalAssist} />
                  <SpecRow label="Rekkevidde (kombinert)" value={product.technicalSpecifications?.performance?.range?.combined} />
                  <SpecRow label="Stigningsevne" value={product.technicalSpecifications?.performance?.gradability} />
                  {product.technicalSpecifications?.performance?.turningRadius && (
                    <SpecRow label="Svingradius" value={product.technicalSpecifications?.performance?.turningRadius} />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* WHEELS & BRAKES Section */}
          <div>
            <button
              onClick={() => toggleAccordion("wheels")}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white uppercase">HJUL & BREMSER</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "wheels" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "wheels" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Hjulstørrelse" value={product.technicalSpecifications?.wheels?.size} />
                  <SpecRow label="Dekktype" value={product.technicalSpecifications?.wheels?.tireType} />
                  <SpecRow label="Dekkstørrelse" value={product.technicalSpecifications?.wheels?.tireSize} />
                  {product.technicalSpecifications?.wheels?.rimMaterial && (
                    <SpecRow label="Felgmateriale" value={product.technicalSpecifications?.wheels?.rimMaterial} />
                  )}
                  <SpecRow label="Bremsetype" value={product.technicalSpecifications?.brakes?.type} />
                  <SpecRow label="Frontbremse" value={product.technicalSpecifications?.brakes?.front} />
                  <SpecRow label="Bakbremse" value={product.technicalSpecifications?.brakes?.rear} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for specification rows
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-1">
      <span className="text-gray-300 mr-4 min-w-0 flex-shrink">{label}</span>
      <span className="text-white text-right font-medium">{value}</span>
    </div>
  );
}