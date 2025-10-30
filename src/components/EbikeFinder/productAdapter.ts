// components/EbikeFinder/productAdapter.ts
// This file converts your ProductCard format to the calculator's Bike format

import { type Bike } from './calculatorLogic';

// Import your ProductCard interface
export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string[];
  description: string;
  technicalSpecifications: {
    general: {
      weight: string;
      frameType: string;
      foldable: boolean;
    };
    motor: {
      type: string;
      power: string;
      location: string;
    };
    battery: {
      capacity: string;
    };
    performance: {
      range: {
        pureElectric: string;
        pedalAssist: string;
        combined: string;
      };
    };
    comfort: {
      suspension: {
        front: boolean;
        rear: boolean;
      };
    };
  };
}

export function adaptProductsToBikes(products: ProductCard[]): Bike[] {
  return products.map(product => ({
    id: product.id,
    name: product.name,
    brand: extractBrand(product.name),
    price: product.price,
    range_km: parseRangeKm(product.technicalSpecifications?.performance?.range),
    motor_watt: parseMotorWatt(product.technicalSpecifications?.motor?.power),
    motor_position: product.technicalSpecifications?.motor?.location || 'Mid-drive',
    battery_Ah: parseBatteryAh(product.technicalSpecifications?.battery?.capacity),
    weight_kg: parseWeight(product.technicalSpecifications?.general?.weight),
    terrain: mapCategoryToTerrain(product.category),
    usage_type: mapCategoryToUsage(product.category),
    comfort_level: determineComfortLevel(product),
    frame_height_cm: estimateFrameHeight(product.technicalSpecifications?.general?.frameType),
    tire_width: 2.0,
    image: product.image,
    description: product.description,
    link: `/products/${product.slug}`,
  }));
}

function extractBrand(name: string): string {
  // Extract first word as brand, or you can maintain a separate brand field
  return name.split(' ')[0] || 'Unknown';
}

function parseRangeKm(range: any): number {
  if (!range) return 50;
  
  // Try to get the best range value
  const rangeStr = range.pedalAssist || range.combined || range.pureElectric || '50km';
  
  // Extract numbers from string like "80-100km" or "80km"
  const matches = rangeStr.match(/(\d+)/g);
  if (!matches) return 50;
  
  // If range like "80-100km", take the average
  if (matches.length > 1) {
    return Math.round((parseInt(matches[0]) + parseInt(matches[1])) / 2);
  }
  
  return parseInt(matches[0]);
}

function parseMotorWatt(power: string | undefined): number {
  if (!power) return 350;
  
  // Extract watt from strings like "500W" or "500 Watt"
  const match = power.match(/(\d+)/);
  return match ? parseInt(match[1]) : 350;
}

function parseBatteryAh(capacity: string | undefined): number {
  if (!capacity) return 10;
  
  // Extract Ah from strings like "13.5Ah" or "13.5 Ah"
  const match = capacity.match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 10;
}

function parseWeight(weight: string | undefined): number {
  if (!weight) return 22;
  
  // Extract kg from strings like "22kg" or "22 kg"
  const match = weight.match(/(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 22;
}

function estimateFrameHeight(frameType: string | undefined): number {
  if (!frameType) return 54;
  
  const lower = frameType.toLowerCase();
  
  // Size mappings
  if (lower.includes('xs') || lower.includes('extra small')) return 42;
  if (lower.includes('small') || lower.includes('compact')) return 48;
  if (lower.includes('medium') || lower.includes('mid')) return 54;
  if (lower.includes('large') || lower.includes('xl')) return 58;
  if (lower.includes('xxl') || lower.includes('extra large')) return 62;
  
  return 54; // Default medium
}

function mapCategoryToTerrain(categories: string[]): string[] {
  const terrainMap: Record<string, string[]> = {
    'mountain': ['Mountain', 'Hilly', 'Off-road'],
    'city': ['City', 'Flat'],
    'urban': ['City', 'Flat'],
    'commuter': ['City', 'Flat', 'Small hills'],
    'commuting': ['City', 'Flat', 'Small hills'],
    'folding': ['City', 'Flat'],
    'cargo': ['City', 'Flat'],
    'fat': ['Off-road', 'Mountain'],
    'fat-tire': ['Off-road', 'Mountain', 'Hilly'],
    'road': ['Flat', 'Small hills'],
    'hybrid': ['City', 'Small hills', 'Hilly'],
    'touring': ['Small hills', 'Hilly'],
    'trail': ['Hilly', 'Mountain', 'Off-road'],
    'off-road': ['Mountain', 'Hilly', 'Off-road'],
  };

  const terrains = new Set<string>();
  
  categories.forEach(cat => {
    const catLower = cat.toLowerCase();
    Object.keys(terrainMap).forEach(key => {
      if (catLower.includes(key)) {
        terrainMap[key].forEach(t => terrains.add(t));
      }
    });
  });

  // Default if no match
  return terrains.size > 0 ? Array.from(terrains) : ['City', 'Flat'];
}

function mapCategoryToUsage(categories: string[]): string[] {
  const usageMap: Record<string, string[]> = {
    'mountain': ['Off-road', 'Sport'],
    'city': ['City', 'Commuting'],
    'urban': ['City', 'Commuting'],
    'commuter': ['Commuting'],
    'commuting': ['Commuting'],
    'cargo': ['Family', 'Touring'],
    'touring': ['Touring'],
    'sport': ['Sport'],
    'racing': ['Sport'],
    'leisure': ['City'],
    'family': ['Family'],
    'folding': ['Commuting', 'City'],
  };

  const usages = new Set<string>();
  
  categories.forEach(cat => {
    const catLower = cat.toLowerCase();
    Object.keys(usageMap).forEach(key => {
      if (catLower.includes(key)) {
        usageMap[key].forEach(u => usages.add(u));
      }
    });
  });

  // Default if no match
  return usages.size > 0 ? Array.from(usages) : ['City', 'Commuting'];
}

function determineComfortLevel(product: ProductCard): string {
  const suspension = product.technicalSpecifications?.comfort?.suspension;
  
  // Check for full suspension
  if (suspension?.front && suspension?.rear) {
    return 'Extra comfort';
  }
  
  // Check for front suspension only
  if (suspension?.front) {
    return 'Normal';
  }
  
  // Check category for sport bikes
  const isSport = product.category.some(cat => {
    const lower = cat.toLowerCase();
    return lower.includes('sport') || 
           lower.includes('mountain') || 
           lower.includes('racing') ||
           lower.includes('road');
  });
  
  return isSport ? 'Sporty' : 'Normal';
}