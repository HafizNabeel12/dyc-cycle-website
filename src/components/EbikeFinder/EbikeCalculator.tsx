// components/EbikeFinder/EbikeCalculator.tsx
'use client';

import { useState } from 'react';
import { calculateBikeMatch, type UserPreferences, type BikeWithScore } from './calculatorLogic';
import { adaptProductsToBikes } from './productAdapter';
import QuestionnaireForm from './QuestionnaireForm';
import ResultsDisplay from './ResultsDisplay';
import { ProductCard } from '@/lib/productData';

// Import your product data - Update this path to match your project structure
// import { products } from '@/lib/products';

interface EbikeCalculatorProps {
  products?: ProductCard[]; // Your ProductCard[] type
}

export default function EbikeCalculator({ products = [] }: EbikeCalculatorProps) {
  const [currentStep, setCurrentStep] = useState<'form' | 'results'>('form');
  const [recommendations, setRecommendations] = useState<BikeWithScore[]>([]);
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  const handleSubmit = (preferences: UserPreferences) => {
    // Convert your ProductCard format to calculator's Bike format
    const adaptedProducts = adaptProductsToBikes(products);
    
    // Calculate matches
    const results = calculateBikeMatch(preferences, adaptedProducts);
    
    setRecommendations(results);
    setUserPreferences(preferences);
    setCurrentStep('results');
  };

  const handleReset = () => {
    setCurrentStep('form');
    setRecommendations([]);
    setUserPreferences(null);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Find Your Perfect E-Bike
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few questions and we&apos;ll recommend the best e-bikes tailored to your needs
          </p>
        </div>

        {currentStep === 'form' ? (
          <QuestionnaireForm onSubmit={handleSubmit} />
        ) : (
          <ResultsDisplay
            recommendations={recommendations}
            userPreferences={userPreferences!}
            onReset={handleReset}
          />
        )}
      </div>
    </section>
  );
}