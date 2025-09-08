// src/lib/productData.ts

// src/lib/productData.ts
export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  originalPrice: number;
  price: number;
  discount: string;
  image: string;
  images: string[];
  features: string[];
  badge?: string;
  category: string[];
  rating: number;
  reviewCount: number;
  specifications: {
    motor: string;
    battery: string;
    range: string;
    speed: string;
    weight: string;
    wheelSize: string;
    foldable: boolean;
    brakes?: string;
    frame?: string;
    drivetrain?: string;
  };
  // NEW: Comprehensive technical specifications
  technicalSpecifications: {
    general: {
      model: string;
      frameType: string;
      frameMaterial: string;
      foldable: boolean;
      dimensions: {
        unfolded: string;
        folded: string;
      };
      weight: string;
      maxLoad: string;
      recommendedHeight: string;
    };
    motor: {
      type: string;
      power: string;
      peakPower: string;
      torque?: string;
      location: string;
      torqueSensor?: boolean;
    };
    battery: {
      type: string;
      voltage: string;
      capacity: string;
      capacityWh: string;
      removable: boolean;
      chargingTime: string;
      batteryLife: string;
    };
    performance: {
      maxSpeed: string;
      range: {
        pureElectric: string;
        pedalAssist: string;
        combined: string;
      };
      gradability: string;
      turningRadius?: string;
    };
    wheels: {
      size: string;
      tireType: string;
      tireSize: string;
      rimMaterial?: string;
    };
    brakes: {
      front: string;
      rear: string;
      type: string;
    };
    transmission: {
      type: string;
      gears?: string;
      shifter?: string;
    };
    electrical: {
      display: string;
      lights: {
        front: boolean;
        rear: boolean;
        type?: string;
      };
      horn: boolean;
      throttle: boolean;
      assistLevels: string;
    };
    comfort: {
      suspension: {
        front: boolean;
        rear: boolean;
        type?: string;
      };
      seat: {
        type: string;
        adjustable: boolean;
        material?: string;
      };
      handlebar: {
        type: string;
        adjustable: boolean;
        material?: string;
      };
    };
    safety: {
      reflectors: boolean;
      bell: boolean;
      waterResistance: string;
      certification?: string[];
    };
    connectivity: {
      app: boolean;
      gps?: boolean;
      bluetooth?: boolean;
      usb?: boolean;
    };
    accessories: {
      kickstand: boolean;
      mudguards: boolean;
      rack: boolean;
      basket: boolean;
      bottleHolder: boolean;
    };
  };
  description: string;
  keyFeatures: string[];
  availableColors: string[];
  availableSizes: string[];
  whatsInTheBox: string[];
}

