// components/EbikeFinder/QuestionnaireForm.tsx
'use client';

import { useState } from 'react';
import { type UserPreferences } from './calculatorLogic';

// Add custom CSS for range sliders
const rangeSliderStyles = `
  .range-slider::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(234 179 8);
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .range-slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(234 179 8);
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .range-slider::-webkit-slider-track {
    height: 8px;
    background: linear-gradient(to right, rgb(234 179 8) 0%, rgb(234 179 8) var(--value), #e5e7eb var(--value), #e5e7eb 100%);
    border-radius: 4px;
  }
  
  .range-slider::-moz-range-track {
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
  }
  
  .range-slider::-moz-range-progress {
    height: 8px;
    background: rgb(234 179 8);
    border-radius: 4px;
  }
`;

interface QuestionnaireFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export default function QuestionnaireForm({ onSubmit }: QuestionnaireFormProps) {
  const [formData, setFormData] = useState<Partial<UserPreferences>>({
    gender: 'male',
    age: 30,
    height: 170,
    weight: 70,
    usageType: [],
    terrain: 'flat',
    distancePerTrip: '5-15',
    rangeRequirement: 50,
    budget: 25000,
    weightPreference: 'medium',
    motorPreference: 'Not sure',
    comfortLevel: 'normal',
    extraNeeds: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleChange = (field: keyof UserPreferences, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: 'usageType' | 'extraNeeds', value: string) => {
    setFormData(prev => {
      const current = prev[field] as string[] || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPage === totalPages && isFormValid()) {
      onSubmit(formData as UserPreferences);
    }
  };

  const isFormValid = () => {
    return formData.usageType && formData.usageType.length > 0;
  };

  const nextPage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rangeSliderStyles }} />
      <form onSubmit={handleSubmit} className="bg-gray-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto ">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-black">Step {currentPage} of {totalPages}</span>
          <span className="text-sm font-medium text-black">{Math.round((currentPage / totalPages) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>

      {/* Page 1: Personal Info */}
      {currentPage === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-black mb-6">Tell us about yourself</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select 
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input 
                type="number"
                value={formData.age}
                onChange={(e) => handleChange('age', Number(e.target.value))}
                className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="16"
                max="100"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
              <input 
                type="number"
                value={formData.height}
                onChange={(e) => handleChange('height', Number(e.target.value))}
                className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="140"
                max="220"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
              <input 
                type="number"
                value={formData.weight}
                onChange={(e) => handleChange('weight', Number(e.target.value))}
                className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="40"
                max="200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Budget (NOK)</label>
            <input 
              type="range"
              value={formData.budget}
              onChange={(e) => handleChange('budget', Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
              min="10000"
              max="60000"
              step="1000"
            />
            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span>10,000 NOK</span>
              <span className="font-semibold text-yellow-500">{formData.budget?.toLocaleString()} NOK</span>
              <span>60,000 NOK</span>
            </div>
          </div>
        </div>
      )}

      {/* Page 2: Usage & Terrain */}
      {currentPage === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-black mb-6">How will you use it?</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Usage Type (Select all that apply)</label>
            <div className="grid grid-cols-2 gap-3">
              {['Commuting', 'Off-road', 'City', 'Touring', 'Family', 'Sport'].map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleMultiSelect('usageType', type)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    formData.usageType?.includes(type)
                      ? 'border-yellow-500 bg-yellow-500 text-white font-medium'
                      : 'border-gray-600 bg-white text-gray-700 hover:border-gray-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Terrain</label>
            <div className="grid grid-cols-2 gap-3">
              {['Flat', 'Small hills', 'Hilly', 'Mountain'].map(terrain => (
                <button
                  key={terrain}
                  type="button"
                  onClick={() => handleChange('terrain', terrain)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    formData.terrain === terrain
                      ? 'border-yellow-500 bg-yellow-500 text-white font-medium'
                      : 'border-gray-600 bg-white text-gray-700 hover:border-gray-500'
                  }`}
                >
                  {terrain}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Distance per trip</label>
            <select 
              value={formData.distancePerTrip}
              onChange={(e) => handleChange('distancePerTrip', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="<5">Less than 5 km</option>
              <option value="5-15">5-15 km</option>
              <option value="15-30">15-30 km</option>
              <option value="30+">30+ km</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Minimum Range Required (km)</label>
            <input 
              type="range"
              value={formData.rangeRequirement}
              onChange={(e) => handleChange('rangeRequirement', Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
              min="20"
              max="150"
              step="5"
            />
            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span>20 km</span>
              <span className="font-semibold text-yellow-500">{formData.rangeRequirement} km</span>
              <span>150 km</span>
            </div>
          </div>
        </div>
      )}

      {/* Page 3: Preferences */}
      {currentPage === 3 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-black mb-6">Final preferences</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Comfort Level</label>
            <div className="grid grid-cols-3 gap-3 sm:text-sm md:text-base ">
              {['Sporty', 'Normal', 'Extra comfort'].map(comfort => (
                <button
                  key={comfort}
                  type="button"
                  onClick={() => handleChange('comfortLevel', comfort)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    formData.comfortLevel === comfort
                      ? 'border-yellow-500 bg-yellow-500 text-white font-medium'
                      : 'border-gray-600 bg-white text-gray-700 hover:border-gray-500'
                  }`}
                >
                  {comfort}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Weight Preference</label>
            <div className="grid grid-cols-3 gap-3">
              {['Light', 'Medium', 'Heavy'].map(weight => (
                <button
                  key={weight}
                  type="button"
                  onClick={() => handleChange('weightPreference', weight)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    formData.weightPreference === weight.toLowerCase()
                      ? 'border-yellow-500 bg-yellow-500 text-white font-medium'
                      : 'border-gray-600 bg-white text-gray-700 hover:border-gray-500'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Motor Preference</label>
            <select 
              value={formData.motorPreference}
              onChange={(e) => handleChange('motorPreference', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="Not sure">Not sure / No preference</option>
              <option value="Front hub">Front hub</option>
              <option value="Rear hub">Rear hub</option>
              <option value="Mid-drive">Mid-drive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Extra Features (Optional)</label>
            <div className="grid grid-cols-2 gap-3">
              {['Luggage rack', 'Child seat', 'Foldable', 'Off-road tires'].map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => handleMultiSelect('extraNeeds', feature)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    formData.extraNeeds?.includes(feature)
                      ? 'border-yellow-500 bg-yellow-500 text-white font-medium'
                      : 'border-gray-600 bg-white text-gray-700 hover:border-gray-500'
                  }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-300">
        {currentPage > 1 && (
          <button
            type="button"
            onClick={prevPage}
            className="sm:px-2 md:px-6 py-3 border-2 border-yellow-500 bg-yellow-500 rounded-lg font-medium text-white hover:bg-yellow-600 transition-colors"
          >
            ← Previous
          </button>
        )}
        
        {currentPage < totalPages ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
            className="ml-auto px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            disabled={!isFormValid()}
            className="ml-auto sm:px-2 md:px-8 py-3 bg-yellow-500 text-white rounded-lg sm:font-medium hover:bg-yellow-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Find My E-Bike 
          </button>
        )}
      </div>
    </form>
    </>
  );
}