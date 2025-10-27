

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
    originalPrice: 5700,
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
    category: ["sammenleggbar", "by-pendler"],
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
    originalPrice: 7999,
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
    category: ["sammenleggbar", "by-pendler"],
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
    originalPrice: 9999,
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
    category: ["by-pendler", "hybrid"],
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
    originalPrice: 7999,
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
    category: ["by-pendler", "hybrid"],
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
    originalPrice: 12999,
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
    category: ["fatbike", "sammenleggbar"],
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
    originalPrice: 9999,
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
    category: ["by-pendler", "hybrid"],
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

  // 1. JOBOBIKE Luxe
{
  id: "luxe-001",
  name: "JOBOBIKE Luxe",
  slug: "jobobike-luxe",
  originalPrice: 2299,
  price: 2099,
  discount: "9%",
  image: "/images/luxe/luxe-1.png",
  images: [
    "/images/luxe/luxe-1.png",
    "/images/luxe/luxe-2.png",
  ],
  features: [
    "Carbon belt drive system",
    "Internal 8-speed transmission",
    "Hydraulic brakes",
    "Smart App connectivity via Bluetooth",
    "Automatic brake light sensing"
  ],
  badge: "Smart Tech",
  category: ["Pendler"],
  rating: 4.8,
  reviewCount: 89,
  specifications: {
    motor: "250W Mid-Drive, 90Nm",
    battery: "36V 15Ah (540Wh)",
    range: "90km",
    speed: "25 km/h",
    weight: "24kg",
    wheelSize: "27.5\"",
    foldable: false,
    brakes: "Hydraulic disc brakes",
    frame: "Aluminum alloy",
    drivetrain: "Internal 8-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Luxe",
      frameType: "Step-over urban frame",
      frameMaterial: "Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "180cm x 110cm x 65cm",
        folded: "N/A"
      },
      weight: "24kg",
      maxLoad: "120kg",
      recommendedHeight: "165-195cm"
    },
    motor: {
      type: "Mid-drive motor",
      power: "250W",
      peakPower: "400W",
      torque: "90Nm",
      location: "Center",
      torqueSensor: true
    },
    battery: {
      type: "Lithium-ion with BMS",
      voltage: "36V",
      capacity: "15Ah",
      capacityWh: "540Wh",
      removable: true,
      chargingTime: "4-6 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "45km",
        pedalAssist: "90km",
        combined: "65km"
      },
      gradability: "15°",
      turningRadius: "2.5m"
    },
    wheels: {
      size: "27.5\"",
      tireType: "Urban tires",
      tireSize: "27.5\" x 2.1\"",
      rimMaterial: "Aluminum alloy"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Hydraulic disc"
    },
    transmission: {
      type: "Internal hub gears",
      gears: "8-speed",
      shifter: "Grip shift"
    },
    electrical: {
      display: "Bluetooth LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with automatic brake light"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels + auto"
    },
    comfort: {
      suspension: {
        front: false,
        rear: false,
        type: "Rigid"
      },
      seat: {
        type: "Comfort saddle",
        adjustable: true,
        material: "Synthetic leather"
      },
      handlebar: {
        type: "Urban handlebar",
        adjustable: true,
        material: "Aluminum alloy"
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
      rack: true,
      basket: false,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Luxe is a premium smart urban e-bike that combines technology and elegance. Featuring a maintenance-free carbon belt drive system and internal 8-speed transmission, it offers a smooth, quiet, and low-maintenance riding experience. The integrated Bluetooth app allows real-time monitoring of riding data and personalized settings, making urban commuting smarter and more relaxed.",
  keyFeatures: [
    "Carbon belt drive - maintenance-free up to 30,000km",
    "Smart App integration for real-time data monitoring",
    "Internal 8-speed transmission for smooth shifting",
    "Hydraulic brakes for all-weather performance",
    "Automatic brake light sensing function",
    "27.5\" large tires with anti-puncture and reflective strips",
    "5 levels of electric assist plus automatic mode",
    "Quick-release design for easy accessory installation"
  ],
  availableColors: ["Silver Gray", "Snow White"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Luxe e-bike",
    "36V 15Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Kickstand",
    "Bell"
  ]
},

// 2. JOBOBIKE Robin
{
  id: "robin-001",
  name: "JOBOBIKE Robin",
  slug: "jobobike-robin",
  originalPrice: 1699,
  price: 1399,
  discount: "18%",
  image: "/images/robin/robin-1.png",
  images: [
    "/images/robin/robin-1.png",
    "/images/robin/robin-2.png",
    "/images/robin/robin-3.png",
  ],
  features: [
    "26\" x 4.0\" fat tires",
    "80mm RST hydraulic suspension",
    "Powerful Bafang 250W motor with 80Nm torque",
    "All-terrain capability",
    "USB charging port"
  ],
  badge: "All-Terrain",
  category: ["Fatbike"],
  rating: 4.7,
  reviewCount: 156,
  specifications: {
    motor: "250W Bafang Hub, 80Nm",
    battery: "48V 13Ah (624Wh)",
    range: "65km",
    speed: "25 km/h",
    weight: "32kg",
    wheelSize: "26\"",
    foldable: false,
    brakes: "Hydraulic disc brakes",
    frame: "6061 Aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Robin",
      frameType: "High frame / Step-through available",
      frameMaterial: "6061 Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "190cm x 120cm x 75cm",
        folded: "N/A"
      },
      weight: "32kg",
      maxLoad: "150kg",
      recommendedHeight: "160-200cm"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "500W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "Lithium-ion with BMS",
      voltage: "48V",
      capacity: "13Ah",
      capacityWh: "624Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "40km",
        pedalAssist: "65km",
        combined: "55km"
      },
      gradability: "20°",
      turningRadius: "3m"
    },
    wheels: {
      size: "26\"",
      tireType: "Fat tires",
      tireSize: "26\" x 4.0\"",
      rimMaterial: "Aluminum alloy wide rim"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Hydraulic disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "Color LCD with USB port",
      lights: {
        front: true,
        rear: true,
        type: "LED 60 LUX front, brake light rear"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: true,
        rear: false,
        type: "RST hydraulic suspension 80mm"
      },
      seat: {
        type: "Velo leather comfort saddle",
        adjustable: true,
        material: "Leather"
      },
      handlebar: {
        type: "Mountain bike handlebar 720mm",
        adjustable: false,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE", "TUV"]
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
      rack: false,
      basket: false,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Robin is the most powerful and dynamic fat tire e-bike in the lineup. Born for adventure, it excels on bumpy forest trails, mountains, and even snowy terrain where regular bikes can't go. With 26\" x 4.0\" fat tires and RST hydraulic suspension, Robin delivers exceptional traction and stability across all terrains.",
  keyFeatures: [
    "26\" x 4.0\" CST/Kenda fat tires with run-flat technology",
    "80mm RST hydraulic suspension with rebound adjustment",
    "Bafang 250W brushless motor with 80Nm torque",
    "48V 13Ah (624Wh) battery with BMS protection",
    "Hydraulic disc brakes for all-weather stopping power",
    "Color LCD display with USB charging port",
    "Shimano 7-speed for terrain adaptation",
    "High frame and step-through options available"
  ],
  availableColors: ["Black-Red", "Gray-Green"],
  availableSizes: ["High Frame", "Step-Through"],
  whatsInTheBox: [
    "JOBOBIKE Robin e-bike",
    "48V 13Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front LED light (60 LUX)",
    "Rear brake light",
    "Kickstand",
    "Bell"
  ]
},

// 3. JOBOBIKE Robin Pro
{
  id: "robin-pro-001",
  name: "JOBOBIKE Robin Pro",
  slug: "jobobike-robin-pro",
  originalPrice: 2099,
  price: 1799,
  discount: "14%",
  image: "/images/robin-pro/robin-pro-1.png",
  images: [
    "/images/robin-pro/robin-pro-1.png",
  ],
  features: [
    "Extended range 48V 20Ah battery",
    "26\" x 4.0\" fat tires",
    "80mm RST hydraulic suspension",
    "90km range on single charge",
    "Premium all-terrain performance"
  ],
  badge: "Extended Range",
  category: ["Fatbike" , "Pendler"],
  rating: 4.9,
  reviewCount: 98,
  specifications: {
    motor: "250W Bafang Hub, 80Nm",
    battery: "48V 20Ah (960Wh)",
    range: "90km",
    speed: "25 km/h",
    weight: "34kg",
    wheelSize: "26\"",
    foldable: false,
    brakes: "Hydraulic disc brakes",
    frame: "6061 Aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Robin Pro",
      frameType: "High frame / Step-through available",
      frameMaterial: "6061 Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "190cm x 120cm x 75cm",
        folded: "N/A"
      },
      weight: "34kg",
      maxLoad: "150kg",
      recommendedHeight: "160-200cm"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "500W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "Lithium-ion with BMS",
      voltage: "48V",
      capacity: "20Ah",
      capacityWh: "960Wh",
      removable: true,
      chargingTime: "8-10 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "50km",
        pedalAssist: "90km",
        combined: "70km"
      },
      gradability: "20°",
      turningRadius: "3m"
    },
    wheels: {
      size: "26\"",
      tireType: "Fat tires",
      tireSize: "26\" x 4.0\"",
      rimMaterial: "Aluminum alloy wide rim"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Hydraulic disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "Color LCD with USB port",
      lights: {
        front: true,
        rear: true,
        type: "LED 60 LUX front, brake light rear"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: true,
        rear: false,
        type: "RST hydraulic suspension 80mm"
      },
      seat: {
        type: "Velo leather comfort saddle",
        adjustable: true,
        material: "Leather"
      },
      handlebar: {
        type: "Mountain bike handlebar 720mm",
        adjustable: false,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE", "TUV"]
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
      rack: false,
      basket: false,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Robin Pro is the upgraded version of the popular Robin fat tire e-bike, featuring an extended range 48V 20Ah (960Wh) battery that delivers up to 90km on a single charge. Perfect for longer adventures on forest trails, mountains, and challenging terrains where standard bikes can't venture.",
  keyFeatures: [
    "Extended 48V 20Ah (960Wh) battery for 90km range",
    "26\" x 4.0\" CST/Kenda fat tires with run-flat technology",
    "80mm RST hydraulic suspension with rebound adjustment",
    "Bafang 250W brushless motor with 80Nm torque",
    "Hydraulic disc brakes for superior stopping power",
    "Color LCD display with USB charging port",
    "Shimano 7-speed transmission",
    "Available in multiple premium colors"
  ],
  availableColors: ["Black-Red", "Grey-Green", "Black-Gold", "Black-Blue"],
  availableSizes: ["High Frame", "Step-Through"],
  whatsInTheBox: [
    "JOBOBIKE Robin Pro e-bike",
    "48V 20Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front LED light (60 LUX)",
    "Rear brake light",
    "Kickstand",
    "Bell"
  ]
},

// 4. JOBOBIKE Romer
{
  id: "romer-001",
  name: "JOBOBIKE Romer",
  slug: "jobobike-romer",
  originalPrice: 1999,
  price: 1799,
  discount: "10%",
  image: "/images/romer/romer-1.png",
  images: [
    "/images/romer/romer-1.png",
    "/images/romer/romer-2.png",
    "/images/romer/romer-3.png",
    "/images/romer/romer-4.png",
    "/images/romer/romer-5.png",
  ],
  features: [
    "Foldable design for easy transport",
    "20\" fat tires for stability",
    "Step-through frame",
    "Compatible with various accessories",
    "150km range in eco mode"
  ],
  badge: "Utility",
  category: ["Sammenleggbar" , "Fatbike"],
  rating: 4.6,
  reviewCount: 112,
  specifications: {
    motor: "250W Hub, 80Nm",
    battery: "48V 13Ah (624Wh)",
    range: "65-150km",
    speed: "25 km/h",
    weight: "30kg",
    wheelSize: "20\"",
    foldable: true,
    brakes: "Mechanical disc brakes",
    frame: "Double-layer aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Romer",
      frameType: "Step-through foldable",
      frameMaterial: "Double-layer aluminum alloy",
      foldable: true,
      dimensions: {
        unfolded: "165cm x 110cm x 70cm",
        folded: "106cm x 60cm x 86cm"
      },
      weight: "30kg",
      maxLoad: "150kg",
      recommendedHeight: "160cm+"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "450W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "LG Lithium-ion with BMS",
      voltage: "48V",
      capacity: "13Ah",
      capacityWh: "624Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "45km",
        pedalAssist: "150km",
        combined: "65km"
      },
      gradability: "18°",
      turningRadius: "2.2m"
    },
    wheels: {
      size: "20\"",
      tireType: "Fat tires",
      tireSize: "20\" x 4.0\"",
      rimMaterial: "Aluminum alloy"
    },
    brakes: {
      front: "Mechanical disc brake",
      rear: "Mechanical disc brake",
      type: "Tektro mechanical disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with waterproof wiring"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: false,
        rear: false,
        type: "Rigid with fat tire cushioning"
      },
      seat: {
        type: "Comfort saddle",
        adjustable: true,
        material: "Synthetic leather"
      },
      handlebar: {
        type: "Foldable handlebar",
        adjustable: true,
        material: "Aluminum alloy"
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
  description: "JOBOBIKE Romer is a versatile utility e-bike designed for maximum practicality. With its foldable design and step-through frame, it's perfect for commuters who need easy transport and storage. The double-layer frame provides extra strength while protecting the battery, and it's compatible with various accessories like trailers, baby seats, and baskets.",
  keyFeatures: [
    "Foldable design - compact storage at 106cm x 60cm x 86cm",
    "20\" fat tires for stable, comfortable ride on all terrains",
    "Step-through frame for easy mounting/dismounting",
    "Double-layer frame for extra strength and battery protection",
    "Compatible with trailer, baby seat, and cargo accessories",
    "250W motor with 80Nm torque",
    "Up to 150km range in eco mode",
    "Rust-resistant foldable pedals"
  ],
  availableColors: ["Mint Cream", "Dark Olive"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Romer e-bike",
    "48V 13Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Foldable pedals",
    "Kickstand",
    "Mudguards",
    "Bell"
  ]
},

// 5. JOBOBIKE Romer Pro
{
  id: "romer-pro-001",
  name: "JOBOBIKE Romer Pro",
  slug: "jobobike-romer-pro",
  originalPrice: 2199,
  price: 1999,
  discount: "9%",
  image: "/images/romer-pro/romer-1.png",
  images: [
    "/images/romer-pro/romer-1.png",
  ],
  features: [
    "Hydraulic disc brakes",
    "Torque sensor technology",
    "Suspension seatpost",
    "Foldable utility design",
    "Enhanced cargo capacity"
  ],
  badge: "Pro Utility",
  category: ["Lastesykkel" , "Sammenleggbar"],
  rating: 4.8,
  reviewCount: 87,
  specifications: {
    motor: "250W Bafang Hub, 80Nm",
    battery: "48V 15Ah (720Wh)",
    range: "70-160km",
    speed: "25 km/h",
    weight: "31kg",
    wheelSize: "20\"",
    foldable: true,
    brakes: "Hydraulic disc brakes",
    frame: "Double-layer aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Romer Pro",
      frameType: "Step-through foldable",
      frameMaterial: "Double-layer aluminum alloy",
      foldable: true,
      dimensions: {
        unfolded: "165cm x 110cm x 70cm",
        folded: "106cm x 60cm x 86cm"
      },
      weight: "31kg",
      maxLoad: "150kg",
      recommendedHeight: "160cm+"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "500W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: true
    },
    battery: {
      type: "LG Lithium-ion with BMS",
      voltage: "48V",
      capacity: "15Ah",
      capacityWh: "720Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "50km",
        pedalAssist: "160km",
        combined: "70km"
      },
      gradability: "18°",
      turningRadius: "2.2m"
    },
    wheels: {
      size: "20\"",
      tireType: "Fat tires",
      tireSize: "20\" x 4.0\"",
      rimMaterial: "Aluminum alloy"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Tektro hydraulic disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "Advanced LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with waterproof wiring"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: false,
        rear: true,
        type: "Suspension seatpost"
      },
      seat: {
        type: "Premium comfort saddle",
        adjustable: true,
        material: "Synthetic leather"
      },
      handlebar: {
        type: "Foldable handlebar",
        adjustable: true,
        material: "Aluminum alloy"
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
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Romer Pro is the upgraded version of the popular Romer utility e-bike. It features hydraulic disc brakes for superior stopping power, a torque sensor for more natural pedal assist, and a suspension seatpost for enhanced comfort. Perfect for daily commuting, family outings, and cargo transport.",
  keyFeatures: [
    "Hydraulic disc brakes for stronger, more stable braking",
    "Torque sensor for smooth, natural power assistance",
    "Suspension seatpost for enhanced comfort",
    "48V 15Ah (720Wh) battery for extended range",
    "Foldable design with double-layer reinforced frame",
    "20\" fat tires for stability on all terrains",
    "Compatible with cargo accessories and child seats",
    "Advanced LCD display with USB port"
  ],
  availableColors: ["Jungle Green", "Dark Olive", "Blue Grey"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Romer Pro e-bike",
    "48V 15Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Foldable pedals",
    "Kickstand",
    "Mudguards",
    "Rear rack",
    "Bell"
  ]
},

// 6. JOBOBIKE Ace Pro
{
  id: "ace-pro-001",
  name: "JOBOBIKE Ace Pro",
  slug: "jobobike-ace-pro",
  originalPrice: 2499,
  price: 2199,
  discount: "12%",
  image: "/images/ace-pro/ace-pro-1.jpeg",
  images: [
    "/images/ace-pro/ace-pro-1.jpeg",
  ],
  features: [
    "Full suspension system",
    "27.5\" x 2.8\" all-terrain tires",
    "500W Bafang motor with 95Nm torque",
    "Hydraulic brakes with cutoff sensors",
    "Premium color LCD display"
  ],
  badge: "Performance",
  category: ["Terreng"],
  rating: 4.9,
  reviewCount: 134,
  specifications: {
    motor: "500W Bafang Mid-Drive, 95Nm",
    battery: "48V 17.5Ah (840Wh)",
    range: "80-120km",
    speed: "25 km/h",
    weight: "28kg",
    wheelSize: "27.5\"",
    foldable: false,
    brakes: "Tektro hydraulic disc brakes",
    frame: "Aluminum alloy full suspension",
    drivetrain: "Shimano 9-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Ace Pro",
      frameType: "Full suspension mountain frame",
      frameMaterial: "6061 Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "185cm x 115cm x 72cm",
        folded: "N/A"
      },
      weight: "28kg",
      maxLoad: "130kg",
      recommendedHeight: "170-195cm"
    },
    motor: {
      type: "Mid-drive motor",
      power: "500W",
      peakPower: "750W",
      torque: "95Nm",
      location: "Center",
      torqueSensor: true
    },
    battery: {
      type: "Samsung Lithium-ion with BMS",
      voltage: "48V",
      capacity: "17.5Ah",
      capacityWh: "840Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "1000+ charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h (EU) / 32 km/h (configurable)",
      range: {
        pureElectric: "50km",
        pedalAssist: "120km",
        combined: "80km"
      },
      gradability: "25°",
      turningRadius: "2.8m"
    },
    wheels: {
      size: "27.5\"",
      tireType: "All-terrain plus tires",
      tireSize: "27.5\" x 2.8\"",
      rimMaterial: "Double-wall aluminum alloy"
    },
    brakes: {
      front: "Tektro hydraulic disc 180mm",
      rear: "Tektro hydraulic disc 180mm",
      type: "Hydraulic disc with motor cutoff"
    },
    transmission: {
      type: "External derailleur",
      gears: "9-speed Shimano",
      shifter: "Shimano Alivio"
    },
    electrical: {
      display: "Premium color LCD with Bluetooth",
      lights: {
        front: true,
        rear: true,
        type: "High-power LED with multiple modes"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels + walk mode"
    },
    comfort: {
      suspension: {
        front: true,
        rear: true,
        type: "Full suspension - Front: 120mm travel, Rear: 100mm travel"
      },
      seat: {
        type: "Performance saddle",
        adjustable: true,
        material: "Premium synthetic leather"
      },
      handlebar: {
        type: "MTB riser bar 760mm",
        adjustable: false,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX5",
      certification: ["EN15194", "CE", "TUV"]
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
  description: "JOBOBIKE Ace Pro is the ultimate performance e-mountain bike designed for serious riders who demand the best. Featuring a powerful 500W Bafang mid-drive motor with 95Nm torque, full suspension system, and premium components throughout, the Ace Pro conquers the toughest trails with ease while delivering an exhilarating riding experience.",
  keyFeatures: [
    "500W Bafang mid-drive motor with 95Nm torque for exceptional power",
    "Full suspension system (120mm front / 100mm rear) for maximum comfort",
    "27.5\" x 2.8\" plus-size tires for superior traction and stability",
    "48V 17.5Ah Samsung battery for 80-120km range",
    "Tektro hydraulic disc brakes with 180mm rotors",
    "Shimano 9-speed transmission for precise gear changes",
    "Color LCD display with Bluetooth connectivity",
    "Integrated torque sensor for natural pedal assistance"
  ],
  availableColors: ["Matte Black", "Anthracite Grey", "Forest Green"],
  availableSizes: ["M (170-180cm)", "L (180-195cm)"],
  whatsInTheBox: [
    "JOBOBIKE Ace Pro e-bike",
    "48V 17.5Ah Samsung battery with fast charger",
    "User manual and assembly tools",
    "Warranty card",
    "High-power LED front light",
    "LED rear brake light",
    "Kickstand",
    "Mudguards",
    "Bottle holder",
    "Bell",
    "Pedals"
  ]
},

// 7. JOBOBIKE Romer C
{
  id: "romer-c-001",
  name: "JOBOBIKE Romer C",
  slug: "jobobike-romer-c",
  originalPrice: 1899,
  price: 1699,
  discount: "11%",
  image: "/images/romer-c/romer-c.png",
  images: [
   "/images/romer-c/romer-c.png",
  ],
  features: [
    "Enhanced cargo capacity",
    "Reinforced rear rack",
    "20\" fat tires",
    "Foldable cargo design",
    "Heavy-duty construction"
  ],
  badge: "Cargo",
  category: ["Lastesykkel" ,"Sammenleggbar"],
  rating: 4.7,
  reviewCount: 76,
  specifications: {
    motor: "250W Hub, 80Nm",
    battery: "48V 13Ah (624Wh)",
    range: "60-140km",
    speed: "25 km/h",
    weight: "32kg",
    wheelSize: "20\"",
    foldable: true,
    brakes: "Mechanical disc brakes",
    frame: "Reinforced aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Romer C",
      frameType: "Step-through cargo frame",
      frameMaterial: "Reinforced aluminum alloy",
      foldable: true,
      dimensions: {
        unfolded: "165cm x 110cm x 70cm",
        folded: "106cm x 60cm x 86cm"
      },
      weight: "32kg",
      maxLoad: "180kg",
      recommendedHeight: "160cm+"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "450W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "LG Lithium-ion with BMS",
      voltage: "48V",
      capacity: "13Ah",
      capacityWh: "624Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "45km",
        pedalAssist: "140km",
        combined: "60km"
      },
      gradability: "15°",
      turningRadius: "2.2m"
    },
    wheels: {
      size: "20\"",
      tireType: "Fat tires",
      tireSize: "20\" x 4.0\"",
      rimMaterial: "Reinforced aluminum alloy"
    },
    brakes: {
      front: "Mechanical disc brake",
      rear: "Mechanical disc brake",
      type: "Tektro mechanical disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with cargo visibility lights"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: false,
        rear: false,
        type: "Fat tire cushioning"
      },
      seat: {
        type: "Wide comfort saddle",
        adjustable: true,
        material: "Synthetic leather with extra padding"
      },
      handlebar: {
        type: "Swept-back comfort handlebar",
        adjustable: true,
        material: "Aluminum alloy"
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
  description: "JOBOBIKE Romer C is the cargo-focused variant of the popular Romer series, designed specifically for heavy-duty transport needs. With its reinforced frame, enhanced rear rack, and 180kg maximum load capacity, it's perfect for deliveries, shopping trips, or transporting children and cargo. The foldable design ensures easy storage when not in use.",
  keyFeatures: [
    "Reinforced frame with 180kg maximum load capacity",
    "Heavy-duty rear rack designed for cargo boxes and child seats",
    "20\" fat tires for stable cargo transport on all surfaces",
    "Foldable design for convenient storage",
    "Wide comfort saddle with extra padding for longer trips",
    "Compatible with cargo boxes, child seats, and trailers",
    "Double kickstand for stable parking when loaded",
    "Enhanced visibility lights for cargo safety"
  ],
  availableColors: ["Cargo Black", "Industrial Grey"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Romer C e-bike",
    "48V 13Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Heavy-duty rear rack",
    "Double kickstand",
    "Mudguards",
    "Large basket (optional)",
    "Bell",
    "Foldable pedals"
  ]
},
  
  {
    id: "9",
    name: "JOBOBIKE Sam",
    slug: "jobobike-sam",
    originalPrice: 1299,
    price: 1099,
    discount: "15%",
    image: "/images/sam/sam-1.png",
    images: [
      "/images/sam/sam-1.png",
      "/images/sam/sam-2.png",
      "/images/sam/sam-3.png",
      "/images/sam/sam-4.png",
      "/images/sam/sam-5.png",
      "/images/sam/sam-6.png",
      "/images/sam/sam-7.png",
      "/images/sam/sam-8.png",
     
    ],
    features: [
      "350W Rear Hub Motor",
      "36V 12.8Ah Battery",
      "20\" Fat Tires",
      "Foldable Design",
      "5 Assist Levels"
    ],
    category: ["Pendler"],
    rating: 4.3,
    reviewCount: 67,
    specifications: {
      motor: "350W Rear Hub",
      battery: "36V 12.8Ah (461Wh)",
      range: "60-80 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "20\"",
      foldable: true,
      brakes: "Disc Brakes",
      frame: "Aluminum Alloy",
      drivetrain: "7-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Sam",
        frameType: "Foldable",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: true,
        dimensions: {
          unfolded: "160 x 58 x 100 cm",
          folded: "80 x 58 x 70 cm"
        },
        weight: "22 kg",
        maxLoad: "100 kg",
        recommendedHeight: "155-185 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "350W",
        peakPower: "500W",
        torque: "40 N.m",
        location: "Rear Wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "12.8Ah",
        capacityWh: "461Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "600+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "60-80 km",
          combined: "50-70 km"
        },
        gradability: "15°"
      },
      wheels: {
        size: "20\"",
        tireType: "Fat Tire",
        tireSize: "20 x 4.0\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-Speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: false,
        throttle: true,
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
          material: "PU Leather"
        },
        handlebar: {
          type: "Foldable",
          adjustable: true,
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
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Sam is a versatile folding e-bike perfect for urban commuters who need portability without sacrificing performance. Its compact design makes storage and transport effortless.",
    keyFeatures: [
      "Quick-fold mechanism for easy storage",
      "Fat tires for enhanced stability and comfort",
      "Powerful 350W motor for city riding",
      "Removable battery for convenient charging",
      "Compact size perfect for apartments and offices"
    ],
    availableColors: ["Matte Black", "White", "Red"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Sam E-bike",
      "36V 12.8Ah Battery",
      "Battery Charger",
      "User Manual",
      "Folding Guide",
      "Keys (2x)"
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
    category: ["Pendler"],
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
        gradability: "25Â°",
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
    category: ["Pendler" ,"Hybrid"],
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
        gradability: "20Â°"
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
    category: ["Sammenleggbar" , "Hybrid"],
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
        gradability: "20Â°"
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
    category: ["Fatbike"],
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
        gradability: "15Â°"
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
    category: ["Lastesykkel"],
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
        gradability: "20Â°"
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
    category: ["Sammenleggbar"],
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
        gradability: "12Â°"
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
  {
    id: "jobobike-viva",
    name: "JOBOBIKE Viva",
    slug: "jobobike-viva",
    originalPrice: 1699,
    price: 1399,
    discount: "-18%",
    image: "/images/viva/viva-1.png",
    images: [
      "/images/viva/viva-1.png",
      "/images/viva/viva-2.png",
      "/images/viva/viva-3.png",
      "/images/viva/viva-4.png",
      "/images/viva/viva-5.png",

    ],
    features: [
      "Lightweight 22kg aluminum frame",
      "250W XOFO rear hub motor",
      "36V 14Ah LG battery with BMS",
      "28-inch wheels for smooth city riding",
      "Integrated lights and mudguards"
    ],
    badge: "Lightweight",
    category: ["Pendler"],
    rating: 4.7,
    reviewCount: 89,
    specifications: {
      motor: "250W XOFO Rear Hub",
      battery: "36V 14Ah (504Wh)",
      range: "50-70 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Aluminum Alloy 6061",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Viva",
        frameType: "Step-over",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1850 x 680 x 1050 mm",
          folded: "N/A"
        },
        weight: "22 kg",
        maxLoad: "120 kg",
        recommendedHeight: "165-185 cm"
      },
      motor: {
        type: "XOFO Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "30 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "LG Lithium-ion",
        voltage: "36V",
        capacity: "14Ah",
        capacityWh: "504Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "70 km",
          combined: "50-70 km"
        },
        gradability: "15°",
        turningRadius: "2.5m"
      },
      wheels: {
        size: "28\"",
        tireType: "City Tire",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Integrated"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Ergonomic Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "City Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
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
    description: "The JOBOBIKE Viva is the lightest model in the JOBOBIKE family at just 22kg. Designed specifically for urban commuting, it combines elegant design with practical functionality. The lightweight aluminum frame makes it easy to carry and maneuver through city streets, while the 28-inch wheels provide a smooth and comfortable ride. Perfect for fashionable urbanites who value style and comfort.",
    keyFeatures: [
      "Ultra-lightweight 22kg construction",
      "Powerful 250W rear hub motor with 30Nm torque",
      "Long-range 504Wh battery for extended rides",
      "Elegant urban design with integrated components",
      "Reliable Shimano 7-speed transmission",
      "Built-in lights and mudguards for all-weather riding"
    ],
    availableColors: ["Blue", "White", "Black"],
    availableSizes: ["One Size (165-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Viva E-bike",
      "36V 14Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },
  {
    id: "jobobike-viva-st",
    name: "JOBOBIKE Viva ST",
    slug: "jobobike-viva-st",
    originalPrice: 1699,
    price: 1399,
    discount: "-18%",
    image: "/images/viva-st/viva-st-1.png",
    images: [
      "/images/viva-st/viva-st-1.png",
      "/images/viva-st/viva-st-2.png",
      "/images/viva-st/viva-st-3.png",
      "/images/viva-st/viva-st-4.png",
      "/images/viva-st/viva-st-5.png",
    ],
    features: [
      "Step-through frame for easy mounting",
      "Lightweight 22kg design",
      "250W rear hub motor",
      "36V 10.4Ah battery",
      "Perfect for city commuting"
    ],
    badge: "Step-Through",
    category: ["Pendler"],
    rating: 4.8,
    reviewCount: 76,
    specifications: {
      motor: "250W XOFO Rear Hub",
      battery: "36V 10.4Ah (374Wh)",
      range: "40-60 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Step-through Aluminum Alloy",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Viva ST",
        frameType: "Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1850 x 680 x 1050 mm",
          folded: "N/A"
        },
        weight: "22 kg",
        maxLoad: "120 kg",
        recommendedHeight: "165-185 cm"
      },
      motor: {
        type: "XOFO Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "30 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "LG Lithium-ion",
        voltage: "36V",
        capacity: "10.4Ah",
        capacityWh: "374Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "35 km",
          pedalAssist: "60 km",
          combined: "40-60 km"
        },
        gradability: "15°",
        turningRadius: "2.5m"
      },
      wheels: {
        size: "28\"",
        tireType: "City Tire",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Integrated"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Swept-back Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
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
    description: "The JOBOBIKE Viva ST features a step-through frame design that makes mounting and dismounting effortless. Ideal for riders who prioritize comfort and convenience, this lightweight city e-bike combines elegant styling with practical urban functionality. The low-entry frame is perfect for daily commutes and casual rides around town.",
    keyFeatures: [
      "Easy step-through frame design",
      "Ultra-lightweight 22kg construction",
      "Reliable 250W motor with 30Nm torque",
      "Comfortable upright riding position",
      "Integrated lights and mudguards",
      "Smooth Shimano 7-speed gear system"
    ],
    availableColors: ["Blue", "White", "Cream"],
    availableSizes: ["One Size (165-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Viva ST E-bike",
      "36V 10.4Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },
  {
    id: "jobobike-henry",
    name: "JOBOBIKE Henry",
    slug: "jobobike-henry",
    originalPrice: 2299,
    price: 1899,
    discount: "-17%",
    image: "/images/henry/henry-1.png",
    images: [
     "/images/henry/henry-1.png",
     "/images/henry/henry-2.png",
    ],
    features: [
      "Bafang M200 mid-drive motor",
      "Hidden integrated battery",
      "Retro classic design",
      "28-inch wheels",
      "Premium components"
    ],
    badge: "Mid-Drive",
    category: ["Terreng"],
    rating: 4.9,
    reviewCount: 64,
    specifications: {
      motor: "Bafang M200 Mid-Drive 250W",
      battery: "36V 14Ah (504Wh)",
      range: "60-90 km",
      speed: "25 km/h",
      weight: "24 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Hydraulic Disc Brakes",
      frame: "Classic Step-over Aluminum",
      drivetrain: "Shimano 8-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Henry",
        frameType: "Step-over Classic",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1900 x 700 x 1100 mm",
          folded: "N/A"
        },
        weight: "24 kg",
        maxLoad: "125 kg",
        recommendedHeight: "170-195 cm"
      },
      motor: {
        type: "Bafang M200",
        power: "250W",
        peakPower: "500W",
        torque: "55 Nm",
        location: "Mid-Drive",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "14Ah",
        capacityWh: "504Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "50 km",
          pedalAssist: "90 km",
          combined: "60-90 km"
        },
        gradability: "20°",
        turningRadius: "2.8m"
      },
      wheels: {
        size: "28\"",
        tireType: "City Tire",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-speed",
        shifter: "Shimano Altus"
      },
      electrical: {
        display: "Color LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Integrated"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Ergonomic Saddle",
          adjustable: true,
          material: "Genuine Leather"
        },
        handlebar: {
          type: "Classic Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX5",
        certification: ["CE", "EN15194"]
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
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Henry is a refined urban e-bike designed for men who value minimalist style and cutting-edge technology. Featuring a powerful Bafang M200 mid-drive motor with torque sensor, it delivers a smooth, natural riding experience. The hidden battery integration provides a clean, classic appearance while maintaining modern e-bike performance.",
    keyFeatures: [
      "Premium Bafang M200 mid-drive motor with 55Nm torque",
      "Integrated hidden battery for sleek aesthetics",
      "Torque sensor for natural pedal assistance",
      "High-quality hydraulic disc brakes",
      "Color LCD display with comprehensive data",
      "Classic retro styling with modern technology"
    ],
    availableColors: ["Matte Black", "Forest Green", "Navy Blue"],
    availableSizes: ["One Size (170-195cm)"],
    whatsInTheBox: [
      "JOBOBIKE Henry E-bike",
      "36V 14Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },

  {
    id: "jobobike-ace",
    name: "JOBOBIKE Ace",
    slug: "jobobike-ace",
    originalPrice: 1599,
    price: 1299,
    discount: "-19%",
    image: "/images/ace/ace-1.png",
    images: [
     "/images/ace/ace-1.png",
     "/images/ace/ace-2.png",
     "/images/ace/ace-3.png",
    ],
    features: [
      "Foldable compact design",
      "Mobile app control",
      "250W motor with 45Nm torque",
      "20-inch wheels",
      "Lightweight and portable"
    ],
    badge: "Foldable",
    category: ["Hybrid", "Pendler"],
    rating: 4.6,
    reviewCount: 118,
    specifications: {
      motor: "250W Rear Hub",
      battery: "36V 10Ah (360Wh)",
      range: "40-60 km",
      speed: "25 km/h",
      weight: "21 kg",
      wheelSize: "20\" x 2.125\"",
      foldable: true,
      brakes: "Mechanical Disc Brakes",
      frame: "Foldable Aluminum Alloy",
      drivetrain: "Single Speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Ace",
        frameType: "Foldable",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: true,
        dimensions: {
          unfolded: "1480 x 580 x 1050 mm",
          folded: "800 x 450 x 650 mm"
        },
        weight: "21 kg",
        maxLoad: "120 kg",
        recommendedHeight: "155-190 cm"
      },
      motor: {
        type: "Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "45 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "10Ah",
        capacityWh: "360Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "35 km",
          pedalAssist: "60 km",
          combined: "40-60 km"
        },
        gradability: "15°",
        turningRadius: "2.0m"
      },
      wheels: {
        size: "20\"",
        tireType: "CST Anti-Puncture",
        tireSize: "20 x 2.125\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Single Speed",
        gears: "1-speed",
        shifter: "N/A"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED with Reflective Strips"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Foldable Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
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
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Ace is the perfect solution for urban commuters who need a compact, portable e-bike. Its innovative folding design allows easy storage in apartments, offices, or car trunks. Despite its compact size, it delivers impressive performance with a 250W motor and smart app connectivity for modern riders.",
    keyFeatures: [
      "Quick-fold design for easy transport",
      "Mobile app control via Bluetooth",
      "Powerful 250W motor with 45Nm torque",
      "CST anti-puncture tires with reflective strips",
      "Compact 20-inch wheels for agile city riding",
      "Lightweight 21kg for easy carrying"
    ],
    availableColors: ["Black", "White", "Grey"],
    availableSizes: ["Universal (155-190cm)"],
    whatsInTheBox: [
      "JOBOBIKE Ace E-bike",
      "36V 10Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },
  {
    id: "jobobike-triker",
    name: "JOBOBIKE Triker",
    slug: "jobobike-triker",
    originalPrice: 2199,
    price: 1799,
    discount: "-18%",
    image: "/images/triker/triker-1.png",
    images: [
      "/images/triker/triker-1.png",
      "/images/triker/triker-2.png",
    ],
    features: [
      "Three-wheel electric tricycle",
      "Large rear cargo basket",
      "Extra stability and safety",
      "250W motor with differential",
      "Perfect for seniors and cargo"
    ],
    badge: "Tricycle",
    category: ["Hybrid", "Terreng"],
    rating: 4.9,
    reviewCount: 54,
    specifications: {
      motor: "250W Differential Motor",
      battery: "36V 13Ah (468Wh)",
      range: "50-70 km",
      speed: "25 km/h",
      weight: "38 kg",
      wheelSize: "24\" Front / 20\" Rear",
      foldable: false,
      brakes: "V-Brakes",
      frame: "Low Step-through Steel",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Triker",
        frameType: "Low Step-through Tricycle",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "1800 x 750 x 1100 mm",
          folded: "N/A"
        },
        weight: "38 kg",
        maxLoad: "160 kg",
        recommendedHeight: "155-185 cm"
      },
      motor: {
        type: "Differential Motor",
        power: "250W",
        peakPower: "450W",
        torque: "35 Nm",
        location: "Rear Axle",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "13Ah",
        capacityWh: "468Wh",
        removable: true,
        chargingTime: "5-6 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "70 km",
          combined: "50-70 km"
        },
        gradability: "12°",
        turningRadius: "3.5m"
      },
      wheels: {
        size: "24\" / 20\"",
        tireType: "Puncture-Resistant",
        tireSize: "24\" x 1.95\" / 20\" x 1.95\"",
        rimMaterial: "Steel"
      },
      brakes: {
        front: "V-Brake",
        rear: "V-Brake",
        type: "V-Brake System"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
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
          type: "Spring Fork"
        },
        seat: {
          type: "Extra Wide Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather with Springs"
        },
        handlebar: {
          type: "Ergonomic Swept-back",
          adjustable: true,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
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
        basket: true,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Triker is an innovative three-wheel electric tricycle designed for maximum stability and cargo capacity. Perfect for seniors, delivery services, or anyone who values extra stability. The large rear basket can carry groceries, packages, or cargo with ease, while the low step-through frame ensures easy mounting and dismounting.",
    keyFeatures: [
      "Superior three-wheel stability",
      "Large rear cargo basket (100L capacity)",
      "Low step-through frame for easy access",
      "Differential motor for smooth cornering",
      "Extra-wide comfort saddle with suspension",
      "Perfect for seniors and cargo transport"
    ],
    availableColors: ["Blue", "Black", "Red"],
    availableSizes: ["Universal (155-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Triker E-tricycle",
      "36V 13Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell",
      "Rear Cargo Basket"
    ]
  },

  {
    id: "jobobike-dyno",
    name: "JOBOBIKE Dyno",
    slug: "jobobike-dyno",
    originalPrice: 1799,
    price: 1499,
    discount: "-17%",
    image: "/images/dyno-gt/dyno-gt-1.png",
    images: [
      "/images/dyno-gt/dyno-gt-1.png",
      "/images/dyno-gt/dyno-gt-2.png",
    ],
    features: [
      "Step-through comfort design",
      "250W reliable motor",
      "Front suspension",
      "26-inch wheels",
      "Affordable quality"
    ],
    badge: "Best Value",
    category: ["Hybrid"],
    rating: 4.6,
    reviewCount: 103,
    specifications: {
      motor: "250W Rear Hub",
      battery: "36V 13Ah (468Wh)",
      range: "50-70 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "26\" x 1.95\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Step-through Aluminum Alloy",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Dyno",
        frameType: "Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1850 x 680 x 1100 mm",
          folded: "N/A"
        },
        weight: "25 kg",
        maxLoad: "120 kg",
        recommendedHeight: "160-185 cm"
      },
      motor: {
        type: "Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "40 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "13Ah",
        capacityWh: "468Wh",
        removable: true,
        chargingTime: "5-6 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "70 km",
          combined: "50-70 km"
        },
        gradability: "15°",
        turningRadius: "2.6m"
      },
      wheels: {
        size: "26\"",
        tireType: "City Tire",
        tireSize: "26 x 1.95\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
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
          type: "Ergonomic Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
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
    description: "The JOBOBIKE Dyno offers exceptional value for urban commuters seeking comfort and reliability. Its step-through frame design ensures easy mounting, while the front suspension absorbs bumps for a smooth ride. With a solid range and dependable components, it's an excellent choice for daily commuting without breaking the bank.",
    keyFeatures: [
      "Easy step-through frame design",
      "Front suspension for comfortable rides",
      "Reliable 250W motor with 40Nm torque",
      "Long-range 468Wh battery",
      "26-inch wheels for stability",
      "Excellent value for money"
    ],
    availableColors: ["White", "Black", "Silver"],
    availableSizes: ["Universal (160-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Dyno E-bike",
      "36V 13Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },













  // 6. Jobobike Robin
  {
    id: "12",
    name: "JOBOBIKE Robin",
    slug: "jobobike-robin",
    originalPrice: 1799,
    price: 1499,
    discount: "17%",
    image: "/images/robin/robin-1.png",
    images: [
      "/images/robin/robin-1.png",
      "/images/robin/robin-2.png",
      "/images/robin/robin-3.png",
    ],
    features: [
      "500W Rear Hub Motor",
      "48V 15Ah Battery",
      "26\" Fat Tires",
      "All-Terrain Capability",
      "Front Suspension"
    ],
    badge: "Adventure Ready",
    category: ["jobo"],
    rating: 4.6,
    reviewCount: 156,
    specifications: {
      motor: "500W Rear Hub",
      battery: "48V 15Ah (720Wh)",
      range: "70-90 km",
      speed: "25 km/h",
      weight: "28 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Aluminum Fat",
      drivetrain: "7-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Robin",
        frameType: "Fat Bike",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "185 x 70 x 110 cm",
          folded: "N/A"
        },
        weight: "28 kg",
        maxLoad: "130 kg",
        recommendedHeight: "165-200 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "500W",
        peakPower: "750W",
        torque: "60 N.m",
        location: "Rear Wheel",
        torqueSensor: false
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
          pureElectric: "55 km",
          pedalAssist: "70-90 km",
          combined: "60-80 km"
        },
        gradability: "25°"
      },
      wheels: {
        size: "26\"",
        tireType: "Fat Tire",
        tireSize: "26 x 4.0\"",
        rimMaterial: "Double Wall Aluminum"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-Speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD Color Display",
        lights: {
          front: true,
          rear: true,
          type: "High-Power LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Fat Fork Suspension"
        },
        seat: {
          type: "Wide Comfort Saddle",
          adjustable: true,
          material: "Memory Foam"
        },
        handlebar: {
          type: "Wide Fat Bar",
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
        app: false,
        gps: false,
        bluetooth: false,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: false,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Robin is built for adventure with its powerful motor and fat tires. Whether you're exploring trails or conquering city streets, this all-terrain e-bike delivers exceptional performance and comfort.",
    keyFeatures: [
      "Powerful 500W motor for challenging terrain",
      "Fat tires provide superior traction and comfort",
      "Front suspension smooths out rough rides",
      "High-capacity battery for long adventures",
      "Robust construction for reliable performance"
    ],
    availableColors: ["Stealth Black", "Army Green", "Sand Beige"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Robin E-bike",
      "48V 15Ah Battery",
      "Battery Charger",
      "User Manual",
      "Assembly Tools",
      "Keys (2x)"
    ]
  },

  // 7. Jobobike Eddy X
  {
    id: "13",
    name: "JOBOBIKE Eddy X",
    slug: "jobobike-eddy-x",
    originalPrice: 12999,
    price: 12999,
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
    category: ["by-pendler", "hybrid"],
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
  {
    id: "14",
    name: "JOBOBIKE Romer Pro",
    slug: "jobobike-romer-pro",
    originalPrice: 2299,
    price: 1999,
    discount: "13%",
    image: "/images/romer-pro/romer-1.png",
    images: [
      "/images/romer-pro/romer-1.png",
    ],
    features: [
      "750W Mid-Drive Motor",
      "48V 20Ah Battery",
      "Full Suspension",
      "Mountain Bike Design",
      "Professional Components"
    ],
    badge: "Pro Series",
    category: ["jobo"],
    rating: 4.9,
    reviewCount: 87,
    specifications: {
      motor: "750W Mid-Drive",
      battery: "48V 20Ah (960Wh)",
      range: "60-80 km",
      speed: "25 km/h",
      weight: "30 kg",
      wheelSize: "27.5\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Carbon Fiber",
      drivetrain: "11-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Romer Pro",
        frameType: "Full Suspension MTB",
        frameMaterial: "Carbon Fiber",
        foldable: false,
        dimensions: {
          unfolded: "185 x 65 x 115 cm",
          folded: "N/A"
        },
        weight: "30 kg",
        maxLoad: "140 kg",
        recommendedHeight: "170-200 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "750W",
        peakPower: "1200W",
        torque: "160 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "20Ah",
        capacityWh: "960Wh",
        removable: true,
        chargingTime: "6-7 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "60-80 km",
          combined: "50-70 km"
        },
        gradability: "35°"
      },
      wheels: {
        size: "27.5\"",
        tireType: "Mountain",
        tireSize: "27.5 x 2.8\"",
        rimMaterial: "Carbon Fiber"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "203mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "11-Speed",
        shifter: "Shimano XT"
      },
      electrical: {
        display: "Professional Color Display",
        lights: {
          front: true,
          rear: true,
          type: "High-Intensity LED"
        },
        horn: false,
        throttle: false,
        assistLevels: "7 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: true,
          type: "Air Shock System"
        },
        seat: {
          type: "MTB Racing Saddle",
          adjustable: true,
          material: "Carbon Rails"
        },
        handlebar: {
          type: "MTB Flat Bar",
          adjustable: false,
          material: "Carbon Fiber"
        }
      },
      safety: {
        reflectors: false,
        bell: false,
        waterResistance: "IPX6",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: true,
        gps: true,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: false,
        mudguards: false,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Romer Pro is a premium full-suspension e-mountain bike designed for serious riders. With its powerful motor, long-range battery, and professional-grade components, it's built to conquer any trail.",
    keyFeatures: [
      "Ultra-powerful 750W mid-drive motor with massive torque",
      "Premium carbon fiber frame and components",
      "Full air suspension system for maximum comfort",
      "Massive 960Wh battery for extended adventures",
      "Professional-grade Shimano XT drivetrain"
    ],
    availableColors: ["Matte Black", "Racing Red", "Electric Yellow"],
    availableSizes: ["M", "L", "XL"],
    whatsInTheBox: [
      "JOBOBIKE Romer Pro E-bike",
      "48V 20Ah Battery",
      "Fast Charger",
      "Professional Manual",
      "GPS Setup Guide",
      "Premium Tool Kit",
      "Keys (2x)"
    ]
  },

  // 9. Jobobike Astra
  {
    id: "15",
    name: "JOBOBIKE Astra",
    slug: "jobobike-astra",
    originalPrice: 15999,
    price: 15999,
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
    category: ["by-pendler", "hybrid"],
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