export const PRODUCTS_DATA: ProductCard[] = [
  {
    id: "1",
    name: "DYU D3F",
    slug: "dyu-d3f-mini-folding-electric-bike",
    originalPrice: 899,
    price: 449,
    discount: "50% OFF",
    image: "/images/d3f/d3f-main.png",
    images: [
      "/images/d3f/d3f-main.png",
      "/images/d3f/D3F-1.png",
      "/images/d3f/D3F-2.png",
      "/images/d3f/D3F-3.png",
      "/images/d3f/D3F-4.png",
      "/images/d3f/D3F-5.png",
      "/images/d3f/D3F-6.png",
      "/images/d3f/D3F-7.png",
      "/images/d3f/D3F-side.png",
    ],
    features: ["Ultra-compact 14\" design", "Quick fold", "Lightweight"],
    badge: "COMPACT KING",
    category: ["folding-bike", "commuter-ebike", "lightweight"],
    rating: 4.5,
    reviewCount: 178,
    specifications: {
      motor: "250W Rear Hub Motor",
      battery: "36V 10Ah Lithium-ion",
      range: "37-45 miles",
      speed: "15.5 mph",
      weight: "35 lbs",
      wheelSize: "14 inch",
      foldable: true,
      brakes: "Disc brakes",
      frame: "Aluminum alloy"
    },
    technicalSpecifications: {
      general: {
        model: "DYU D3F",
        frameType: "Mini folding frame",
        frameMaterial: "Aluminum alloy",
        foldable: true,
        dimensions: {
          unfolded: "110×52×91-106cm",
          folded: "110×35×52cm"
        },
        weight: "16kg (35.3 lbs)",
        maxLoad: "120kg (264 lbs)",
        recommendedHeight: "150-180cm"
      },
      motor: {
        type: "Brushless hub motor",
        power: "250W",
        peakPower: "350W",
        location: "Rear wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "10Ah",
        capacityWh: "360Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25km/h (15.5mph)",
        range: {
          pureElectric: "35km (22 miles)",
          pedalAssist: "60km (37 miles)",
          combined: "45-60km (28-37 miles)"
        },
        gradability: "15°",
        turningRadius: "1.2m"
      },
      wheels: {
        size: "14 inch",
        tireType: "Pneumatic",
        tireSize: "14×2.125",
        rimMaterial: "Aluminum alloy"
      },
      brakes: {
        front: "Mechanical disc brake",
        rear: "Mechanical disc brake",
        type: "Dual disc brakes"
      },
      transmission: {
        type: "Single speed",
        gears: "1"
      },
      electrical: {
        display: "LED battery indicator",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false
        },
        seat: {
          type: "Comfort saddle",
          adjustable: true,
          material: "PU leather"
        },
        handlebar: {
          type: "Folding handlebar",
          adjustable: true,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "UL"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: false
      }
    },
    description:
      "The DYU D3F is a compact, lightweight electric bike perfect for short commutes and easy storage. Small 14\" wheels and a quick fold make it extremely portable.",
    keyFeatures: [
      "Ultra-compact 14-inch design",
      "Foldable for easy storage",
      "Perfect for short commutes",
      "Lightweight and portable",
      "Budget-friendly option"
    ],
    availableColors: ["Matte Black", "White"],
    availableSizes: ["One-size (folding)"],
    whatsInTheBox: [
      "DYU D3F E-bike",
      "Charger",
      "User manual",
      "Tool kit",
      "Front light (installed)"
    ]
  },
  {
    id: "2",
    name: "DYU T1",
    slug: "dyu-t1-torque-sensor-electric-bike",
    originalPrice: 1299,
    price: 649,
    discount: "50% OFF",
    image: "/images/T1/t1-main.png",
    images: [
      "/images/T1/t1-main.png",
      "/images/T1/t1-1.png",
      "/images/T1/t1-2.png",
      "/images/T1/t1-3.png",
      "/images/T1/t1-4.png",
      "/images/T1/t1-5.png",
      "/images/T1/t1-6.png",
      "/images/T1/t1-7.png"
    ],
    features: ["Torque sensor", "Removable battery", "Shimano gears"],
    badge: "SMART CHOICE",
    category: ["folding-bike", "commuter-ebike", "step-through", "lightweight"],
    rating: 4.7,
    reviewCount: 156,
    specifications: {
      motor: "250W Mid-Drive with Torque Sensor",
      battery: "36V 12.5Ah removable",
      range: "35-50 miles",
      speed: "20 mph",
      weight: "42 lbs",
      wheelSize: "20 inch",
      foldable: true,
      brakes: "Disc brakes",
      frame: "Magnesium alloy",
      drivetrain: "Shimano derailleur"
    },
    technicalSpecifications: {
      general: {
        model: "DYU T1",
        frameType: "Step-through folding",
        frameMaterial: "Magnesium alloy",
        foldable: true,
        dimensions: {
          unfolded: "152×60×108cm",
          folded: "80×60×70cm"
        },
        weight: "19kg (42 lbs)",
        maxLoad: "150kg (330 lbs)",
        recommendedHeight: "155-195cm"
      },
      motor: {
        type: "Mid-drive motor",
        power: "250W",
        peakPower: "500W",
        torque: "80Nm",
        location: "Bottom bracket",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "12.5Ah",
        capacityWh: "450Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "32km/h (20mph)",
        range: {
          pureElectric: "45km (28 miles)",
          pedalAssist: "80km (50 miles)",
          combined: "60-80km (37-50 miles)"
        },
        gradability: "25°",
        turningRadius: "1.8m"
      },
      wheels: {
        size: "20 inch",
        tireType: "Puncture-resistant",
        tireSize: "20×1.95",
        rimMaterial: "Aluminum alloy"
      },
      brakes: {
        front: "Hydraulic disc brake",
        rear: "Hydraulic disc brake",
        type: "Dual hydraulic disc"
      },
      transmission: {
        type: "Shimano derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LCD display",
        lights: {
          front: true,
          rear: true,
          type: "Integrated LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Front fork suspension"
        },
        seat: {
          type: "Ergonomic saddle",
          adjustable: true,
          material: "Memory foam"
        },
        handlebar: {
          type: "Adjustable stem",
          adjustable: true,
          material: "Aluminum alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX5",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: true
      }
    },
    description:
      "DYU T1 features a torque sensor for natural pedal assist and a premium lightweight frame — ideal if you want a refined e-bike riding experience.",
    keyFeatures: [
      "Torque sensor for natural pedal assist",
      "Removable battery",
      "Magnesium alloy frame",
      "Shimano derailleur system",
      "Smart features"
    ],
    availableColors: ["Glossy Black", "Glossy White", "Deep Ocean Green"],
    availableSizes: ["20 inch frame"],
    whatsInTheBox: [
      "DYU T1 E-bike",
      "Removable battery",
      "Charger",
      "Tool kit",
      "User manual"
    ]
  },
  {
    id: "3",
    name: "DYU C1",
    slug: "dyu-c1-26-inch-city-electric-bike",
    originalPrice: 1099,
    price: 599,
    discount: "45% OFF",
    image: "/images/C1/c1-main.png",
    images: [
      "/images/C1/c1-main.png",
      "/images/C1/c1-1.png",
      "/images/C1/c1-2.png",
      "/images/C1/c1-3.png",
      "/images/C1/c1-4.png",
      "/images/C1/c1-5.png",
      "/images/C1/c1-6.png",
      "/images/C1/c1-7.png"
    ],
    features: ["26\" wheels", "Front suspension", "Comfort geometry"],
    badge: "CITY CRUISER",
    category: ["commuter-ebike", "step-through"],
    rating: 4.6,
    reviewCount: 134,
    specifications: {
      motor: "250W / 500W peak hub motor",
      battery: "36V 10Ah detachable",
      range: "37-60 miles",
      speed: "25 mph",
      weight: "55 lbs",
      wheelSize: "26 inch",
      foldable: true,
      brakes: "Disc brakes",
      frame: "Aluminum alloy"
    },
    technicalSpecifications: {
      general: {
        model: "DYU C1",
        frameType: "City bike step-through",
        frameMaterial: "Aluminum alloy",
        foldable: true,
        dimensions: {
          unfolded: "180×65×110cm",
          folded: "90×65×85cm"
        },
        weight: "25kg (55 lbs)",
        maxLoad: "150kg (330 lbs)",
        recommendedHeight: "160-190cm"
      },
      motor: {
        type: "Rear hub motor",
        power: "350W",
        peakPower: "500W",
        location: "Rear wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "10Ah",
        capacityWh: "360Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "40km/h (25mph)",
        range: {
          pureElectric: "60km (37 miles)",
          pedalAssist: "100km (62 miles)",
          combined: "60-100km (37-62 miles)"
        },
        gradability: "20°"
      },
      wheels: {
        size: "26 inch (actually 27.5\")",
        tireType: "All-terrain",
        tireSize: "27.5×2.5",
        rimMaterial: "Aluminum alloy"
      },
      brakes: {
        front: "Mechanical disc brake",
        rear: "Mechanical disc brake",
        type: "Dual mechanical disc"
      },
      transmission: {
        type: "Shimano derailleur",
        gears: "7-speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LED display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Front suspension fork"
        },
        seat: {
          type: "Comfort saddle",
          adjustable: true,
          material: "Synthetic leather"
        },
        handlebar: {
          type: "City handlebar",
          adjustable: true,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: false
      }
    },
    description:
      "DYU C1 is made for city riders who need a comfortable, reliable e-bike with front suspension and stable 26\" wheels.",
    keyFeatures: [
      "26-inch wheels for stability",
      "Front suspension",
      "Shimano 7-speed transmission (varies)",
      "Detachable battery",
      "Comfortable riding position"
    ],
    availableColors: ["Matte Gray", "Midnight Blue"],
    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU C1 E-bike",
      "Charger",
      "Owner manual",
      "Bell",
      "Basic tool kit"
    ]
  },
  {
    id: "4",
    name: "DYU C6",
    slug: "dyu-c6-26-inch-city-electric-bike",
    originalPrice: 1199,
    price: 699,
    discount: "42% OFF",
    image: "/images/C6/c6-main.png",
    images: [
      "/images/C6/c6-main.png",
      "/images/C6/c6-1.png",
      "/images/C6/c6-2.png",
      "/images/C6/c6-3.png",
      "/images/C6/c6-4.png",
      "/images/C6/c6-5.png",
      "/images/C6/c6-6.png",
      "/images/C6/c6-7.png"
    ],
    features: ["12.5Ah battery", "LED display", "Dual suspension option (model)"],
    badge: "STUDENT FAVORITE",
    category: ["commuter-ebike", "step-through"],
    rating: 4.8,
    reviewCount: 203,
    specifications: {
      motor: "250W rear hub motor",
      battery: "36V 12.5Ah detachable",
      range: "Up to 60 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "26 inch",
      foldable: true,
      brakes: "Hydraulic disc brakes",
      frame: "Aluminum"
    },
    technicalSpecifications: {
      general: {
        model: "DYU C6",
        frameType: "Step-through city",
        frameMaterial: "Steel frame",
        foldable: true,
        dimensions: {
          unfolded: "175×65×115cm",
          folded: "88×65×90cm"
        },
        weight: "25kg (55 lbs)",
        maxLoad: "120kg (264 lbs)",
        recommendedHeight: "155-185cm"
      },
      motor: {
        type: "Rear hub motor",
        power: "250W",
        peakPower: "350W",
        location: "Rear wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "12.5Ah",
        capacityWh: "450Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25km/h (15.5mph)",
        range: {
          pureElectric: "50km (31 miles)",
          pedalAssist: "60km (37 miles)",
          combined: "50-60km (31-37 miles)"
        },
        gradability: "20°",
        turningRadius: "65°"
      },
      wheels: {
        size: "26 inch",
        tireType: "City tires",
        tireSize: "26×1.95",
        rimMaterial: "Steel"
      },
      brakes: {
        front: "Hydraulic disc brake",
        rear: "Hydraulic disc brake",
        type: "Dual hydraulic disc"
      },
      transmission: {
        type: "Single speed",
        gears: "1"
      },
      electrical: {
        display: "LCD display",
        lights: {
          front: true,
          rear: true,
          type: "LED integrated"
        },
        horn: true,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: true,
          type: "Front fork + seat suspension"
        },
        seat: {
          type: "Comfort seat with suspension",
          adjustable: true,
          material: "PU leather"
        },
        handlebar: {
          type: "Adjustable handlebar",
          adjustable: true,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: false
      }
    },
    description:
      "DYU C6 mixes style with longer range and stronger battery performance for everyday commuting and urban riding.",
    keyFeatures: [
      "Powerful 12.5Ah battery",
      "Front suspension fork",
      "Seat shock absorption",
      "Modern urban design",
      "Enhanced safety features"
    ],
    availableColors: ["Pearl White", "Forest Green"],
    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU C6 E-bike",
      "Charger",
      "Owner manual",
      "Tool kit",
      "Reflectors"
    ]
  },
  {
    id: "5",
    name: "DYU C9",
    slug: "dyu-c9-20-inch-long-range-ebike",
    originalPrice: 1699,
    price: 899,
    discount: "47% OFF",
    image: "/images/C9/c9-main.png",
    images: [
      "/images/C9/c9-main.png",
      "/images/C9/c9-1.png",
      "/images/C9/c9-2.png",
      "/images/C9/c9-3.png",
      "/images/C9/c9-4.png",
      "/images/C9/c9-5.png",
      "/images/C9/c9-6.png",
      "/images/C9/c9-7.png"
    ],
    features: ["Fat tires 20x3.0", "Exceptional range", "All-terrain capability"],
    badge: "LONG RANGE",
    category: [],
    rating: 4.9,
    reviewCount: 89,
    specifications: {
      motor: "750W peak rear hub motor",
      battery: "48V 15Ah removable",
      range: "80-100 miles (varies by usage)",
      speed: "28 mph",
      weight: "65 lbs",
      wheelSize: "20 x 3.0 inch fat tires",
      foldable: true,
      brakes: "Hydraulic disc",
      frame: "Steel/Aluminum hybrid"
    },
    technicalSpecifications: {
      general: {
        model: "DYU C9",
        frameType: "Fat tire folding",
        frameMaterial: "Steel and aluminum hybrid",
        foldable: true,
        dimensions: {
          unfolded: "170×70×115cm",
          folded: "95×70×90cm"
        },
        weight: "29.5kg (65 lbs)",
        maxLoad: "150kg (330 lbs)",
        recommendedHeight: "160-195cm"
      },
      motor: {
        type: "Rear hub motor",
        power: "500W",
        peakPower: "750W",
        torque: "65Nm",
        location: "Rear wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "15Ah",
        capacityWh: "720Wh",
        removable: true,
        chargingTime: "6-8 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "45km/h (28mph)",
        range: {
          pureElectric: "80km (50 miles)",
          pedalAssist: "160km (100 miles)",
          combined: "100-160km (62-100 miles)"
        },
        gradability: "30°"
      },
      wheels: {
        size: "20 inch",
        tireType: "Fat tires",
        tireSize: "20×3.0",
        rimMaterial: "Aluminum alloy"
      },
      brakes: {
        front: "Hydraulic disc brake",
        rear: "Hydraulic disc brake",
        type: "Dual hydraulic disc (180mm rotors)"
      },
      transmission: {
        type: "Shimano derailleur",
        gears: "7-speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "Color LCD display",
        lights: {
          front: true,
          rear: true,
          type: "High-power LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Front shock absorber"
        },
        seat: {
          type: "Wide comfort saddle",
          adjustable: true,
          material: "Memory foam with leather"
        },
        handlebar: {
          type: "Ergonomic handlebar",
          adjustable: true,
          material: "Aluminum alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX5",
        certification: ["CE", "UL"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: true
      }
    },
    description:
      "DYU C9 is built for long-range adventure with fat tires and a large capacity battery for extended rides off the beaten path.",
    keyFeatures: [
      "Fat 20x3.0 tires",
      "Front shock absorber",
      "Large range battery",
      "All-terrain capability",
      "Balanced motor-battery design"
    ],
    availableColors: ["Black", "Olive Green"],
    availableSizes: ["One-size (20\")"],
    whatsInTheBox: [
      "DYU C9 E-bike",
      "48V charger",
      "Tool kit",
      "Manual",
      "Puncture repair kit"
    ]
  },
  {
    id: "6",
    name: "DYU Stroll 1",
    slug: "dyu-stroll-1-700c-city-electric-bike",
    originalPrice: 1299,
    price: 799,
    discount: "38% OFF",
    image: "/images/Stroll1/stroll1-main.png",
    images: [
      "/images/Stroll1/stroll1-main.png",
      "/images/Stroll1/stroll-1.png",
      "/images/Stroll1/stroll-2.png",
      "/images/Stroll1/stroll-3.png",
      "/images/Stroll1/stroll-4.png",
      "/images/Stroll1/stroll-5.png",
      "/images/Stroll1/stroll-6.png",
      "/images/Stroll1/stroll-7.png"
    ],
    features: ["700C wheels", "Aluminum frame", "Hydraulic brakes"],
    badge: "PREMIUM STYLE",
    category: ["commuter-ebike", "step-through", "lightweight"],
    rating: 4.7,
    reviewCount: 127,
    specifications: {
      motor: "250W mid-drive motor",
      battery: "36V 9Ah removable",
      range: "Up to 67 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "700C",
      foldable: false,
      brakes: "Hydraulic disc",
      frame: "Aluminum alloy"
    },
    technicalSpecifications: {
      general: {
        model: "DYU Stroll 1",
        frameType: "City bike step-through",
        frameMaterial: "Streamlined aluminum alloy",
        foldable: false,
        dimensions: {
          unfolded: "185×65×115cm",
          folded: "N/A (non-folding)"
        },
        weight: "22kg (48.5 lbs)",
        maxLoad: "125kg (275 lbs)",
        recommendedHeight: "160-185cm"
      },
      motor: {
        type: "Mid-drive motor",
        power: "250W",
        peakPower: "400W",
        torque: "45Nm",
        location: "Bottom bracket",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "9Ah",
        capacityWh: "324Wh",
        removable: true,
        chargingTime: "3-4 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25km/h (15.5mph)",
        range: {
          pureElectric: "45km (28 miles)",
          pedalAssist: "67km (42 miles)",
          combined: "50-67km (31-42 miles)"
        },
        gradability: "15°"
      },
      wheels: {
        size: "700C (28 inch)",
        tireType: "City/road tires",
        tireSize: "700×35C",
        rimMaterial: "Aluminum alloy"
      },
      brakes: {
        front: "Hydraulic disc brake",
        rear: "Hydraulic disc brake",
        type: "Dual hydraulic disc"
      },
      transmission: {
        type: "Shimano derailleur",
        gears: "7-speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD display with multiple modes",
        lights: {
          front: true,
          rear: true,
          type: "Integrated LED system"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels (Eco, Normal, Sport modes)"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false
        },
        seat: {
          type: "Ergonomic city saddle",
          adjustable: true,
          material: "Synthetic leather"
        },
        handlebar: {
          type: "Comfort city handlebar",
          adjustable: true,
          material: "Aluminum alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description:
      "DYU Stroll 1 is a premium urban e-bike made for smooth rides with a sleek aluminum frame and efficient components.",
    keyFeatures: [
      "Streamlined aluminum frame",
      "700C wheels for smooth rolling",
      "Hydraulic disc brakes",
      "Multiple riding modes",
      "Comfort geometry"
    ],
    availableColors: ["Matte Black", "Cream"],
    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU Stroll 1 E-bike",
      "Charger",
      "Owner manual",
      "Tool kit",
      "Fender (model dependent)"
    ]
  }
];

// ✅ Get product by slug
export const getProductBySlug = (slug: string): ProductCard | undefined => {
  return PRODUCTS_DATA.find((product) => product.slug === slug);
};

// ✅ Get all slugs
export const getAllProductSlugs = (): string[] => {
  return PRODUCTS_DATA.map((product) => product.slug);
};

// ✅ Get related products
export const getRelatedProducts = (
  currentProductId: string,
  limit: number = 3
): ProductCard[] => {
  return PRODUCTS_DATA.filter((p) => p.id !== currentProductId).slice(0, limit);
};

// ✅ Get products by category
export const getProductsByCategory = (category: string): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => 
    product.category.includes(category)
  );
};

// ✅ Search products
export const searchProducts = (query: string): ProductCard[] => {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS_DATA.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.keyFeatures.some(feature => 
      feature.toLowerCase().includes(lowerQuery)
    ) ||
    product.category.some(cat => 
      cat.toLowerCase().includes(lowerQuery)
    )
  );
};

// ✅ Get products by price range
export const getProductsByPriceRange = (
  minPrice: number, 
  maxPrice: number
): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => 
    product.price >= minPrice && product.price <= maxPrice
  );
};

// ✅ Get products sorted by price
export const getProductsSortedByPrice = (ascending: boolean = true): ProductCard[] => {
  return [...PRODUCTS_DATA].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
};

// ✅ Get products sorted by rating
export const getProductsSortedByRating = (ascending: boolean = false): ProductCard[] => {
  return [...PRODUCTS_DATA].sort((a, b) => 
    ascending ? a.rating - b.rating : b.rating - a.rating
  );
};

// ✅ Get featured products (with badges)
export const getFeaturedProducts = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => product.badge);
};

// ✅ Get lightweight products
export const getLightweightProducts = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => 
    product.category.includes('lightweight')
  );
};

// ✅ Get folding bikes
export const getFoldingBikes = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => 
    product.specifications.foldable === true
  );
};

// ✅ Get commuter bikes
export const getCommuterBikes = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => 
    product.category.includes('commuter-ebike')
  );
};

// ✅ Get step-through bikes
export const getStepThroughBikes = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => 
    product.category.includes('step-through')
  );
};