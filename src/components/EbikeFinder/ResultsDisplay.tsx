// components/EbikeFinder/ResultsDisplay.tsx
'use client';

import { useState } from 'react';
import { type BikeWithScore, type UserPreferences } from './calculatorLogic';
import Image from 'next/image';
import Link from 'next/link';
import { AddToCartButton } from '../AddToCartButton';
import { PRODUCTS_DATA } from '@/lib/productData';

interface ResultsDisplayProps {
  recommendations: BikeWithScore[];
  userPreferences: UserPreferences;
  onReset: () => void;
}

export default function ResultsDisplay({ 
  recommendations, 
  userPreferences, 
  onReset 
}: ResultsDisplayProps) {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const toggleCompare = (bikeId: string | number) => {
    const id = String(bikeId);
    setSelectedForCompare(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : prev.length < 3 
          ? [...prev, id]
          : prev
    );
  };

  const topRecommendation = recommendations[0];
  const alternatives = recommendations.slice(1, 4);

  if (!topRecommendation) {
    return (
      <div className="text-center py-12 bg-gray-800 rounded-2xl">
        <div className="text-6xl mb-4">😕</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Ingen perfekt match funnet
        </h3>
        <p className="text-gray-400 mb-8">
          Vi kunne ikke finne el-sykler som matcher alle dine kriterier. Prøv å justere preferansene dine.
        </p>
        <button
          onClick={onReset}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Prøv igjen
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 bg-white">
      {/* User Summary */}
      <div className="bg-white rounded-2xl p-6 ">
        <h3 className="text-lg font-semibold text-black mb-3">Din profil</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-900">Høyde:</span>
            <span className="ml-2 font-medium text-gray-700">{userPreferences.height} cm</span>
          </div>
          <div>
            <span className="text-gray-900">Terreng:</span>
            <span className="ml-2 font-medium text-gray-700">{userPreferences.terrain}</span>
          </div>
          <div>
            <span className="text-gray-900">Avstand:</span>
            <span className="ml-2 font-medium text-gray-700">{userPreferences.distancePerTrip} km</span>
          </div>
          <div>
            <span className="text-gray-900">Budsjett:</span>
            <span className="ml-2 font-medium text-gray-700">{userPreferences.budget.toLocaleString()} NOK</span>
          </div>
        </div>
      </div>

      {/* Top Recommendation */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-yellow-500">
        <div className="bg-yellow-500 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block bg-white text-yellow-500 px-3 py-1 rounded-full text-sm font-bold mb-2">
                BESTE MATCH
              </span>
              <h3 className="text-2xl font-bold text-black">
                {topRecommendation.name}
              </h3>
              <p className="text-gray-600">{topRecommendation.brand}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-black">
                {topRecommendation.matchScore}%
              </div>
              <div className="text-gray-600 text-sm">Match</div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              {topRecommendation.image ? (
                <div className="relative h-80 bg-white rounded-lg overflow-hidden">
                  <Image 
                    src={topRecommendation.image} 
                    alt={topRecommendation.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🚴</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-black mb-3">Hvorfor dette er perfekt for deg:</h4>
                <ul className="space-y-2">
                  {topRecommendation.matchReasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-300">
                {topRecommendation.motor_watt && (
                  <div>
                    <div className="text-sm text-gray-600">Motoreffekt</div>
                    <div className="font-semibold text-black">{topRecommendation.motor_watt}W</div>
                  </div>
                )}
                {topRecommendation.range_km && (
                  <div>
                    <div className="text-sm text-gray-600">Rekkevidde</div>
                    <div className="font-semibold text-black">{topRecommendation.range_km} km</div>
                  </div>
                )}
                {topRecommendation.weight_kg && (
                  <div>
                    <div className="text-sm text-gray-600">Vekt</div>
                    <div className="font-semibold text-black">{topRecommendation.weight_kg} kg</div>
                  </div>
                )}
                {topRecommendation.battery_Ah && (
                  <div>
                    <div className="text-sm text-gray-600">Batteri</div>
                    <div className="font-semibold text-black">{topRecommendation.battery_Ah} Ah</div>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <div className="text-3xl font-bold text-black mb-4">
                  {topRecommendation.price.toLocaleString()} NOK
                </div>
                 <div className="flex gap-3">
                  <Link 
                    href={topRecommendation.link || `/products/${topRecommendation.id}`}
                    className="flex-1"
                  >
                    <button className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
                      Se detaljer
                    </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Options */}
      {alternatives.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-black mb-6">
            Andre gode alternativer
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {alternatives.map((bike) => (
              <div key={bike.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                <div className="relative">
                  {bike.image ? (
                    <div className="relative h-56 bg-white">
                      <Image 
                        src={bike.image} 
                        alt={bike.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-5xl">🚴</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-blue-600 border border-gray-300">
                    {bike.matchScore}%
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-lg text-black mb-1">{bike.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{bike.brand}</p>

                  <div className="space-y-2 mb-4">
                    {bike.matchReasons.slice(0, 2).map((reason, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <span className="text-green-600 mr-1 text-xs">✓</span>
                        <span className="text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    {bike.range_km && (
                      <div className="text-sm">
                        <span className="text-gray-600">Rekkevidde:</span>
                        <span className="ml-1 font-medium text-black">{bike.range_km}km</span>
                      </div>
                    )}
                    {bike.motor_watt && (
                      <div className="text-sm">
                        <span className="text-gray-600">Motor:</span>
                        <span className="ml-1 font-medium text-black">{bike.motor_watt}W</span>
                      </div>
                    )}
                  </div>

                  <div className="text-2xl font-bold text-black mb-4">
                    {bike.price.toLocaleString()} NOK
                  </div>

                  <div className="flex gap-2">
                    <Link 
                      href={bike.link || `/products/${bike.id}`}
                      className="flex-1"
                    >
                      <button className="w-full bg-gray-100 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300">
                        Se
                      </button>
                    </Link>
                   <AddToCartButton product={bike} className='border rounded-lg text-white'/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onReset}
          className="px-8 py-3 border-2 border-gray-300 bg-white rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Start på nytt
        </button>
        {selectedForCompare.length >= 2 && (
          <button
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Sammenlign valgte ({selectedForCompare.length})
          </button>
        )}
      </div>
    </div>
  );
}