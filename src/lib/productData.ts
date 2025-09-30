

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
    name: "DYU D3F 14 Inch Mini Folding Electric Bike",
    slug: "dyu-d3f-mini-folding-electric-bike",
    originalPrice: 11999,
    price: 5700,
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
      // "/images/d3f/D3F-side.png",
    ],
    features: [ "Quick fold", "Lightweight" , "Ultra-compact 14\" design",],
    badge: "COMPACT KING",
    category: ["dyu"],
    rating: 5,
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
    name: "DYU T1 20 Inch Foldable Electric Bike",
    slug: "dyu-t1-torque-sensor-electric-bike",
    originalPrice: 14999,
    price: 7999,
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
    category: ["dyu"],
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
    name: "DYU C1 26 Inch City Electric Bike",
    slug: "dyu-c1-26-inch-city-electric-bike",
    originalPrice: 12999,
    price: 9999,
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
    features: ["Comfort geometry", "Front suspension" , "26\" wheels" ],
    badge: "CITY CRUISER",
    category: ["dyu"],
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
    name: "DYU C6 26 Inch City Electric Bike",
    slug: "dyu-c6-26-inch-city-electric-bike",
    originalPrice: 14999,
    price: 7999,
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
    features: ["12.5Ah battery" , "Dual suspension option (model)" , "LED display" ],
    badge: "STUDENT FAVORITE",
    category: ["dyu"],
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
    name: "DYU C9 20 Inch Long-Range Ebike",
    slug: "dyu-c9-20-inch-long-range-ebike",
    originalPrice: 16999,
    price: 12999,
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
    category: ["dyu"],
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
    name: "DYU Stroll 1 700C City Electric Bike",
    slug: "dyu-stroll-1-700c-city-electric-bike",
    originalPrice: 12999,
    price: 9999,
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
    category: ["dyu"],
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
  },
  {
    id: "7",
    name: "JOBOBIKE Lyon Pro",
    slug: "jobobike-lyon-pro",
    originalPrice: 1899,
    price: 1599,
    discount: "16%",
    image: "/images/lyon/lyon-1.png",
    images: [
      "/images/lyon/lyon-1.png",
      "/images/lyon/lyon-2.png",
      
    ],
    features: [
      "250W Mid-Drive Motor",
      "48V 15Ah Removable Battery",
      "9-Speed Shimano Transmission",
      "90+ km Range",
      "Bluetooth App Connectivity"
    ],
    badge: "Best Seller",
    category: ["jobo"],
    rating: 4.7,
    reviewCount: 142,
    specifications: {
      motor: "250W Mid-Drive",
      battery: "48V 15Ah (720Wh)",
      range: "90-110 km",
      speed: "25 km/h",
      weight: "24 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "Hydraulic Disc Brakes",
      frame: "Aluminum Alloy",
      drivetrain: "9-Speed Shimano"
    },
    technicalSpecifications: {
      general: {
        model: "Lyon Pro",
        frameType: "Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "185 x 65 x 110 cm",
          folded: "N/A"
        },
        weight: "24 kg",
        maxLoad: "120 kg",
        recommendedHeight: "155-195 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "250W",
        peakPower: "500W",
        torque: "90 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "15Ah",
        capacityWh: "720Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "60 km",
          pedalAssist: "90-110 km",
          combined: "75-95 km"
        },
        gradability: "25°",
        turningRadius: "1.8m"
      },
      wheels: {
        size: "26\"",
        tireType: "Urban",
        tireSize: "26 x 2.1\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "9-Speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD Bluetooth Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Spring Fork"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Ergonomic",
          adjustable: true,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
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
    description: "The JOBOBIKE Lyon Pro is a sophisticated urban e-bike designed for the modern commuter. With its powerful mid-drive motor and long-range battery, it offers the perfect balance of performance and efficiency for city riding.",
    keyFeatures: [
      "Powerful 250W mid-drive motor with 90 N.m torque",
      "Long-range 48V 15Ah removable battery",
      "Smart Bluetooth connectivity with mobile app",
      "Responsive hydraulic disc brakes",
      "Comfortable step-through frame design"
    ],
    availableColors: ["Matte Black", "Pearl White", "Ocean Blue"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Lyon Pro E-bike",
      "48V 15Ah Battery",
      "Battery Charger",
      "User Manual",
      "Assembly Tools",
      "Keys (2x)"
    ]
  },

  // 2. Jobobike Dyno GT
  {
    id: "8",
    name: "JOBOBIKE Dyno GT",
    slug: "jobobike-dyno-gt",
    originalPrice: 1699,
    price: 1449,
    discount: "15%",
    image: "/images/dyno/dyno-1.png",
    images: [
      "/images/dyno/dyno-1.png",
      "/images/dyno/dyno-2.png",
      
    ],
    features: [
      "250W Rear Hub Motor",
      "48V 15Ah Smart Battery",
      "8-Speed Shimano Derailleur",
      "Torque Sensor",
      "Smart LCD Display"
    ],
    category: ["jobo"],
    rating: 4.5,
    reviewCount: 89,
    specifications: {
      motor: "250W Rear Hub",
      battery: "48V 15Ah (720Wh)",
      range: "90+ km",
      speed: "25 km/h",
      weight: "26 kg",
      wheelSize: "27.5\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Aluminum Alloy",
      drivetrain: "8-Speed Shimano"
    },
    technicalSpecifications: {
      general: {
        model: "Dyno GT",
        frameType: "Diamond",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "180 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "26 kg",
        maxLoad: "125 kg",
        recommendedHeight: "165-200 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "250W",
        peakPower: "450W",
        torque: "45 N.m",
        location: "Rear Wheel",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "15Ah",
        capacityWh: "720Wh",
        removable: true,
        chargingTime: "3-4 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "70 km",
          pedalAssist: "90-120 km",
          combined: "80-100 km"
        },
        gradability: "20°"
      },
      wheels: {
        size: "27.5\"",
        tireType: "Hybrid",
        tireSize: "27.5 x 1.95\"",
        rimMaterial: "Double Wall Aluminum"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "160mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-Speed",
        shifter: "Shimano Altus"
      },
      electrical: {
        display: "Smart LCD Bluetooth",
        lights: {
          front: true,
          rear: true,
          type: "Auto-sensing LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Lockout Fork"
        },
        seat: {
          type: "Sport Saddle",
          adjustable: true,
          material: "Synthetic"
        },
        handlebar: {
          type: "Flat Bar",
          adjustable: false,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX5",
        certification: ["EN15194", "CE"]
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
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Dyno GT combines smart technology with reliable performance. Featuring a torque sensor and intelligent display system, it's perfect for tech-savvy urban riders.",
    keyFeatures: [
      "Smart torque sensor for natural riding feel",
      "Fast 3-hour charging capability",
      "Auto-sensing rear light for safety",
      "Bluetooth LCD display with app integration",
      "Lightweight yet durable aluminum frame"
    ],
    availableColors: ["Charcoal Gray", "Electric Blue", "Forest Green"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Dyno GT E-bike",
      "48V 15Ah Battery",
      "Fast Charger",
      "User Manual",
      "Assembly Kit",
      "Keys (2x)"
    ]
  },

  // 3. Jobobike Sam
  // {
  //   id: "9",
  //   name: "JOBOBIKE Sam",
  //   slug: "jobobike-sam",
  //   originalPrice: 1299,
  //   price: 1099,
  //   discount: "15%",
  //   image: "/images/sam/sam-1.png",
  //   images: [
  //     "/images/sam/sam-1.png",
  //     "/images/sam/sam-2.png",
  //     "/images/sam/sam-3.png",
  //     "/images/sam/sam-4.png",
  //     "/images/sam/sam-5.png",
  //     "/images/sam/sam-6.png",
  //     "/images/sam/sam-7.png",
  //     "/images/sam/sam-8.png",
     
  //   ],
  //   features: [
  //     "350W Rear Hub Motor",
  //     "36V 12.8Ah Battery",
  //     "20\" Fat Tires",
  //     "Foldable Design",
  //     "5 Assist Levels"
  //   ],
  //   category: ["jobo"],
  //   rating: 4.3,
  //   reviewCount: 67,
  //   specifications: {
  //     motor: "350W Rear Hub",
  //     battery: "36V 12.8Ah (461Wh)",
  //     range: "60-80 km",
  //     speed: "25 km/h",
  //     weight: "22 kg",
  //     wheelSize: "20\"",
  //     foldable: true,
  //     brakes: "Disc Brakes",
  //     frame: "Aluminum Alloy",
  //     drivetrain: "7-Speed"
  //   },
  //   technicalSpecifications: {
  //     general: {
  //       model: "Sam",
  //       frameType: "Foldable",
  //       frameMaterial: "6061 Aluminum Alloy",
  //       foldable: true,
  //       dimensions: {
  //         unfolded: "160 x 58 x 100 cm",
  //         folded: "80 x 58 x 70 cm"
  //       },
  //       weight: "22 kg",
  //       maxLoad: "100 kg",
  //       recommendedHeight: "155-185 cm"
  //     },
  //     motor: {
  //       type: "Rear Hub",
  //       power: "350W",
  //       peakPower: "500W",
  //       torque: "40 N.m",
  //       location: "Rear Wheel",
  //       torqueSensor: false
  //     },
  //     battery: {
  //       type: "Lithium-ion",
  //       voltage: "36V",
  //       capacity: "12.8Ah",
  //       capacityWh: "461Wh",
  //       removable: true,
  //       chargingTime: "4-5 hours",
  //       batteryLife: "600+ cycles"
  //     },
  //     performance: {
  //       maxSpeed: "25 km/h",
  //       range: {
  //         pureElectric: "45 km",
  //         pedalAssist: "60-80 km",
  //         combined: "50-70 km"
  //       },
  //       gradability: "15°"
  //     },
  //     wheels: {
  //       size: "20\"",
  //       tireType: "Fat Tire",
  //       tireSize: "20 x 4.0\"",
  //       rimMaterial: "Aluminum Alloy"
  //     },
  //     brakes: {
  //       front: "Mechanical Disc",
  //       rear: "Mechanical Disc",
  //       type: "160mm Rotors"
  //     },
  //     transmission: {
  //       type: "Derailleur",
  //       gears: "7-Speed",
  //       shifter: "Shimano"
  //     },
  //     electrical: {
  //       display: "LCD Display",
  //       lights: {
  //         front: true,
  //         rear: true,
  //         type: "LED"
  //       },
  //       horn: false,
  //       throttle: true,
  //       assistLevels: "5 levels"
  //     },
  //     comfort: {
  //       suspension: {
  //         front: true,
  //         rear: false,
  //         type: "Spring Fork"
  //       },
  //       seat: {
  //         type: "Comfort Saddle",
  //         adjustable: true,
  //         material: "PU Leather"
  //       },
  //       handlebar: {
  //         type: "Foldable",
  //         adjustable: true,
  //         material: "Steel"
  //       }
  //     },
  //     safety: {
  //       reflectors: true,
  //       bell: true,
  //       waterResistance: "IPX4",
  //       certification: ["EN15194", "CE"]
  //     },
  //     connectivity: {
  //       app: false,
  //       gps: false,
  //       bluetooth: false,
  //       usb: true
  //     },
  //     accessories: {
  //       kickstand: true,
  //       mudguards: true,
  //       rack: false,
  //       basket: false,
  //       bottleHolder: false
  //     }
  //   },
  //   description: "The JOBOBIKE Sam is a versatile folding e-bike perfect for urban commuters who need portability without sacrificing performance. Its compact design makes storage and transport effortless.",
  //   keyFeatures: [
  //     "Quick-fold mechanism for easy storage",
  //     "Fat tires for enhanced stability and comfort",
  //     "Powerful 350W motor for city riding",
  //     "Removable battery for convenient charging",
  //     "Compact size perfect for apartments and offices"
  //   ],
  //   availableColors: ["Matte Black", "White", "Red"],
  //   availableSizes: ["One Size"],
  //   whatsInTheBox: [
  //     "JOBOBIKE Sam E-bike",
  //     "36V 12.8Ah Battery",
  //     "Battery Charger",
  //     "User Manual",
  //     "Folding Guide",
  //     "Keys (2x)"
  //   ]
  // },

  // 4. Jobobike Transer
  {
    id: "10",
    name: "JOBOBIKE Transer",
    slug: "jobobike-transer",
    originalPrice: 2199,
    price: 1899,
    discount: "14%",
    image: "/images/transer/transer-1.png",
    images: [
      "/images/transer/transer-1.png",
      "/images/transer/transer-2.png",
      "/images/transer/transer-3.png",
    ],
    features: [
      "250W Mid-Drive Motor",
      "48V 17.5Ah Battery",
      "Cargo Box Included",
      "Family-Friendly Design",
      "Extra Long Frame"
    ],
    badge: "Family Choice",
    category: ["jobo"],
    rating: 4.8,
    reviewCount: 123,
    specifications: {
      motor: "250W Mid-Drive",
      battery: "48V 17.5Ah (840Wh)",
      range: "80-100 km",
      speed: "25 km/h",
      weight: "32 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Aluminum Cargo",
      drivetrain: "8-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Transer",
        frameType: "Cargo/Longtail",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "220 x 65 x 110 cm",
          folded: "N/A"
        },
        weight: "32 kg",
        maxLoad: "180 kg",
        recommendedHeight: "160-195 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "250W",
        peakPower: "600W",
        torque: "80 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "17.5Ah",
        capacityWh: "840Wh",
        removable: true,
        chargingTime: "5-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "60 km",
          pedalAssist: "80-100 km",
          combined: "70-90 km"
        },
        gradability: "20°"
      },
      wheels: {
        size: "26\"",
        tireType: "Cargo",
        tireSize: "26 x 2.35\"",
        rimMaterial: "Reinforced Aluminum"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-Speed",
        shifter: "Shimano Acera"
      },
      electrical: {
        display: "LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "Bright LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Cargo Fork"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Gel Padding"
        },
        handlebar: {
          type: "Cargo Bar",
          adjustable: true,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: true,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Transer is the ultimate family cargo e-bike, designed to safely transport children and cargo with its extended frame and powerful motor system.",
    keyFeatures: [
      "Extended longtail frame for maximum cargo capacity",
      "Powerful mid-drive motor with high torque",
      "Extra-large battery for long family trips",
      "Integrated cargo box and safety accessories",
      "Stable and comfortable ride even when fully loaded"
    ],
    availableColors: ["Safety Orange", "Deep Blue", "Forest Green"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Transer E-bike",
      "48V 17.5Ah Battery",
      "Battery Charger",
      "Cargo Box",
      "Safety Straps",
      "User Manual",
      "Keys (2x)"
    ]
  },

  // 5. Jobobike Mover
  {
    id: "11",
    name: "JOBOBIKE Mover",
    slug: "jobobike-mover",
    originalPrice: 1399,
    price: 1199,
    discount: "14%",
    image: "/images/mover/mover-1.png",
    images: [
      "/images/mover/mover-1.png",
      "/images/mover/mover-2.png",
      "/images/mover/mover-3.png",
    ],
    features: [
      "250W Rear Hub Motor",
      "36V 14Ah Battery",
      "Step-Through Frame",
      "Comfortable Riding Position",
      "Integrated Lights"
    ],
    category: ["jobo"],
    rating: 4.4,
    reviewCount: 78,
    specifications: {
      motor: "250W Rear Hub",
      battery: "36V 14Ah (504Wh)",
      range: "70-90 km",
      speed: "25 km/h",
      weight: "23 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "V-Brakes",
      frame: "Steel Step-Through",
      drivetrain: "7-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Mover",
        frameType: "Step-Through",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "175 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "23 kg",
        maxLoad: "110 kg",
        recommendedHeight: "150-185 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "250W",
        peakPower: "400W",
        torque: "35 N.m",
        location: "Rear Wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "14Ah",
        capacityWh: "504Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "700+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "50 km",
          pedalAssist: "70-90 km",
          combined: "60-80 km"
        },
        gradability: "15°"
      },
      wheels: {
        size: "28\"",
        tireType: "City",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum"
      },
      brakes: {
        front: "V-Brake",
        rear: "V-Brake",
        type: "Traditional"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-Speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "Integrated LED"
        },
        horn: false,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "None"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Foam Padding"
        },
        handlebar: {
          type: "Swept-Back",
          adjustable: false,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
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
        basket: true,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Mover offers comfortable, upright riding with its classic step-through design. Perfect for leisurely rides and daily commuting with style and comfort.",
    keyFeatures: [
      "Easy step-through frame for comfortable mounting",
      "Upright riding position reduces strain",
      "Integrated lighting system for safety",
      "Classic city bike styling with modern e-bike technology",
      "Reliable and affordable urban transportation"
    ],
    availableColors: ["Classic Black", "Cream White", "Burgundy Red"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Mover E-bike",
      "36V 14Ah Battery",
      "Battery Charger",
      "User Manual",
      "Basic Tool Kit",
      "Keys (2x)"
    ]
  },

  // 6. Jobobike Robin
  // {
  //   id: "12",
  //   name: "JOBOBIKE Robin",
  //   slug: "jobobike-robin",
  //   originalPrice: 1799,
  //   price: 1499,
  //   discount: "17%",
  //   image: "/images/robin/robin-1.png",
  //   images: [
  //     "/images/robin/robin-1.png",
  //     "/images/robin/robin-2.png",
  //     "/images/robin/robin-3.png",
  //   ],
  //   features: [
  //     "500W Rear Hub Motor",
  //     "48V 15Ah Battery",
  //     "26\" Fat Tires",
  //     "All-Terrain Capability",
  //     "Front Suspension"
  //   ],
  //   badge: "Adventure Ready",
  //   category: ["jobo"],
  //   rating: 4.6,
  //   reviewCount: 156,
  //   specifications: {
  //     motor: "500W Rear Hub",
  //     battery: "48V 15Ah (720Wh)",
  //     range: "70-90 km",
  //     speed: "25 km/h",
  //     weight: "28 kg",
  //     wheelSize: "26\"",
  //     foldable: false,
  //     brakes: "Hydraulic Disc",
  //     frame: "Aluminum Fat",
  //     drivetrain: "7-Speed"
  //   },
  //   technicalSpecifications: {
  //     general: {
  //       model: "Robin",
  //       frameType: "Fat Bike",
  //       frameMaterial: "6061 Aluminum Alloy",
  //       foldable: false,
  //       dimensions: {
  //         unfolded: "185 x 70 x 110 cm",
  //         folded: "N/A"
  //       },
  //       weight: "28 kg",
  //       maxLoad: "130 kg",
  //       recommendedHeight: "165-200 cm"
  //     },
  //     motor: {
  //       type: "Rear Hub",
  //       power: "500W",
  //       peakPower: "750W",
  //       torque: "60 N.m",
  //       location: "Rear Wheel",
  //       torqueSensor: false
  //     },
  //     battery: {
  //       type: "Lithium-ion",
  //       voltage: "48V",
  //       capacity: "15Ah",
  //       capacityWh: "720Wh",
  //       removable: true,
  //       chargingTime: "4-6 hours",
  //       batteryLife: "800+ cycles"
  //     },
  //     performance: {
  //       maxSpeed: "25 km/h",
  //       range: {
  //         pureElectric: "55 km",
  //         pedalAssist: "70-90 km",
  //         combined: "60-80 km"
  //       },
  //       gradability: "25°"
  //     },
  //     wheels: {
  //       size: "26\"",
  //       tireType: "Fat Tire",
  //       tireSize: "26 x 4.0\"",
  //       rimMaterial: "Double Wall Aluminum"
  //     },
  //     brakes: {
  //       front: "Hydraulic Disc",
  //       rear: "Hydraulic Disc",
  //       type: "180mm Rotors"
  //     },
  //     transmission: {
  //       type: "Derailleur",
  //       gears: "7-Speed",
  //       shifter: "Shimano"
  //     },
  //     electrical: {
  //       display: "LCD Color Display",
  //       lights: {
  //         front: true,
  //         rear: true,
  //         type: "High-Power LED"
  //       },
  //       horn: true,
  //       throttle: true,
  //       assistLevels: "5 levels"
  //     },
  //     comfort: {
  //       suspension: {
  //         front: true,
  //         rear: false,
  //         type: "Fat Fork Suspension"
  //       },
  //       seat: {
  //         type: "Wide Comfort Saddle",
  //         adjustable: true,
  //         material: "Memory Foam"
  //       },
  //       handlebar: {
  //         type: "Wide Fat Bar",
  //         adjustable: false,
  //         material: "Aluminum"
  //       }
  //     },
  //     safety: {
  //       reflectors: true,
  //       bell: true,
  //       waterResistance: "IPX5",
  //       certification: ["EN15194", "CE"]
  //     },
  //     connectivity: {
  //       app: false,
  //       gps: false,
  //       bluetooth: false,
  //       usb: true
  //     },
  //     accessories: {
  //       kickstand: true,
  //       mudguards: false,
  //       rack: false,
  //       basket: false,
  //       bottleHolder: true
  //     }
  //   },
  //   description: "The JOBOBIKE Robin is built for adventure with its powerful motor and fat tires. Whether you're exploring trails or conquering city streets, this all-terrain e-bike delivers exceptional performance and comfort.",
  //   keyFeatures: [
  //     "Powerful 500W motor for challenging terrain",
  //     "Fat tires provide superior traction and comfort",
  //     "Front suspension smooths out rough rides",
  //     "High-capacity battery for long adventures",
  //     "Robust construction for reliable performance"
  //   ],
  //   availableColors: ["Stealth Black", "Army Green", "Sand Beige"],
  //   availableSizes: ["One Size"],
  //   whatsInTheBox: [
  //     "JOBOBIKE Robin E-bike",
  //     "48V 15Ah Battery",
  //     "Battery Charger",
  //     "User Manual",
  //     "Assembly Tools",
  //     "Keys (2x)"
  //   ]
  // },

  // 7. Jobobike Eddy X
  {
    id: "13",
    name: "JOBOBIKE Eddy X",
    slug: "jobobike-eddy-x",
    originalPrice: 1599,
    price: 1349,
    discount: "16%",
    image: "/images/eddy-x/eddy-1.png",
    images: [
     "/images/eddy-x/eddy-1.png",
     "/images/eddy-x/eddy-2.png",
    ],
    features: [
      "250W Mid-Drive Motor",
      "36V 16Ah Battery",
      "Smart Display",
      "Integrated Design",
      "Urban Optimized"
    ],
    category: ["jobo"],
    rating: 4.5,
    reviewCount: 94,
    specifications: {
      motor: "250W Mid-Drive",
      battery: "36V 16Ah (576Wh)",
      range: "80-100 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Integrated Aluminum",
      drivetrain: "8-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Eddy X",
        frameType: "Integrated",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "180 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "25 kg",
        maxLoad: "120 kg",
        recommendedHeight: "160-195 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "250W",
        peakPower: "500W",
        torque: "70 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "16Ah",
        capacityWh: "576Wh",
        removable: false,
        chargingTime: "4-5 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "60 km",
          pedalAssist: "80-100 km",
          combined: "70-90 km"
        },
        gradability: "20°"
      },
      wheels: {
        size: "28\"",
        tireType: "Urban",
        tireSize: "28 x 1.6\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "160mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-Speed",
        shifter: "Shimano Acera"
      },
      electrical: {
        display: "Smart Color Display",
        lights: {
          front: true,
          rear: true,
          type: "Integrated LED"
        },
        horn: false,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "None"
        },
        seat: {
          type: "Ergonomic Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Ergonomic Drop",
          adjustable: false,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: false,
        waterResistance: "IPX5",
        certification: ["EN15194", "CE"]
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
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Eddy X represents the future of urban e-mobility with its sleek integrated design and smart technology. Perfect for modern commuters who value both style and performance.",
    keyFeatures: [
      "Sleek integrated battery design",
      "Smart color display with connectivity",
      "Efficient mid-drive motor system",
      "Aerodynamic frame for urban efficiency",
      "Modern aesthetics meet practical performance"
    ],
    availableColors: ["Graphite Gray", "Pure White", "Midnight Blue"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Eddy X E-bike",
      "Integrated Battery (non-removable)",
      "Smart Charger",
      "User Manual",
      "App Setup Guide",
      "Assembly Tools"
    ]
  },

  // 8. Jobobike Romer Pro
  // {
  //   id: "14",
  //   name: "JOBOBIKE Romer Pro",
  //   slug: "jobobike-romer-pro",
  //   originalPrice: 2299,
  //   price: 1999,
  //   discount: "13%",
  //   image: "/images/romer-pro/romer-1.png",
  //   images: [
  //     "/images/romer-pro/romer-1.png",
  //   ],
  //   features: [
  //     "750W Mid-Drive Motor",
  //     "48V 20Ah Battery",
  //     "Full Suspension",
  //     "Mountain Bike Design",
  //     "Professional Components"
  //   ],
  //   badge: "Pro Series",
  //   category: ["jobo"],
  //   rating: 4.9,
  //   reviewCount: 87,
  //   specifications: {
  //     motor: "750W Mid-Drive",
  //     battery: "48V 20Ah (960Wh)",
  //     range: "60-80 km",
  //     speed: "25 km/h",
  //     weight: "30 kg",
  //     wheelSize: "27.5\"",
  //     foldable: false,
  //     brakes: "Hydraulic Disc",
  //     frame: "Carbon Fiber",
  //     drivetrain: "11-Speed"
  //   },
  //   technicalSpecifications: {
  //     general: {
  //       model: "Romer Pro",
  //       frameType: "Full Suspension MTB",
  //       frameMaterial: "Carbon Fiber",
  //       foldable: false,
  //       dimensions: {
  //         unfolded: "185 x 65 x 115 cm",
  //         folded: "N/A"
  //       },
  //       weight: "30 kg",
  //       maxLoad: "140 kg",
  //       recommendedHeight: "170-200 cm"
  //     },
  //     motor: {
  //       type: "Mid-Drive",
  //       power: "750W",
  //       peakPower: "1200W",
  //       torque: "160 N.m",
  //       location: "Center",
  //       torqueSensor: true
  //     },
  //     battery: {
  //       type: "Lithium-ion",
  //       voltage: "48V",
  //       capacity: "20Ah",
  //       capacityWh: "960Wh",
  //       removable: true,
  //       chargingTime: "6-7 hours",
  //       batteryLife: "1000+ cycles"
  //     },
  //     performance: {
  //       maxSpeed: "25 km/h",
  //       range: {
  //         pureElectric: "45 km",
  //         pedalAssist: "60-80 km",
  //         combined: "50-70 km"
  //       },
  //       gradability: "35°"
  //     },
  //     wheels: {
  //       size: "27.5\"",
  //       tireType: "Mountain",
  //       tireSize: "27.5 x 2.8\"",
  //       rimMaterial: "Carbon Fiber"
  //     },
  //     brakes: {
  //       front: "Hydraulic Disc",
  //       rear: "Hydraulic Disc",
  //       type: "203mm Rotors"
  //     },
  //     transmission: {
  //       type: "Derailleur",
  //       gears: "11-Speed",
  //       shifter: "Shimano XT"
  //     },
  //     electrical: {
  //       display: "Professional Color Display",
  //       lights: {
  //         front: true,
  //         rear: true,
  //         type: "High-Intensity LED"
  //       },
  //       horn: false,
  //       throttle: false,
  //       assistLevels: "7 levels"
  //     },
  //     comfort: {
  //       suspension: {
  //         front: true,
  //         rear: true,
  //         type: "Air Shock System"
  //       },
  //       seat: {
  //         type: "MTB Racing Saddle",
  //         adjustable: true,
  //         material: "Carbon Rails"
  //       },
  //       handlebar: {
  //         type: "MTB Flat Bar",
  //         adjustable: false,
  //         material: "Carbon Fiber"
  //       }
  //     },
  //     safety: {
  //       reflectors: false,
  //       bell: false,
  //       waterResistance: "IPX6",
  //       certification: ["EN15194", "CE"]
  //     },
  //     connectivity: {
  //       app: true,
  //       gps: true,
  //       bluetooth: true,
  //       usb: true
  //     },
  //     accessories: {
  //       kickstand: false,
  //       mudguards: false,
  //       rack: false,
  //       basket: false,
  //       bottleHolder: true
  //     }
  //   },
  //   description: "The JOBOBIKE Romer Pro is a premium full-suspension e-mountain bike designed for serious riders. With its powerful motor, long-range battery, and professional-grade components, it's built to conquer any trail.",
  //   keyFeatures: [
  //     "Ultra-powerful 750W mid-drive motor with massive torque",
  //     "Premium carbon fiber frame and components",
  //     "Full air suspension system for maximum comfort",
  //     "Massive 960Wh battery for extended adventures",
  //     "Professional-grade Shimano XT drivetrain"
  //   ],
  //   availableColors: ["Matte Black", "Racing Red", "Electric Yellow"],
  //   availableSizes: ["M", "L", "XL"],
  //   whatsInTheBox: [
  //     "JOBOBIKE Romer Pro E-bike",
  //     "48V 20Ah Battery",
  //     "Fast Charger",
  //     "Professional Manual",
  //     "GPS Setup Guide",
  //     "Premium Tool Kit",
  //     "Keys (2x)"
  //   ]
  // },

  // 9. Jobobike Astra
  {
    id: "15",
    name: "JOBOBIKE Astra",
    slug: "jobobike-astra",
    originalPrice: 1199,
    price: 999,
    discount: "17%",
    image: "/images/astra/astra-1.png",
    images: [
    "/images/astra/astra-1.png",
    "/images/astra/astra-2.png",
    ],
    features: [
      "250W Front Hub Motor",
      "36V 10Ah Battery",
      "Lightweight Design",
      "Budget-Friendly",
      "Simple Operation"
    ],
    badge: "Best Value",
    category: ["jobo"],
    rating: 4.2,
    reviewCount: 156,
    specifications: {
      motor: "250W Front Hub",
      battery: "36V 10Ah (360Wh)",
      range: "40-60 km",
      speed: "25 km/h",
      weight: "21 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "V-Brakes",
      frame: "Steel",
      drivetrain: "6-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Astra",
        frameType: "City Bike",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "175 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "21 kg",
        maxLoad: "100 kg",
        recommendedHeight: "155-185 cm"
      },
      motor: {
        type: "Front Hub",
        power: "250W",
        peakPower: "350W",
        torque: "30 N.m",
        location: "Front Wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "10Ah",
        capacityWh: "360Wh",
        removable: true,
        chargingTime: "3-4 hours",
        batteryLife: "500+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "30 km",
          pedalAssist: "40-60 km",
          combined: "35-50 km"
        },
        gradability: "12°"
      },
      wheels: {
        size: "26\"",
        tireType: "City",
        tireSize: "26 x 1.95\"",
        rimMaterial: "Steel"
      },
      brakes: {
        front: "V-Brake",
        rear: "V-Brake",
        type: "Traditional"
      },
      transmission: {
        type: "Derailleur",
        gears: "6-Speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "Basic LED",
        lights: {
          front: true,
          rear: false,
          type: "Basic LED"
        },
        horn: false,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "None"
        },
        seat: {
          type: "Basic Comfort",
          adjustable: true,
          material: "PU"
        },
        handlebar: {
          type: "City Bar",
          adjustable: false,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
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
    description: "The JOBOBIKE Astra is the perfect entry-level e-bike for budget-conscious riders. Despite its affordable price, it delivers reliable performance and all the essential features needed for urban commuting.",
    keyFeatures: [
      "Affordable entry point into e-biking",
      "Lightweight and easy to handle",
      "Simple, user-friendly operation",
      "Reliable front hub motor system",
      "Perfect for short to medium commutes"
    ],
    availableColors: ["Basic Black", "Pearl White", "Sky Blue"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Astra E-bike",
      "36V 10Ah Battery",
      "Basic Charger",
      "User Manual",
      "Basic Tools",
      "Keys (2x)"
    ]
  },
 
  // {
  //   id: "16",
  //   name: "Kommoda 3.0 Electric Bike",
  //   slug: "kommoda-3-0-electric-bike",
  //   originalPrice: 1999,
  //   price: 1799,
  //   discount: "10%",
  //   image: "/images/kommoda/kommoda-3.png",
  //   images: [
  //     "/images/kommoda/kommoda-3.png",
  //     "/images/kommoda/kommoda-1.png",
  //     "/images/kommoda/kommoda-2.png",


  //   ],
  //   features: ["Step-through frame", "Fat 20×4.0 tires", "Hydraulic disc brakes"],
  //   badge: "Best Seller",
  //   category: ["Electric Bike", "City" , "yatdim"],
  //   rating: 4.8,
  //   reviewCount: 110,
  //   specifications: {
  //     motor: "250W hub",
  //     battery: "48V 20Ah",
  //     range: "68 miles",
  //     speed: "25 km/h",
  //     weight: "37 kg",
  //     wheelSize: "20×4.0",
  //     foldable: false,
  //     brakes: "Hydraulic disc",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: {
  //       model: "Kommoda 3.0",
  //       frameType: "Step-through",
  //       frameMaterial: "Aluminum",
  //       foldable: false,
  //       dimensions: { unfolded: "N/A", folded: "" },
  //       weight: "37 kg",
  //       maxLoad: "160 kg",
  //       recommendedHeight: "150-195 cm"
  //     },
  //     motor: { type: "Hub", power: "250W", peakPower: "750W", location: "Rear hub" },
  //     battery: { type: "Lithium", voltage: "48V", capacity: "20Ah", capacityWh: "960Wh", removable: true, chargingTime: "6-7h", batteryLife: "800 cycles" },
  //     performance: { maxSpeed: "25 km/h", range: { pureElectric: "60 km", pedalAssist: "100 km", combined: "110 km" }, gradability: "15°" },
  //     wheels: { size: "20×4.0", tireType: "Fat", tireSize: "20×4.0" },
  //     brakes: { front: "Hydraulic disc", rear: "Hydraulic disc", type: "Hydraulic" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "LCD", lights: { front: true, rear: true }, horn: true, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: true }, seat: { type: "Comfort", adjustable: true }, handlebar: { type: "Riser", adjustable: true } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: true, basket: false, bottleHolder: true }
  //   },
  //   description: "Step-through fat tire e-bike for comfort and urban riding.",
  //   keyFeatures: ["Torque sensor assist", "Hydraulic brakes", "Removable 960Wh battery"],
  //   availableColors: ["Green", "Orange"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger", "Manual"]
  // },
  // {
  //   id: "17",
  //   name: "Himiway D5 Zebra Electric Bike",
  //   slug: "himiway-d5-zebra",
  //   originalPrice: 2299,
  //   price: 1699,
  //   discount: "26%",
  //   image: "/images/Himiway/himiway-2.png",
  //   images: [
  //     "/images/Himiway/himiway-2.png",
  //     "/images/Himiway/himiway-1.png",

  //   ],
  //   features: ["750W motor", "960Wh battery", "26×4.0 tires"],
  //   category: ["Electric Bike", "Mountain" , "yatdim"],
  //   rating: 4.8,
  //   reviewCount: 62,
  //   specifications: {
  //     motor: "750W hub",
  //     battery: "48V 20Ah",
  //     range: "80 miles",
  //     speed: "32 km/h",
  //     weight: "36 kg",
  //     wheelSize: "26×4.0",
  //     foldable: false,
  //     brakes: "Hydraulic disc",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: {
  //       model: "D5 Zebra",
  //       frameType: "Step-over",
  //       frameMaterial: "Aluminum",
  //       foldable: false,
  //       dimensions: { unfolded: "N/A", folded: "" },
  //       weight: "36 kg",
  //       maxLoad: "180 kg",
  //       recommendedHeight: "160-195 cm"
  //     },
  //     motor: { type: "Hub", power: "750W", peakPower: "1000W", torque: "86Nm", location: "Rear hub" },
  //     battery: { type: "Lithium", voltage: "48V", capacity: "20Ah", capacityWh: "960Wh", removable: true, chargingTime: "7h", batteryLife: "1000 cycles" },
  //     performance: { maxSpeed: "32 km/h", range: { pureElectric: "60", pedalAssist: "80", combined: "80" }, gradability: "20°" },
  //     wheels: { size: "26×4.0", tireType: "Fat", tireSize: "26×4.0" },
  //     brakes: { front: "Hydraulic disc", rear: "Hydraulic disc", type: "Hydraulic" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "Color LCD", lights: { front: true, rear: true }, horn: true, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: false }, seat: { type: "Comfort", adjustable: true }, handlebar: { type: "Riser", adjustable: false } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: true, basket: false, bottleHolder: true }
  //   },
  //   description: "All-terrain e-bike with fat tires and long range.",
  //   keyFeatures: ["Hydraulic brakes", "Samsung/LG battery", "Shimano drivetrain"],
  //   availableColors: ["Grey", "White"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // },
  // {
  //   id: "18",
  //   name: "DOTMALL PASEBIKE C29 Pro",
  //   slug: "dotmall-c29-pro",
  //   originalPrice: 1599,
  //   price: 1399,
  //   discount: "12%",
  //   image: "/images/PASEBIKE/pase-1.jpg",
  //   images: [
  //     "/images/PASEBIKE/pase-1.jpg",

  //   ],
  //   features: ["500W motor", "29-inch wheels", "Shimano gears"],
  //   category: ["Electric Bike", "Mountain" , "yatdim"],
  //   rating: 4.7,
  //   reviewCount: 41,
  //   specifications: {
  //     motor: "500W hub",
  //     battery: "48V 15Ah",
  //     range: "70 miles",
  //     speed: "32 km/h",
  //     weight: "32 kg",
  //     wheelSize: "29",
  //     foldable: false,
  //     brakes: "Disc",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: { model: "C29 Pro", frameType: "Hardtail", frameMaterial: "Aluminum", foldable: false, dimensions: { unfolded: "N/A", folded: "" }, weight: "32 kg", maxLoad: "150 kg", recommendedHeight: "160-190 cm" },
  //     motor: { type: "Hub", power: "500W", peakPower: "750W", location: "Rear hub" },
  //     battery: { type: "Lithium", voltage: "48V", capacity: "15Ah", capacityWh: "720Wh", removable: true, chargingTime: "6h", batteryLife: "800 cycles" },
  //     performance: { maxSpeed: "32 km/h", range: { pureElectric: "50", pedalAssist: "70", combined: "70" }, gradability: "15°" },
  //     wheels: { size: "29", tireType: "MTB", tireSize: "29×2.4" },
  //     brakes: { front: "Disc", rear: "Disc", type: "Mechanical" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "LCD", lights: { front: true, rear: true }, horn: false, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: false }, seat: { type: "MTB", adjustable: true }, handlebar: { type: "Flat", adjustable: false } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: false, rack: false, basket: false, bottleHolder: true }
  //   },
  //   description: "29-inch MTB style e-bike with long range and solid build.",
  //   keyFeatures: ["29-inch tires", "500W hub motor", "Shimano gears"],
  //   availableColors: ["Black"],
  //   availableSizes: ["M", "L"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // },
  // {
  //   id: "19",
  //   name: "DOTMALL 250W All Terrain",
  //   slug: "dotmall-250w-all-terrain",
  //   originalPrice: 1399,
  //   price: 1199,
  //   discount: "14%",
  //   image: "/images/DOTMALL/dotmall-1.png",
  //   images: [
  //     "/images/DOTMALL/dotmall-1.png",
  //     "/images/DOTMALL/dotmall-2.png",
  //     "/images/DOTMALL/dotmall-3.png",
  //     "/images/DOTMALL/dotmall-4.png",
  //     "/images/DOTMALL/dotmall-5.png",
  //     "/images/DOTMALL/dotmall-6.png",

  //   ],
  //   features: ["250W motor", "52V 20Ah battery", "All terrain"],
  //   category: ["Electric Bike", "Fat Tire" , "yatdim"],
  //   rating: 4.6,
  //   reviewCount: 30,
  //   specifications: {
  //     motor: "250W hub",
  //     battery: "52V 20Ah",
  //     range: "90 miles",
  //     speed: "25 km/h",
  //     weight: "34 kg",
  //     wheelSize: "26×4.0",
  //     foldable: false,
  //     brakes: "Disc",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: { model: "DOTMALL 250W All Terrain", frameType: "Hardtail", frameMaterial: "Aluminum", foldable: false, dimensions: { unfolded: "N/A", folded: "" }, weight: "34 kg", maxLoad: "150 kg", recommendedHeight: "160-190 cm" },
  //     motor: { type: "Hub", power: "250W", peakPower: "500W", location: "Rear hub" },
  //     battery: { type: "Lithium", voltage: "52V", capacity: "20Ah", capacityWh: "1040Wh", removable: true, chargingTime: "7h", batteryLife: "800 cycles" },
  //     performance: { maxSpeed: "25 km/h", range: { pureElectric: "70", pedalAssist: "90", combined: "90" }, gradability: "15°" },
  //     wheels: { size: "26×4.0", tireType: "Fat", tireSize: "26×4.0" },
  //     brakes: { front: "Disc", rear: "Disc", type: "Mechanical" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "LCD", lights: { front: true, rear: true }, horn: false, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: false }, seat: { type: "Comfort", adjustable: true }, handlebar: { type: "Riser", adjustable: false } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: false, basket: false, bottleHolder: true }
  //   },
  //   description: "Affordable all-terrain fat tire e-bike with long battery life.",
  //   keyFeatures: ["52V battery", "Fat tires", "Shimano gears"],
  //   availableColors: ["Black"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // },
  // {
  //   id: "20",
  //   name: "Eahora Juliet III 2000W",
  //   slug: "eahora-juliet-iii",
  //   originalPrice: 2499,
  //   price: 1999,
  //   discount: "20%",
  //   image: "/images/Juliet/july-2.png",
  //   images: [
  //     "/images/Juliet/july-2.png",
  //     "/images/Juliet/july-1.png",
  //     "/images/Juliet/july-3.png",
  //     "/images/Juliet/july-4.png",
  //     "/images/Juliet/july-5.png",
  //     "/images/Juliet/july-6.png",

  //   ],
  //   features: ["2000W dual motor", "52V 20Ah battery", "Full suspension"],
  //   category: ["Electric Bike", "Mountain" , "yatdim"],
  //   rating: 4.9,
  //   reviewCount: 55,
  //   specifications: {
  //     motor: "2000W dual hub",
  //     battery: "52V 20Ah",
  //     range: "60 miles",
  //     speed: "50 km/h",
  //     weight: "40 kg",
  //     wheelSize: "26×4.0",
  //     foldable: false,
  //     brakes: "Hydraulic disc",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: { model: "Juliet III", frameType: "Full suspension", frameMaterial: "Aluminum", foldable: false, dimensions: { unfolded: "N/A", folded: "" }, weight: "40 kg", maxLoad: "150 kg", recommendedHeight: "165-195 cm" },
  //     motor: { type: "Dual hub", power: "2000W", peakPower: "2600W", location: "Front+Rear" },
  //     battery: { type: "Lithium", voltage: "52V", capacity: "20Ah", capacityWh: "1040Wh", removable: true, chargingTime: "7h", batteryLife: "800 cycles" },
  //     performance: { maxSpeed: "50 km/h", range: { pureElectric: "50", pedalAssist: "60", combined: "60" }, gradability: "25°" },
  //     wheels: { size: "26×4.0", tireType: "Fat", tireSize: "26×4.0" },
  //     brakes: { front: "Hydraulic disc", rear: "Hydraulic disc", type: "Hydraulic" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "LCD", lights: { front: true, rear: true }, horn: true, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: true }, seat: { type: "Comfort", adjustable: true }, handlebar: { type: "Riser", adjustable: true } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: false, basket: false, bottleHolder: true }
  //   },
  //   description: "High-power dual motor full suspension e-bike for off-road riders.",
  //   keyFeatures: ["2000W motors", "Full suspension", "Hydraulic brakes"],
  //   availableColors: ["Black", "Red"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // },
  // {
  //   id: "21",
  //   name: "Grace Electric City Bike",
  //   slug: "grace-electric-city-bike",
  //   originalPrice: 1299,
  //   price: 1099,
  //   discount: "15%",
  //   image: "/images/Grace/grace-1.png",
  //   images: [
  //     "/images/Grace/grace-1.png",
  //     "/images/Grace/grace-2.png",
  //     "/images/Grace/grace-3.png",

  //   ],
  //   features: ["City commuter", "Lightweight frame", "Step-through"],
  //   category: ["Electric Bike", "City" , "yatdim"],
  //   rating: 4.5,
  //   reviewCount: 25,
  //   specifications: {
  //     motor: "350W hub",
  //     battery: "36V 10Ah",
  //     range: "50 miles",
  //     speed: "25 km/h",
  //     weight: "24 kg",
  //     wheelSize: "28",
  //     foldable: false,
  //     brakes: "V-brake",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 6-speed"
  //   },
  //   technicalSpecifications: {
  //     general: { model: "Grace City", frameType: "Step-through", frameMaterial: "Aluminum", foldable: false, dimensions: { unfolded: "N/A", folded: "" }, weight: "24 kg", maxLoad: "120 kg", recommendedHeight: "150-180 cm" },
  //     motor: { type: "Hub", power: "350W", peakPower: "500W", location: "Rear hub" },
  //     battery: { type: "Lithium", voltage: "36V", capacity: "10Ah", capacityWh: "360Wh", removable: true, chargingTime: "5h", batteryLife: "600 cycles" },
  //     performance: { maxSpeed: "25 km/h", range: { pureElectric: "40", pedalAssist: "50", combined: "50" }, gradability: "10°" },
  //     wheels: { size: "28", tireType: "City", tireSize: "28×1.75" },
  //     brakes: { front: "V-brake", rear: "V-brake", type: "Rim" },
  //     transmission: { type: "Derailleur", gears: "6" },
  //     electrical: { display: "LCD", lights: { front: true, rear: false }, horn: false, throttle: false, assistLevels: "3" },
  //     comfort: { suspension: { front: true, rear: false }, seat: { type: "Comfort", adjustable: true }, handlebar: { type: "City", adjustable: true } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX3" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: true, basket: true, bottleHolder: false }
  //   },
  //   description: "Elegant step-through commuter e-bike designed for daily city rides.",
  //   keyFeatures: ["Lightweight design", "Step-through frame", "Comfy saddle"],
  //   availableColors: ["Blue", "White"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // },
  // {
  //   id: "22",
  //   name: "1000W Dual Motor Electric Bike",
  //   slug: "1000w-dual-motor-electric-bike",
  //   originalPrice: 2399,
  //   price: 1899,
  //   discount: "21%",
  //   image: "/images/1000W/pic-1.png",
  //   images: [
  //     "/images/1000W/pic-1.png",
  //     "/images/1000W/pic-2.png",
  //     "/images/1000W/pic-3.png",
      
  //   ],
  //   features: ["Dual motor", "Off-road", "Full suspension"],
  //   category: ["Electric Bike", "Mountain" , "yatdim"],
  //   rating: 4.7,
  //   reviewCount: 38,
  //   specifications: {
  //     motor: "1000W dual hub",
  //     battery: "52V 20Ah",
  //     range: "65 miles",
  //     speed: "45 km/h",
  //     weight: "38 kg",
  //     wheelSize: "26×4.0",
  //     foldable: false,
  //     brakes: "Hydraulic disc",
  //     frame: "Aluminum",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: { model: "Dual 1000W", frameType: "Full suspension", frameMaterial: "Aluminum", foldable: false, dimensions: { unfolded: "N/A", folded: "" }, weight: "38 kg", maxLoad: "150 kg", recommendedHeight: "165-195 cm" },
  //     motor: { type: "Dual hub", power: "1000W", peakPower: "2000W", location: "Front+Rear" },
  //     battery: { type: "Lithium", voltage: "52V", capacity: "20Ah", capacityWh: "1040Wh", removable: true, chargingTime: "7h", batteryLife: "800 cycles" },
  //     performance: { maxSpeed: "45 km/h", range: { pureElectric: "50", pedalAssist: "65", combined: "65" }, gradability: "25°" },
  //     wheels: { size: "26×4.0", tireType: "Fat", tireSize: "26×4.0" },
  //     brakes: { front: "Hydraulic disc", rear: "Hydraulic disc", type: "Hydraulic" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "LCD", lights: { front: true, rear: true }, horn: true, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: true }, seat: { type: "Comfort", adjustable: true }, handlebar: { type: "Riser", adjustable: true } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: false, basket: false, bottleHolder: true }
  //   },
  //   description: "Powerful off-road dual motor bike built for extreme terrains.",
  //   keyFeatures: ["1000W dual motors", "Full suspension", "Hydraulic brakes"],
  //   availableColors: ["Black", "Orange"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // },
  // {
  //   id: "23",
  //   name: "Eahora LUNA II",
  //   slug: "eahora-luna-ii",
  //   originalPrice: 2199,
  //   price: 1799,
  //   discount: "18%",
  //   image: "/images/LUNA/luna-2.png",
  //   images: [
  //     "/images/LUNA/luna-1.png",
  //     "/images/LUNA/luna-2.png",
  //     "/images/LUNA/luna-3.png",
  //     "/images/LUNA/luna-4.png",
  //     "/images/LUNA/luna-5.png",
  //     "/images/LUNA/luna-6.png",

  //   ],
  //   features: ["750W motor", "Custom frame", "Comfort cruiser"],
  //   category: ["Electric Bike", "Cruiser" , "yatdim"],
  //   rating: 4.8,
  //   reviewCount: 47,
  //   specifications: {
  //     motor: "750W hub",
  //     battery: "48V 15Ah",
  //     range: "70 miles",
  //     speed: "32 km/h",
  //     weight: "34 kg",
  //     wheelSize: "26×3.0",
  //     foldable: false,
  //     brakes: "Hydraulic disc",
  //     frame: "Steel",
  //     drivetrain: "Shimano 7-speed"
  //   },
  //   technicalSpecifications: {
  //     general: { model: "LUNA II", frameType: "Cruiser", frameMaterial: "Steel", foldable: false, dimensions: { unfolded: "N/A", folded: "" }, weight: "34 kg", maxLoad: "150 kg", recommendedHeight: "160-190 cm" },
  //     motor: { type: "Hub", power: "750W", peakPower: "1000W", location: "Rear hub" },
  //     battery: { type: "Lithium", voltage: "48V", capacity: "15Ah", capacityWh: "720Wh", removable: true, chargingTime: "6h", batteryLife: "800 cycles" },
  //     performance: { maxSpeed: "32 km/h", range: { pureElectric: "50", pedalAssist: "70", combined: "70" }, gradability: "20°" },
  //     wheels: { size: "26×3.0", tireType: "Cruiser", tireSize: "26×3.0" },
  //     brakes: { front: "Hydraulic disc", rear: "Hydraulic disc", type: "Hydraulic" },
  //     transmission: { type: "Derailleur", gears: "7" },
  //     electrical: { display: "LCD", lights: { front: true, rear: true }, horn: true, throttle: true, assistLevels: "5" },
  //     comfort: { suspension: { front: true, rear: false }, seat: { type: "Cruiser", adjustable: true }, handlebar: { type: "Cruiser", adjustable: true } },
  //     safety: { reflectors: true, bell: true, waterResistance: "IPX4" },
  //     connectivity: { app: false },
  //     accessories: { kickstand: true, mudguards: true, rack: false, basket: false, bottleHolder: true }
  //   },
  //   description: "Stylish cruiser e-bike with comfort-focused design.",
  //   keyFeatures: ["Cruiser style", "750W hub motor", "Hydraulic brakes"],
  //   availableColors: ["Red", "Black"],
  //   availableSizes: ["One size"],
  //   whatsInTheBox: ["Bike", "Battery", "Charger"]
  // }
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

export const getProductById = (id: string) => {
  return PRODUCTS_DATA.find(product => product.id === id);
};