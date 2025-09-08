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
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          Technical Specifications
        </h2>
        <div className="w-full h-px bg-white mb-8"></div>

        <div className="w-full max-w-6xl mx-auto space-y-0">
          {/* GENERAL INFORMATION Section */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleAccordion("general")}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white uppercase">GENERAL INFORMATION</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "general" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "general" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Model" value={product.technicalSpecifications?.general?.model} />
                  <SpecRow label="Frame Type" value={product.technicalSpecifications?.general?.frameType} />
                  <SpecRow label="Frame Material" value={product.technicalSpecifications?.general?.frameMaterial} />
                  <SpecRow label="Weight" value={product.technicalSpecifications?.general?.weight} />
                  <SpecRow label="Max Load" value={product.technicalSpecifications?.general?.maxLoad} />
                  <SpecRow label="Recommended Height" value={product.technicalSpecifications?.general?.recommendedHeight} />
                  <SpecRow label="Foldable" value={product.technicalSpecifications?.general?.foldable ? "Yes" : "No"} />
                  <SpecRow label="Dimensions (Unfolded)" value={product.technicalSpecifications?.general?.dimensions?.unfolded} />
                  {product.technicalSpecifications?.general?.dimensions?.folded !== "N/A (non-folding)" && (
                    <SpecRow label="Dimensions (Folded)" value={product.technicalSpecifications?.general?.dimensions?.folded} />
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
              <span className="text-lg font-bold text-white uppercase">MOTOR & POWER</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "motor" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "motor" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Motor Type" value={product.technicalSpecifications?.motor?.type} />
                  <SpecRow label="Power" value={product.technicalSpecifications?.motor?.power} />
                  <SpecRow label="Peak Power" value={product.technicalSpecifications?.motor?.peakPower} />
                  {product.technicalSpecifications?.motor?.torque && (
                    <SpecRow label="Torque" value={product.technicalSpecifications?.motor?.torque} />
                  )}
                  <SpecRow label="Location" value={product.technicalSpecifications?.motor?.location} />
                  <SpecRow label="Torque Sensor" value={product.technicalSpecifications?.motor?.torqueSensor ? "Yes" : "No"} />
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
              <span className="text-lg font-bold text-white uppercase">BATTERY & CHARGING</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "battery" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "battery" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Battery Type" value={product.technicalSpecifications?.battery?.type} />
                  <SpecRow label="Voltage" value={product.technicalSpecifications?.battery?.voltage} />
                  <SpecRow label="Capacity" value={product.technicalSpecifications?.battery?.capacity} />
                  <SpecRow label="Energy (Wh)" value={product.technicalSpecifications?.battery?.capacityWh} />
                  <SpecRow label="Removable" value={product.technicalSpecifications?.battery?.removable ? "Yes" : "No"} />
                  <SpecRow label="Charging Time" value={product.technicalSpecifications?.battery?.chargingTime} />
                  <SpecRow label="Battery Life" value={product.technicalSpecifications?.battery?.batteryLife} />
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
              <span className="text-lg font-bold text-white uppercase">PERFORMANCE</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "performance" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "performance" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Max Speed" value={product.technicalSpecifications?.performance?.maxSpeed} />
                  <SpecRow label="Range (Pure Electric)" value={product.technicalSpecifications?.performance?.range?.pureElectric} />
                  <SpecRow label="Range (Pedal Assist)" value={product.technicalSpecifications?.performance?.range?.pedalAssist} />
                  <SpecRow label="Range (Combined)" value={product.technicalSpecifications?.performance?.range?.combined} />
                  <SpecRow label="Gradability" value={product.technicalSpecifications?.performance?.gradability} />
                  {product.technicalSpecifications?.performance?.turningRadius && (
                    <SpecRow label="Turning Radius" value={product.technicalSpecifications?.performance?.turningRadius} />
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
              <span className="text-lg font-bold text-white uppercase">WHEELS & BRAKES</span>
              <ChevronDown 
                className={`text-white transition-transform duration-200 ${
                  openAccordion === "wheels" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openAccordion === "wheels" && (
              <div className="pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <SpecRow label="Wheel Size" value={product.technicalSpecifications?.wheels?.size} />
                  <SpecRow label="Tire Type" value={product.technicalSpecifications?.wheels?.tireType} />
                  <SpecRow label="Tire Size" value={product.technicalSpecifications?.wheels?.tireSize} />
                  {product.technicalSpecifications?.wheels?.rimMaterial && (
                    <SpecRow label="Rim Material" value={product.technicalSpecifications?.wheels?.rimMaterial} />
                  )}
                  <SpecRow label="Brake Type" value={product.technicalSpecifications?.brakes?.type} />
                  <SpecRow label="Front Brake" value={product.technicalSpecifications?.brakes?.front} />
                  <SpecRow label="Rear Brake" value={product.technicalSpecifications?.brakes?.rear} />
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