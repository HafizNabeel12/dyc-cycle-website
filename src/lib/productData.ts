

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
  // Detaljerte tekniske spesifikasjoner (norsk struktur)
  tekniskeSpesifikasjoner: {
    generelt: {
      modell: string;
      rammeType: string;
      rammeMateriale: string;
      sammenleggbar: boolean;
      dimensjoner: {
        utbrettet: string;
        sammenlagt: string;
      };
      vekt: string;
      maksLast: string;
      anbefalteHøyde: string;
    };
    motor: {
      type: string;
      effekt: string;
      toppEffekt: string;
      dreiemoment?: string;
      plassering: string;
      dreiemomentSensor?: boolean;
    };
    batteri: {
      type: string;
      spenning: string;
      kapasitet: string;
      kapasitetWh: string;
      avtakbar: boolean;
      ladetid: string;
      batteriLevetid: string;
    };
    ytelse: {
      maksFart: string;
      rekkevidde: {
        renElektrisk: string;
        pedalAssistanse: string;
        kombinert: string;
      };
      stigningsevne: string;
      svingradius?: string;
    };
    hjul: {
      størrelse: string;
      dekkType: string;
      dekkStørrelse: string;
      felgMateriale?: string;
    };
    bremser: {
      foran: string;
      bak: string;
      type: string;
    };
    giring: {
      type: string;
      gir?: string;
      girskifter?: string;
    };
    elektrisk: {
      display: string;
      lys: {
        foran: boolean;
        bak: boolean;
        type?: string;
      };
      horn: boolean;
      gasspedal: boolean;
      assistanseNivåer: string;
    };
    komfort: {
      demping: {
        foran: boolean;
        bak: boolean;
        type?: string;
      };
      sete: {
        type: string;
        justerbar: boolean;
        materiale?: string;
      };
      styre: {
        type: string;
        justerbar: boolean;
        materiale?: string;
      };
    };
    sikkerhet: {
      reflekser: boolean;
      bjelle: boolean;
      vannMotstand: string;
      sertifisering?: string[];
    };
    tilkobling: {
      app: boolean;
      gps?: boolean;
      bluetooth?: boolean;
      usb?: boolean;
    };
    tilbehør: {
      sidestøtte: boolean;
      skjermer: boolean;
      bagasjebrett: boolean;
      kurv: boolean;
      flaskeholder: boolean;
    };
  };
  description: string;
  keyFeatures: string[];
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
    features: [ "Rask sammenlegging", "Lettvekts" , "Ultra-kompakt 14\" design",],
    badge: "KOMPAKT KONGE",
    category: ["Sammenleggbar", "Pendler"],
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
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "DYU D3F",
        rammeType: "Mini folding frame",
        rammeMateriale: "Aluminum alloy",
        sammenleggbar: true,
        dimensjoner: {
          utbrettet: "110×52×91-106cm",
          sammenlagt: "110×35×52cm"
        },
        vekt: "16kg (35.3 lbs)",
        maksLast: "120kg (264 lbs)",
        anbefalteHøyde: "150-180cm"
      },
      motor: {
        type: "Brushless hub motor",
        effekt: "250W",
        toppEffekt: "350W",
        plassering: "Rear wheel",
        dreiemomentSensor: false
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "10Ah",
        kapasitetWh: "360Wh",
        avtakbar: true,
        ladetid: "4-6 hours",
        batteriLevetid: "800+ cycles"
      },
      ytelse: {
        maksFart: "25km/h (15.5mph)",
        rekkevidde: {
          renElektrisk: "35km (22 miles)",
          pedalAssistanse: "60km (37 miles)",
          kombinert: "45-60km (28-37 miles)"
        },
        stigningsevne: "15°",
        svingradius: "1.2m"
      },
      hjul: {
        størrelse: "14 inch",
        dekkType: "Pneumatic",
        dekkStørrelse: "14×2.125",
        felgMateriale: "Aluminum alloy"
      },
      bremser: {
        foran: "Mechanical disc brake",
        bak: "Mechanical disc brake",
        type: "Dual disc brakes"
      },
      giring: {
        type: "Single speed",
        gir: "1"
      },
      elektrisk: {
        display: "LED battery indicator",
        lys: {
          foran: true,
          bak: true,
          type: "LED"
        },
        horn: true,
        gasspedal: true,
        assistanseNivåer: "3 levels"
      },
      komfort: {
        demping: {
          foran: false,
          bak: false
        },
        sete: {
          type: "Comfort saddle",
          justerbar: true,
          materiale: "PU leather"
        },
        styre: {
          type: "Folding handlebar",
          justerbar: true,
          materiale: "Aluminum"
        }
      },
      sikkerhet: {
        reflekser: true,
        bjelle: true,
        vannMotstand: "IPX4",
        sertifisering: ["CE", "UL"]
      },
      tilkobling: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      tilbehør: {
        sidestøtte: true,
        skjermer: true,
        bagasjebrett: false,
        kurv: false,
        flaskeholder: false
      }
    },
    description:
      "DYU D3F er en kompakt, lettvekts el-sykkel perfekt for korte pendlerturer og enkel oppbevaring. Små 14\" hjul og rask sammenlegging gjør den ekstremt portabel.",
    keyFeatures: [
      "Ultra-kompakt 14-tommer design",
      "Sammenleggbar for enkel oppbevaring",
      "Perfekt for korte pendlerturer",
      "Lettvekts og portabel",
      "Budsjettvenlig alternativ"
    ],

    availableSizes: ["En størrelse (sammenleggbar)"],
    whatsInTheBox: [
      "DYU D3F El-sykkel",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Frontlys (installert)"
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
    features: ["Dreiemoment sensor", "Avtakbart batteri", "Shimano gir"],
    badge: "SMART VALG",
    category: ["Sammenleggbar", "Pendler"],
    rating: 4.7,
    reviewCount: 156,
    specifications: {
      motor: "250W Midt-motor med Dreiemoment Sensor",
      battery: "36V 12.5Ah avtakbart",
      range: "56-80 km",
      speed: "32 km/t",
      weight: "19 kg",
      wheelSize: "20 tommer",
      foldable: true,
      brakes: "Skivebremser",
      frame: "Magnesium legering",
      drivetrain: "Shimano gir"
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "DYU T1",
        rammeType: "Step-through folding",
        rammeMateriale: "Magnesium alloy",
        sammenleggbar: true,
        dimensjoner: {
          utbrettet: "152×60×108cm",
          sammenlagt: "80×60×70cm"
        },
        vekt: "19kg (42 lbs)",
        maksLast: "150kg (330 lbs)",
        anbefalteHøyde: "155-195cm"
      },
      motor: {
        type: "Mid-drive motor",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "80Nm",
        plassering: "Bottom bracket",
        dreiemomentSensor: true
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "12.5Ah",
        kapasitetWh: "450Wh",
        avtakbar: true,
        ladetid: "4-5 hours",
        batteriLevetid: "1000+ cycles"
      },
      ytelse: {
        maksFart: "32km/h (20mph)",
        rekkevidde: {
          renElektrisk: "45km (28 miles)",
          pedalAssistanse: "80km (50 miles)",
          kombinert: "60-80km (37-50 miles)"
        },
        stigningsevne: "25°",
        svingradius: "1.8m"
      },
      hjul: {
        størrelse: "20 inch",
        dekkType: "Puncture-resistant",
        dekkStørrelse: "20×1.95",
        felgMateriale: "Aluminum alloy"
      },
      bremser: {
        foran: "Hydraulic disc brake",
        bak: "Hydraulic disc brake",
        type: "Dual hydraulic disc"
      },
      giring: {
        type: "Shimano derailleur",
        gir: "7-speed",
        girskifter: "Shimano Tourney"
      },
      elektrisk: {
        display: "LCD display",
        lys: {
          foran: true,
          bak: true,
          type: "Integrated LED"
        },
        horn: true,
        gasspedal: true,
        assistanseNivåer: "5 levels"
      },
      komfort: {
        demping: {
          foran: true,
          bak: false,
          type: "Front fork suspension"
        },
        sete: {
          type: "Ergonomic saddle",
          justerbar: true,
          materiale: "Memory foam"
        },
        styre: {
          type: "Adjustable stem",
          justerbar: true,
          materiale: "Aluminum alloy"
        }
      },
      sikkerhet: {
        reflekser: true,
        bjelle: true,
        vannMotstand: "IPX5",
        sertifisering: ["CE", "EN15194"]
      },
      tilkobling: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: true
      },
      tilbehør: {
        sidestøtte: true,
        skjermer: true,
        rack: true,
        basket: false,
        bottleHolder: true
      }
    },
    description:
      "DYU T1 har dreiemoment sensor for naturlig pedalassistanse og et premium lettvekts ramme — ideell hvis du ønsker en raffinert el-sykkel opplevelse.",
    keyFeatures: [
      "Dreiemoment sensor for naturlig pedalassistanse",
      "Avtakbart batteri",
      "Magnesium legering ramme",
      "Shimano gir system",
      "Smarte funksjoner"
    ],

    availableSizes: ["20 tommer ramme"],
    whatsInTheBox: [
      "DYU T1 El-sykkel",
      "Avtakbart batteri",
      "Lader",
      "Verktøysett",
      "Brukermanual"
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
    features: ["Komfort geometri", "Frontdempning" , "26\" hjul" ],
    badge: "BY CRUISER",
    category: ["Pendler", "Hybrid"],
    rating: 4.6,
    reviewCount: 134,
    specifications: {
      motor: "250W / 500W topp nav motor",
      battery: "36V 10Ah avtakbart",
      range: "60-96 km",
      speed: "40 km/t",
      weight: "25 kg",
      wheelSize: "26 tommer",
      foldable: true,
      brakes: "Skivebremser",
      frame: "Aluminium legering"
    },
    tekniskeSpesifikasjoner: {
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
      "DYU C1 er laget for bysyklister som trenger en komfortabel, pålitelig el-sykkel med frontdempning og stabile 26\" hjul.",
    keyFeatures: [
      "26-tommer hjul for stabilitet",
      "Frontdempning",
      "Shimano 7-trinns giring (varierer)",
      "Avtakbart batteri",
      "Komfortabel sittestilling"
    ],

    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU C1 El-sykkel",
      "Lader",
      "Brukermanual",
      "Bjelle",
      "Grunnleggende verktøysett"
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
    features: ["12.5Ah batteri" , "Dobbel dempning alternativ (modell)" , "LED display" ],
    badge: "STUDENT FAVORITT",
    category: ["Pendler", "Hybrid"],
    rating: 4.8,
    reviewCount: 203,
    specifications: {
      motor: "250W bakre nav motor",
      battery: "36V 12.5Ah avtakbart",
      range: "Opptil 60 km",
      speed: "25 km/t",
      weight: "25 kg",
      wheelSize: "26 tommer",
      foldable: true,
      brakes: "Hydrauliske skivebremser",
      frame: "Aluminium"
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
      "DYU C6 kombinerer stil med lengre rekkevidde og større batteriytelse for daglig pendling og bykjøring.",
    keyFeatures: [
      "Kraftig 12.5Ah batteri",
      "Front dempingsgaffel",
      "Sete støtdemping",
      "Moderne urban design",
      "Forbedrede sikkerhetsfunksjoner"
    ],

    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU C6 El-sykkel",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Reflekser"
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
    features: ["Fete dekk 20x3.0", "Eksepsjonell rekkevidde", "All-terreng kapasitet"],
    badge: "LANG REKKEVIDDE",
    category: ["Fatbike", "Sammenleggbar"],
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
      "DYU C9 er bygget for langdistanse eventyr med fete dekk og et stort kapasitetsbatteri for utvidede turer utenfor allfarvei.",
    keyFeatures: [
      "Fete 20x3.0 dekk",
      "Front støtdemper",
      "Stort rekkevidde batteri",
      "All-terreng kapasitet",
      "Balansert motor-batteri design"
    ],

    availableSizes: ["En størrelse (20\")"],
    whatsInTheBox: [
      "DYU C9 El-sykkel",
      "48V lader",
      "Verktøysett",
      "Manual",
      "Punkteringssett"
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
    features: ["700C hjul", "Aluminium ramme", "Hydrauliske bremser"],
    badge: "PREMIUM STIL",
    category: ["Pendler", "Hybrid"],
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
      "DYU Stroll 1 er en premium urban el-sykkel laget for jevne turer med en elegant aluminiumsramme og effektive komponenter.",
    keyFeatures: [
      "Strømlinjeformet aluminiumsramme",
      "700C hjul for jevn rulling",
      "Hydrauliske skivebremser",
      "Flere kjøremedier",
      "Komfort geometri"
    ],

    availableSizes: ["M", "L"],
    whatsInTheBox: [
      "DYU Stroll 1 El-sykkel",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Skjermer (modellavhengig)"
    ]
  },

  // 1. JOBOBIKE Luxe
  // 1. JOBOBIKE Luxe
  {
    id: "luxe-001",
    name: "JOBOBIKE Luxe",
    slug: "jobobike-luxe",
    originalPrice: 6897,
    price: 6297,
    discount: "9%",
    image: "/images/luxe/luxe-1.png",
    images: ["/images/luxe/luxe-1.png", "/images/luxe/luxe-2.png"],
    features: [
      "Karbon drivrem system",
      "Intern 8-trinns giring",
      "Hydrauliske bremser",
      "Smart App tilkobling via Bluetooth",
      "Automatisk bremselys sensing",
    ],
    badge: "Smart teknologi",
    category: ["Pendler"],
    rating: 4.8,
    reviewCount: 89,
    specifications: {
      motor: "250W Midtmotor, 90Nm",
      battery: "36V 15Ah (540Wh)",
      range: "90km",
      speed: "25 km/t",
      weight: "24kg",
      wheelSize: '27.5"',
      foldable: false,
      brakes: "Hydrauliske skivebremser",
      frame: "Aluminiumslegering",
      drivetrain: "Intern 8-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Luxe",
        rammeType: "Høy urban ramme",
        rammeMateriale: "Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "180cm x 110cm x 65cm", sammenlagt: "N/A" },
        vekt: "24kg",
        maksLast: "120kg",
        anbefalteHøyde: "165-195cm",
      },
      motor: {
        type: "Midtmotor",
        effekt: "250W",
        toppEffekt: "400W",
        dreiemoment: "90Nm",
        plassering: "Senter",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Lithium-ion med BMS",
        spenning: "36V",
        kapasitet: "15Ah",
        kapasitetWh: "540Wh",
        avtakbar: true,
        ladetid: "4-6 timer",
        batteriLevetid: "800-1000 ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45km", pedalAssistanse: "90km", kombinert: "65km" },
        stigningsevne: "15°",
        svingradius: "2.5m",
      },
      hjul: {
        størrelse: '27.5"',
        dekkType: "Bydekk",
        dekkStørrelse: '27.5" x 2.1"',
        felgMateriale: "Aluminiumslegering",
      },
      bremser: { foran: "Hydraulisk skivebrems", bak: "Hydraulisk skivebrems", type: "Hydraulisk skive" },
      giring: { type: "Intern navgiring", gir: "8-trinns", girskifter: "Gripskift" },
      elektrisk: {
        display: "Bluetooth LCD-skjerm",
        lys: { foran: true, bak: true, type: "LED med automatisk bremselys" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer + auto",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Stiv" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Bystyre", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX5", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: true, gps: false, bluetooth: true, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: false, flaskeholder: false },
    },
    description:
      "JOBOBIKE Luxe er en premium smart by-elsykkel med vedlikeholdsfritt karbon drivrem og intern 8-trinns giring. Bluetooth-app gir sanntidsdata og personlige innstillinger.",
    keyFeatures: [
      "Karbon drivrem – opptil 30 000 km",
      "App-integrasjon i sanntid",
      "Intern 8-trinns giring",
      "Hydrauliske bremser",
      "Automatisk bremselys",
      "27,5\" dekk m/punkteringsbeskyttelse",
      "5 assistansenivåer + auto",
      "Hurtigutløser for tilbehør",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Luxe el-sykkel",
      "36V 15Ah batteri med lader",
      "Brukermanual og verktøy",
      "Garantikort",
      "Front- og baklys",
      "Sidestøtte",
      "Bjelle",
    ],
  },

  // 2. JOBOBIKE Robin
  {
    id: "robin-001",
    name: "JOBOBIKE Robin",
    slug: "jobobike-robin",
    originalPrice: 5097,
    price: 4197,
    discount: "18%",
    image: "/images/robin/robin-1.png",
    images: ["/images/robin/robin-1.png", "/images/robin/robin-2.png", "/images/robin/robin-3.png"],
    features: [
      '26" x 4,0" fatbike-dekk',
      "80mm RST hydraulisk demping",
      "Bafang 250W motor, 80Nm",
      "All-terreng",
      "USB-ladeport",
    ],
    badge: "All-terreng",
    category: ["Fatbike"],
    rating: 4.7,
    reviewCount: 156,
    specifications: {
      motor: "250W Bafang nav, 80Nm",
      battery: "48V 13Ah (624Wh)",
      range: "65km",
      speed: "25 km/t",
      weight: "32kg",
      wheelSize: '26"',
      foldable: false,
      brakes: "Hydrauliske skivebremser",
      frame: "6061 aluminiumslegering",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Robin",
        rammeType: "Høy ramme / Gjennomgående tilgjengelig",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "190cm x 120cm x 75cm", sammenlagt: "N/A" },
        vekt: "32kg",
        maksLast: "150kg",
        anbefalteHøyde: "160-200cm",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "80Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion med BMS",
        spenning: "48V",
        kapasitet: "13Ah",
        kapasitetWh: "624Wh",
        avtakbar: true,
        ladetid: "6-8 timer",
        batteriLevetid: "800-1000 ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "40km", pedalAssistanse: "65km", kombinert: "55km" },
        stigningsevne: "20°",
        svingradius: "3m",
      },
      hjul: {
        størrelse: '26"',
        dekkType: "Fatbike",
        dekkStørrelse: '26" x 4.0"',
        felgMateriale: "Aluminiumslegering bred felg",
      },
      bremser: { foran: "Hydraulisk skivebrems", bak: "Hydraulisk skivebrems", type: "Hydraulisk skive" },
      giring: { type: "Ekstern gir", gir: "7-trinns Shimano", girskifter: "Shimano vrigrep" },
      elektrisk: {
        display: "Farget LCD med USB",
        lys: { foran: true, bak: true, type: "LED 60 LUX foran, bremselys bak" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "RST hydraulisk 80mm" },
        sete: { type: "Velo lær komfort", justerbar: true, materiale: "Lær" },
        styre: { type: "Terreng 720mm", justerbar: false, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE", "TUV"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: false },
    },
    description:
      "JOBOBIKE Robin er en kraftig fatbike for eventyr i skog, fjell og snø. Store 26\" x 4,0\" dekk og RST-demping gir grep og stabilitet i all slags terreng.",
    keyFeatures: [
      "26\" x 4,0\" CST/Kenda fat-dekk",
      "80mm RST hydraulisk demping",
      "Bafang 250W, 80Nm",
      "48V 13Ah batteri (BMS)",
      "Hydrauliske skivebremser",
      "Farget LCD + USB",
      "Shimano 7-trinns",
      "Høy / gjennomgående ramme",
    ],
    availableSizes: ["High Frame", "Step-Through"],
    whatsInTheBox: [
      "JOBOBIKE Robin el-sykkel",
      "48V 13Ah batteri med lader",
      "Brukermanual og verktøy",
      "Garantikort",
      "Front LED-lys (60 LUX)",
      "Bakre bremselys",
      "Sidestøtte",
      "Bjelle",
    ],
  },

  // 3. JOBOBIKE Robin Pro
  {
    id: "robin-pro-001",
    name: "JOBOBIKE Robin Pro",
    slug: "jobobike-robin-pro",
    originalPrice: 6297,
    price: 5397,
    discount: "14%",
    image: "/images/robin-pro/robin-pro-1.png",
    images: ["/images/robin-pro/robin-pro-1.png"],
    features: [
      "48V 20Ah batteri (utvidet rekkevidde)",
      '26" x 4,0" fatbike-dekk',
      "80mm RST hydraulisk demping",
      "Opptil 90km pr lading",
      "Premium all-terreng",
    ],
    badge: "Utvidet rekkevidde",
    category: ["Fatbike", "Pendler"],
    rating: 4.9,
    reviewCount: 98,
    specifications: {
      motor: "250W Bafang nav, 80Nm",
      battery: "48V 20Ah (960Wh)",
      range: "90km",
      speed: "25 km/t",
      weight: "34kg",
      wheelSize: '26"',
      foldable: false,
      brakes: "Hydrauliske skivebremser",
      frame: "6061 aluminiumslegering",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Robin Pro",
        rammeType: "Høy ramme / Gjennomgående tilgjengelig",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "190cm x 120cm x 75cm", sammenlagt: "N/A" },
        vekt: "34kg",
        maksLast: "150kg",
        anbefalteHøyde: "160-200cm",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "80Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion med BMS",
        spenning: "48V",
        kapasitet: "20Ah",
        kapasitetWh: "960Wh",
        avtakbar: true,
        ladetid: "8-10 timer",
        batteriLevetid: "800-1000 ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "50km", pedalAssistanse: "90km", kombinert: "70km" },
        stigningsevne: "20°",
        svingradius: "3m",
      },
      hjul: {
        størrelse: '26"',
        dekkType: "Fatbike",
        dekkStørrelse: '26" x 4.0"',
        felgMateriale: "Aluminiumslegering bred felg",
      },
      bremser: { foran: "Hydraulisk skivebrems", bak: "Hydraulisk skivebrems", type: "Hydraulisk skive" },
      giring: { type: "Ekstern gir", gir: "7-trinns Shimano", girskifter: "Shimano vrigrep" },
      elektrisk: {
        display: "Farget LCD med USB",
        lys: { foran: true, bak: true, type: "LED 60 LUX foran, bremselys bak" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "RST hydraulisk 80mm" },
        sete: { type: "Velo lær komfort", justerbar: true, materiale: "Lær" },
        styre: { type: "Terreng 720mm", justerbar: false, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE", "TUV"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: false },
    },
    description:
      "Robin Pro bygger på Robin med 48V 20Ah (960Wh) batteri for opptil 90km. Ideell for lengre eventyr i krevende terreng.",
    keyFeatures: [
      "48V 20Ah (960Wh) batteri",
      "26\" x 4,0\" fat-dekk",
      "80mm RST hydraulisk demping",
      "Bafang 250W, 80Nm",
      "Hydrauliske skiver",
      "Farget LCD + USB",
      "Shimano 7-trinns",
      "Flere premiumfarger",
    ],
    availableSizes: ["High Frame", "Step-Through"],
    whatsInTheBox: [
      "JOBOBIKE Robin Pro el-sykkel",
      "48V 20Ah batteri med lader",
      "Brukermanual og verktøy",
      "Garantikort",
      "Front LED-lys (60 LUX)",
      "Bakre bremselys",
      "Sidestøtte",
      "Bjelle",
    ],
  },

  // 4. JOBOBIKE Romer
  {
    id: "romer-001",
    name: "JOBOBIKE Romer",
    slug: "jobobike-romer",
    originalPrice: 5997,
    price: 5397,
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
      "Sammenleggbart design",
      '20" fatbike-dekk',
      "Gjennomgående ramme",
      "Tilbehørskompatibel",
      "Opptil 150km (økonomodus)",
    ],
    badge: "Nytte",
    category: ["Sammenleggbar", "Fatbike"],
    rating: 4.6,
    reviewCount: 112,
    specifications: {
      motor: "250W nav, 80Nm",
      battery: "48V 13Ah (624Wh)",
      range: "65-150km",
      speed: "25 km/t",
      weight: "30kg",
      wheelSize: '20"',
      foldable: true,
      brakes: "Mekaniske skivebremser",
      frame: "Dobbeltlags aluminiumslegering",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Romer",
        rammeType: "Gjennomgående sammenleggbar",
        rammeMateriale: "Dobbeltlags aluminiumslegering",
        sammenleggbar: true,
        dimensjoner: { utbrettet: "165cm x 110cm x 70cm", sammenlagt: "106cm x 60cm x 86cm" },
        vekt: "30kg",
        maksLast: "150kg",
        anbefalteHøyde: "160cm+",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "80Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "LG Lithium-ion med BMS",
        spenning: "48V",
        kapasitet: "13Ah",
        kapasitetWh: "624Wh",
        avtakbar: true,
        ladetid: "6-8 timer",
        batteriLevetid: "800-1000 ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45km", pedalAssistanse: "150km", kombinert: "65km" },
        stigningsevne: "18°",
        svingradius: "2.2m",
      },
      hjul: {
        størrelse: '20"',
        dekkType: "Fatbike",
        dekkStørrelse: '20" x 4.0"',
        felgMateriale: "Aluminiumslegering",
      },
      bremser: { foran: "Mekanisk skivebrems", bak: "Mekanisk skivebrems", type: "Tektro mekanisk skive" },
      giring: { type: "Ekstern gir", gir: "7-trinns Shimano", girskifter: "Shimano vrigrep" },
      elektrisk: {
        display: "LCD-skjerm",
        lys: { foran: true, bak: true, type: "LED med vanntett kabling" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Stiv (fat-dekk demper)" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Sammenleggbart", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: true, flaskeholder: false },
    },
    description:
      "Romer er en allsidig nyttesykkel med sammenleggbart design og gjennomgående ramme. Dobbeltramme beskytter batteriet og gir styrke – kompatibel med tilhenger/barnesete.",
    keyFeatures: [
      "Kompakt sammenlegging 106 x 60 x 86cm",
      "20\" fat-dekk for stabilitet",
      "Gjennomgående ramme",
      "Dobbel ramme gir styrke",
      "Tilbehørsklar (tilhenger/barnesete)",
      "80Nm dreiemoment",
      "Opptil 150km i øko-modus",
      "Rustbestandige pedaler",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Romer el-sykkel",
      "48V 13Ah batteri med lader",
      "Brukermanual og verktøy",
      "Garantikort",
      "Front- og baklys",
      "Sammenleggbare pedaler",
      "Sidestøtte",
      "Skjermer",
      "Bjelle",
    ],
  },

  // 5. JOBOBIKE Romer Pro
  {
    id: "romer-pro-001",
    name: "JOBOBIKE Romer Pro",
    slug: "jobobike-romer-pro",
    originalPrice: 6597,
    price: 5997,
    discount: "9%",
    image: "/images/romer-pro/romer-1.png",
    images: ["/images/romer-pro/romer-1.png"],
    features: [
      "Hydrauliske skivebremser",
      "Dreiemomentsensor",
      "Dempet setepinne",
      "Sammenleggbart nyttedesign",
      "Bedre lastekapasitet",
    ],
    badge: "Pro nytte",
    category: ["Lastesykkel", "Sammenleggbar"],
    rating: 4.8,
    reviewCount: 87,
    specifications: {
      motor: "250W Bafang nav, 80Nm",
      battery: "48V 15Ah (720Wh)",
      range: "70-160km",
      speed: "25 km/t",
      weight: "31kg",
      wheelSize: '20"',
      foldable: true,
      brakes: "Hydrauliske skivebremser",
      frame: "Dobbeltlags aluminiumslegering",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Romer Pro",
        rammeType: "Gjennomgående sammenleggbar",
        rammeMateriale: "Dobbeltlags aluminiumslegering",
        sammenleggbar: true,
        dimensjoner: { utbrettet: "165cm x 110cm x 70cm", sammenlagt: "106cm x 60cm x 86cm" },
        vekt: "31kg",
        maksLast: "150kg",
        anbefalteHøyde: "160cm+",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "80Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "LG Lithium-ion med BMS",
        spenning: "48V",
        kapasitet: "15Ah",
        kapasitetWh: "720Wh",
        avtakbar: true,
        ladetid: "6-8 timer",
        batteriLevetid: "800-1000 ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "50km", pedalAssistanse: "160km", kombinert: "70km" },
        stigningsevne: "18°",
        svingradius: "2.2m",
      },
      hjul: {
        størrelse: '20"',
        dekkType: "Fatbike",
        dekkStørrelse: '20" x 4.0"',
        felgMateriale: "Aluminiumslegering",
      },
      bremser: { foran: "Hydraulisk skivebrems", bak: "Hydraulisk skivebrems", type: "Tektro hydraulisk skive" },
      giring: { type: "Ekstern gir", gir: "7-trinns Shimano", girskifter: "Shimano vrigrep" },
      elektrisk: {
        display: "Avansert LCD-skjerm",
        lys: { foran: true, bak: true, type: "LED med vanntett kabling" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: true, type: "Dempet setepinne" },
        sete: { type: "Premium komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Sammenleggbart", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: true, flaskeholder: false },
    },
    description:
      "Romer Pro oppgraderer Romer med hydrauliske skiver, dreiemomentsensor og dempet setepinne – ideell for pendling, familieturer og last.",
    keyFeatures: [
      "Hydrauliske skiver",
      "Dreiemomentsensor",
      "Dempet setepinne",
      "48V 15Ah batteri",
      "Sammenleggbar dobbelramme",
      "20\" fat-dekk for stabilitet",
      "Tilbehørsklar (laster/barnesete)",
      "LCD med USB",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Romer Pro el-sykkel",
      "48V 15Ah batteri med lader",
      "Brukermanual og verktøy",
      "Garantikort",
      "Front- og baklys",
      "Sammenleggbare pedaler",
      "Sidestøtte",
      "Skjermer",
      "Bakre bagasjebrett",
      "Bjelle",
    ],
  },

  // 6. JOBOBIKE Ace Pro
  {
    id: "ace-pro-001",
    name: "JOBOBIKE Ace Pro",
    slug: "jobobike-ace-pro",
    originalPrice: 7497,
    price: 6597,
    discount: "12%",
    image: "/images/ace-pro/ace-pro-1.jpeg",
    images: ["/images/ace-pro/ace-pro-1.jpeg"],
    features: [
      "Fullt dempingssystem",
      '27,5" x 2,8" all-terreng dekk',
      "500W Bafang midtmotor (95Nm)",
      "Hydrauliske bremser m/avbrudd",
      "Farget LCD",
    ],
    badge: "Ytelse",
    category: ["Terreng"],
    rating: 4.9,
    reviewCount: 134,
    specifications: {
      motor: "500W Bafang midtmotor, 95Nm",
      battery: "48V 17.5Ah (840Wh)",
      range: "80-120km",
      speed: "25 km/t",
      weight: "28kg",
      wheelSize: '27.5"',
      foldable: false,
      brakes: "Tektro hydrauliske skiver",
      frame: "Aluminiumsramme, full demping",
      drivetrain: "Shimano 9-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Ace Pro",
        rammeType: "Full demping terreng",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "185cm x 115cm x 72cm", sammenlagt: "N/A" },
        vekt: "28kg",
        maksLast: "130kg",
        anbefalteHøyde: "170-195cm",
      },
      motor: {
        type: "Midtmotor",
        effekt: "500W",
        toppEffekt: "750W",
        dreiemoment: "95Nm",
        plassering: "Senter",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Samsung Lithium-ion med BMS",
        spenning: "48V",
        kapasitet: "17.5Ah",
        kapasitetWh: "840Wh",
        avtakbar: true,
        ladetid: "6-8 timer",
        batteriLevetid: "1000+ ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t (EU) / 32 km/t (konfigurerbar)",
        rekkevidde: { renElektrisk: "50km", pedalAssistanse: "120km", kombinert: "80km" },
        stigningsevne: "25°",
        svingradius: "2.8m",
      },
      hjul: {
        størrelse: '27.5"',
        dekkType: "All-terreng plus",
        dekkStørrelse: '27.5" x 2.8"',
        felgMateriale: "Dobbeltvegg aluminiumslegering",
      },
      bremser: { foran: "Tektro 180mm hydraulisk skive", bak: "Tektro 180mm hydraulisk skive", type: "Hydraulisk m/motoravbrudd" },
      giring: { type: "Ekstern", gir: "9-trinns Shimano", girskifter: "Shimano Alivio" },
      elektrisk: {
        display: "Farget LCD m/Bluetooth",
        lys: { foran: true, bak: true, type: "Høyeffekt LED, flere moduser" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer + gåmodus",
      },
      komfort: {
        demping: { foran: true, bak: true, type: "Foran 120mm / Bak 100mm" },
        sete: { type: "Ytelsessadel", justerbar: true, materiale: "Premium syntetisk lær" },
        styre: { type: "MTB riser 760mm", justerbar: false, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX5", sertifisering: ["EN15194", "CE", "TUV"] },
      tilkobling: { app: true, gps: false, bluetooth: true, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: true },
    },
    description:
      "Ace Pro er toppmodellen for seriøse stisyklister: kraftig midtmotor (95Nm), full demping og premium komponenter for de tøffeste løypene.",
    keyFeatures: [
      "500W midtmotor (95Nm)",
      "Full demping 120/100mm",
      "27,5\" x 2,8\" plus-dekk",
      "48V 17,5Ah (80–120km)",
      "Tektro 180mm hydrauliske skiver",
      "Shimano 9-trinns",
      "Farget LCD m/Bluetooth",
      "Dreiemomentsensor",
    ],
    availableSizes: ["M (170-180cm)", "L (180-195cm)"],
    whatsInTheBox: [
      "JOBOBIKE Ace Pro el-sykkel",
      "48V 17.5Ah Samsung-batteri + hurtiglader",
      "Brukermanual",
      "Garantikort",
      "LED frontlys",
      "Bakre bremselys",
      "Sidestøtte",
      "Skjermer",
      "Flaskeholder",
      "Bjelle",
      "Pedaler",
    ],
  },

  // 7. JOBOBIKE Romer C
  {
    id: "romer-c-001",
    name: "JOBOBIKE Romer C",
    slug: "jobobike-romer-c",
    originalPrice: 5697,
    price: 5097,
    discount: "11%",
    image: "/images/romer-c/romer-c.png",
    images: ["/images/romer-c/romer-c.png"],
    features: [
      "Forbedret lastekapasitet",
      "Forsterket bakre bagasjebrett",
      '20" fatbike-dekk',
      "Sammenleggbart lastedesign",
      "Robust konstruksjon",
    ],
    badge: "Last",
    category: ["Lastesykkel", "Sammenleggbar"],
    rating: 4.7,
    reviewCount: 76,
    specifications: {
      motor: "250W nav, 80Nm",
      battery: "48V 13Ah (624Wh)",
      range: "60-140km",
      speed: "25 km/t",
      weight: "32kg",
      wheelSize: '20"',
      foldable: true,
      brakes: "Mekaniske skivebremser",
      frame: "Forsterket aluminiumslegering",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Romer C",
        rammeType: "Gjennomgående lasteramme",
        rammeMateriale: "Forsterket aluminiumslegering",
        sammenleggbar: true,
        dimensjoner: { utbrettet: "165cm x 110cm x 70cm", sammenlagt: "106cm x 60cm x 86cm" },
        vekt: "32kg",
        maksLast: "180kg",
        anbefalteHøyde: "160cm+",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "80Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "LG Lithium-ion med BMS",
        spenning: "48V",
        kapasitet: "13Ah",
        kapasitetWh: "624Wh",
        avtakbar: true,
        ladetid: "6-8 timer",
        batteriLevetid: "800-1000 ladesykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45km", pedalAssistanse: "140km", kombinert: "60km" },
        stigningsevne: "15°",
        svingradius: "2.2m",
      },
      hjul: {
        størrelse: '20"',
        dekkType: "Fatbike",
        dekkStørrelse: '20" x 4.0"',
        felgMateriale: "Forsterket aluminiumslegering",
      },
      bremser: { foran: "Mekanisk skivebrems", bak: "Mekanisk skivebrems", type: "Tektro mekanisk skive" },
      giring: { type: "Ekstern gir", gir: "7-trinns Shimano", girskifter: "Shimano vrigrep" },
      elektrisk: {
        display: "LCD-skjerm",
        lys: { foran: true, bak: true, type: "LED m/lastsynlighet" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Fat-dekk demping" },
        sete: { type: "Bred komfortsadel", justerbar: true, materiale: "Syntetisk lær, ekstra polstring" },
        styre: { type: "Komfortstyre", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: true, flaskeholder: false },
    },
    description:
      "Romer C er lastevarianten av Romer-serien, med forsterket ramme, kraftig bakre bagasjebrett og 180kg total lastekapasitet.",
    keyFeatures: [
      "Forsterket ramme (180kg maks)",
      "Robust bakre bagasjebrett",
      "20\" fat-dekk for lastestabilitet",
      "Sammenleggbar",
      "Bred komfortsadel",
      "Tilbehør: lastekasser/barnesete/tilhenger",
      "Dobbel sidestøtte (stabil parkering)",
      "Forbedrede synlighetslys",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Romer C el-sykkel",
      "48V 13Ah batteri med lader",
      "Brukermanual og verktøy",
      "Garantikort",
      "Front- og baklys",
      "Robust bakre bagasjebrett",
      "Dobbel sidestøtte",
      "Skjermer",
      "Stor kurv (valgfri)",
      "Bjelle",
      "Sammenleggbare pedaler",
    ],
  },

  // 8. JOBOBIKE Sam
  {
    id: "sam-001",
    name: "JOBOBIKE Sam",
    slug: "jobobike-sam",
    originalPrice: 3897,
    price: 3897,
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
    features: ['350W bakhjulsmotor', "36V 12,8Ah batteri", '20" fat-dekk', "Sammenleggbar", "5 assistansenivåer"],
    category: ["Pendler", "Sammenleggbar"],
    rating: 4.3,
    reviewCount: 67,
    specifications: {
      motor: "350W baknav",
      battery: "36V 12.8Ah (461Wh)",
      range: "60-80 km",
      speed: "25 km/t",
      weight: "22 kg",
      wheelSize: '20"',
      foldable: true,
      brakes: "Skivebremser",
      frame: "Aluminiumslegering",
      drivetrain: "7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Sam",
        rammeType: "Sammenleggbar",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: true,
        dimensjoner: { utbrettet: "160 x 58 x 100 cm", sammenlagt: "80 x 58 x 70 cm" },
        vekt: "22 kg",
        maksLast: "100 kg",
        anbefalteHøyde: "155-185 cm",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "350W",
        toppEffekt: "500W",
        dreiemoment: "40Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "12.8Ah",
        kapasitetWh: "461Wh",
        avtakbar: true,
        ladetid: "4-5 timer",
        batteriLevetid: "600+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45 km", pedalAssistanse: "60-80 km", kombinert: "50-70 km" },
        stigningsevne: "15°",
      },
      hjul: {
        størrelse: '20"',
        dekkType: "Fatbike",
        dekkStørrelse: '20 x 4.0"',
        felgMateriale: "Aluminiumslegering",
      },
      bremser: { foran: "Mekanisk skive", bak: "Mekanisk skive", type: "160mm rotorer" },
      giring: { type: "Girkasse", gir: "7-trinns", girskifter: "Shimano" },
      elektrisk: {
        display: "LCD-skjerm",
        lys: { foran: true, bak: true, type: "LED" },
        horn: false,
        gasspedal: true,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "Fjærgaffel" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "PU-lær" },
        styre: { type: "Sammenleggbart", justerbar: true, materiale: "Stål" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: false },
    },
    description:
      "Sam er en kompakt, sammenleggbar elsykkel for bypendlere – lett å oppbevare og transportere uten å ofre ytelse.",
    keyFeatures: [
      "Hurtig sammenlegging",
      "Fat-dekk for komfort/stabilitet",
      "Kraftig 350W motor",
      "Avtakbart batteri",
      "Kompakt størrelse for leilighet/kontor",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Sam el-sykkel",
      "36V 12.8Ah batteri",
      "Lader",
      "Brukermanual",
      "Sammenleggingsguide",
      "2 nøkler",
    ],
  },

  // 9. JOBOBIKE Lyon Pro
  {
    id: "lyon-pro-001",
    name: "JOBOBIKE Lyon Pro",
    slug: "jobobike-lyon-pro",
    originalPrice: 5697,
    price: 4797,
    discount: "16%",
    image: "/images/lyon/lyon-1.png",
    images: ["/images/lyon/lyon-1.png", "/images/lyon/lyon-2.png"],
    features: [
      "250W midtmotor",
      "48V 15Ah avtakbart batteri",
      "9-trinns Shimano",
      "90+ km rekkevidde",
      "Bluetooth-app",
    ],
    badge: "Bestselger",
    category: ["Pendler"],
    rating: 4.7,
    reviewCount: 142,
    specifications: {
      motor: "250W midtmotor",
      battery: "48V 15Ah (720Wh)",
      range: "90-110 km",
      speed: "25 km/t",
      weight: "24 kg",
      wheelSize: '26"',
      foldable: false,
      brakes: "Hydrauliske skiver",
      frame: "Aluminiumslegering",
      drivetrain: "Shimano 9-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Lyon Pro",
        rammeType: "Gjennomgående",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "185 x 65 x 110 cm", sammenlagt: "N/A" },
        vekt: "24 kg",
        maksLast: "120 kg",
        anbefalteHøyde: "155-195 cm",
      },
      motor: {
        type: "Midtmotor",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "90Nm",
        plassering: "Senter",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "48V",
        kapasitet: "15Ah",
        kapasitetWh: "720Wh",
        avtakbar: true,
        ladetid: "4-6 timer",
        batteriLevetid: "800+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "60 km", pedalAssistanse: "90-110 km", kombinert: "75-95 km" },
        stigningsevne: "25°",
        svingradius: "1.8m",
      },
      hjul: { størrelse: '26"', dekkType: "Bydekk", dekkStørrelse: '26 x 2.1"', felgMateriale: "Aluminiumslegering" },
      bremser: { foran: "Hydraulisk skive 180mm", bak: "Hydraulisk skive 180mm", type: "Hydraulisk skive" },
      giring: { type: "Girkasse", gir: "9-trinns", girskifter: "Shimano" },
      elektrisk: {
        display: "LCD Bluetooth",
        lys: { foran: true, bak: true, type: "LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "Fjærgaffel" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Ergonomisk", justerbar: true, materiale: "Aluminium" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: true, gps: false, bluetooth: true, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: false, flaskeholder: true },
    },
    description:
      "Lyon Pro er en sofistikert by-elsykkel med kraftig midtmotor og langdistanse batteri – perfekt balanse mellom ytelse og effektivitet.",
    keyFeatures: [
      "Midtmotor 250W / 90Nm",
      "48V 15Ah avtakbart batteri",
      "Bluetooth-app",
      "Hydrauliske skiver",
      "Komfortabel gjennomgående ramme",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Lyon Pro el-sykkel",
      "48V 15Ah batteri",
      "Lader",
      "Brukermanual",
      "Monteringsverktøy",
      "2 nøkler",
    ],
  },

  // 10. JOBOBIKE Dyno GT
  {
    id: "dyno-gt-001",
    name: "JOBOBIKE Dyno GT",
    slug: "jobobike-dyno-gt",
    originalPrice: 5097,
    price: 4347,
    discount: "15%",
    image: "/images/dyno/dyno-1.png",
    images: ["/images/dyno/dyno-1.png", "/images/dyno/dyno-2.png"],
    features: [
      "250W bakhjulsmotor",
      "48V 15Ah smart batteri",
      "8-trinns Shimano",
      "Dreiemomentsensor",
      "Smart LCD",
    ],
    category: ["Pendler", "Hybrid"],
    rating: 4.5,
    reviewCount: 89,
    specifications: {
      motor: "250W baknav",
      battery: "48V 15Ah (720Wh)",
      range: "90+ km",
      speed: "25 km/t",
      weight: "26 kg",
      wheelSize: '27.5"',
      foldable: false,
      brakes: "Hydrauliske skiver",
      frame: "Aluminiumslegering",
      drivetrain: "Shimano 8-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Dyno GT",
        rammeType: "Diamant",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "180 x 60 x 105 cm", sammenlagt: "N/A" },
        vekt: "26 kg",
        maksLast: "125 kg",
        anbefalteHøyde: "165-200 cm",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "45Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "48V",
        kapasitet: "15Ah",
        kapasitetWh: "720Wh",
        avtakbar: true,
        ladetid: "3-4 timer",
        batteriLevetid: "1000+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "70 km", pedalAssistanse: "90-120 km", kombinert: "80-100 km" },
        stigningsevne: "20°",
      },
      hjul: {
        størrelse: '27.5"',
        dekkType: "Hybrid",
        dekkStørrelse: '27.5 x 1.95"',
        felgMateriale: "Dobbeltvegg aluminium",
      },
      bremser: { foran: "Hydraulisk skive", bak: "Hydraulisk skive", type: "160mm rotorer" },
      giring: { type: "Girkasse", gir: "8-trinns", girskifter: "Shimano Altus" },
      elektrisk: {
        display: "Smart LCD m/Bluetooth",
        lys: { foran: true, bak: true, type: "Auto-sensing LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "Låsbar gaffel" },
        sete: { type: "Sportsadel", justerbar: true, materiale: "Syntetisk" },
        styre: { type: "Flatt styre", justerbar: false, materiale: "Aluminium" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX5", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: true, gps: false, bluetooth: true, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: true },
    },
    description:
      "Dyno GT kombinerer smart teknologi og pålitelig ytelse. Dreiemomentsensor og intelligent skjerm gir naturlig kjørefølelse for teknologikyndige pendlere.",
    keyFeatures: [
      "Dreiemomentsensor",
      "Rask 3t lading",
      "Auto-sensing baklys",
      "Bluetooth LCD + app",
      "Lett og solid aluminiumsramme",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Dyno GT el-sykkel",
      "48V 15Ah batteri",
      "Hurtiglader",
      "Brukermanual",
      "Monteringssett",
      "2 nøkler",
    ],
  },

  // 11. JOBOBIKE Transer
  {
    id: "transer-001",
    name: "JOBOBIKE Transer",
    slug: "jobobike-transer",
    originalPrice: 6597,
    price: 5697,
    discount: "14%",
    image: "/images/transer/transer-1.png",
    images: ["/images/transer/transer-1.png", "/images/transer/transer-2.png", "/images/transer/transer-3.png"],
    features: ["250W midtmotor", "48V 17,5Ah batteri", "Lastekasse inkludert", "Familievennlig", "Lang ramme"],
    badge: "Familievalg",
    category: ["Lastesykkel", "Hybrid"],
    rating: 4.8,
    reviewCount: 123,
    specifications: {
      motor: "250W midtmotor",
      battery: "48V 17.5Ah (840Wh)",
      range: "80-100 km",
      speed: "25 km/t",
      weight: "32 kg",
      wheelSize: '26"',
      foldable: false,
      brakes: "Hydrauliske skiver",
      frame: "Aluminium, cargo",
      drivetrain: "8-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Transer",
        rammeType: "Last / Langhale",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "220 x 65 x 110 cm", sammenlagt: "N/A" },
        vekt: "32 kg",
        maksLast: "180 kg",
        anbefalteHøyde: "160-195 cm",
      },
      motor: {
        type: "Midtmotor",
        effekt: "250W",
        toppEffekt: "600W",
        dreiemoment: "80Nm",
        plassering: "Senter",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "48V",
        kapasitet: "17.5Ah",
        kapasitetWh: "840Wh",
        avtakbar: true,
        ladetid: "5-6 timer",
        batteriLevetid: "800+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "60 km", pedalAssistanse: "80-100 km", kombinert: "70-90 km" },
        stigningsevne: "20°",
      },
      hjul: {
        størrelse: '26"',
        dekkType: "Cargo",
        dekkStørrelse: '26 x 2.35"',
        felgMateriale: "Forsterket aluminium",
      },
      bremser: { foran: "Hydraulisk skive", bak: "Hydraulisk skive", type: "180mm rotorer" },
      giring: { type: "Ekstern (derailleur)", gir: "8-trinns", girskifter: "Shimano Acera" },
      elektrisk: {
        display: "LCD-skjerm",
        lys: { foran: true, bak: true, type: "Kraftig LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "Cargo-gaffel" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Gel-polstring" },
        styre: { type: "Cargo-styre", justerbar: true, materiale: "Aluminium" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: true, flaskeholder: true },
    },
    description:
      "Transer er familielastesykkelen for trygg transport av barn og last – utvidet ramme, kraftig midtmotor og stor batterikapasitet.",
    keyFeatures: [
      "Lang ramme for mye last",
      "Kraftig midtmotor (80Nm)",
      "840Wh batteri",
      "Integrert lastekasse",
      "Stabil og komfortabel fullt lastet",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Transer el-sykkel",
      "48V 17.5Ah batteri",
      "Lader",
      "Lastekasse + stropper",
      "Brukermanual",
      "2 nøkler",
    ],
  },

  // 12. JOBOBIKE Mover
  {
    id: "mover-001",
    name: "JOBOBIKE Mover",
    slug: "jobobike-mover",
    originalPrice: 4197,
    price: 3597,
    discount: "14%",
    image: "/images/mover/mover-1.png",
    images: ["/images/mover/mover-1.png", "/images/mover/mover-2.png"],
    features: [
      "250W bakhjulsmotor",
      "36V 14Ah batteri",
      "Lav innsteg ramme",
      "Komfortabel sittestilling",
      "Integrerte lys",
    ],
    category: ["Pendler"],
    rating: 4.4,
    reviewCount: 78,
    specifications: {
      motor: "250W baknav",
      battery: "36V 14Ah (504Wh)",
      range: "70-90 km",
      speed: "25 km/t",
      weight: "23 kg",
      wheelSize: '28"',
      foldable: false,
      brakes: "V-bremser",
      frame: "Stål, gjennomgående",
      drivetrain: "7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Mover",
        rammeType: "Gjennomgående",
        rammeMateriale: "Høyfast stål",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "175 x 60 x 105 cm", sammenlagt: "N/A" },
        vekt: "23 kg",
        maksLast: "110 kg",
        anbefalteHøyde: "150-185 cm",
      },
      motor: {
        type: "Bakhjulsmotor",
        effekt: "250W",
        toppEffekt: "400W",
        dreiemoment: "35Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "14Ah",
        kapasitetWh: "504Wh",
        avtakbar: true,
        ladetid: "4-5 timer",
        batteriLevetid: "700+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "50 km", pedalAssistanse: "70-90 km", kombinert: "60-80 km" },
        stigningsevne: "15°",
      },
      hjul: {
        størrelse: '28"',
        dekkType: "By",
        dekkStørrelse: '28 x 1.75"',
        felgMateriale: "Aluminium",
      },
      bremser: { foran: "V-bremse", bak: "V-bremse", type: "Mekanisk" },
      giring: { type: "Derailleur", gir: "7-trinns", girskifter: "Shimano Tourney" },
      elektrisk: {
        display: "LED-indikator",
        lys: { foran: true, bak: true, type: "Integrert LED" },
        horn: false,
        gasspedal: true,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Skumpolstring" },
        styre: { type: "Svingt tilbake", justerbar: false, materiale: "Stål" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: true, flaskeholder: false },
    },
    description:
      "Mover tilbyr avslappet, oppreist bykjøring med klassisk gjennomgående design og integrerte lys – behagelig og rimelig transport.",
    keyFeatures: [
      "Enkel påstigning (gjennomgående ramme)",
      "Oppreist sittestilling",
      "Integrerte lys",
      "Klassisk styling + moderne el-teknologi",
      "Pålitelig og prisgunstig",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Mover el-sykkel",
      "36V 14Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "2 nøkler",
    ],
  },

  // 13. JOBOBIKE Eddy X
  {
    id: "eddy-x-001",
    name: "JOBOBIKE Eddy X",
    slug: "jobobike-eddy-x",
    originalPrice: 4797,
    price: 4047,
    discount: "16%",
    image: "/images/eddy-x/eddy-1.png",
    images: ["/images/eddy-x/eddy-1.png", "/images/eddy-x/eddy-2.png"],
    features: ["250W midtmotor", "36V 16Ah batteri", "Smart skjerm", "Integrert design", "Byoptimalisert"],
    category: ["Pendler"],
    rating: 4.5,
    reviewCount: 94,
    specifications: {
      motor: "250W midtmotor",
      battery: "36V 16Ah (576Wh)",
      range: "80-100 km",
      speed: "25 km/t",
      weight: "25 kg",
      wheelSize: '28"',
      foldable: false,
      brakes: "Hydrauliske skiver",
      frame: "Integrert aluminium",
      drivetrain: "8-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Eddy X",
        rammeType: "Integrert",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "180 x 60 x 105 cm", sammenlagt: "N/A" },
        vekt: "25 kg",
        maksLast: "120 kg",
        anbefalteHøyde: "160-195 cm",
      },
      motor: {
        type: "Midtmotor",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "70Nm",
        plassering: "Senter",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "16Ah",
        kapasitetWh: "576Wh",
        avtakbar: false,
        ladetid: "4-5 timer",
        batteriLevetid: "1000+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "60 km", pedalAssistanse: "80-100 km", kombinert: "70-90 km" },
        stigningsevne: "20°",
      },
      hjul: { størrelse: '28"', dekkType: "Urban", dekkStørrelse: '28 x 1.6"', felgMateriale: "Aluminiumslegering" },
      bremser: { foran: "Hydraulisk skive", bak: "Hydraulisk skive", type: "160mm rotorer" },
      giring: { type: "Derailleur", gir: "8-trinns", girskifter: "Shimano Acera" },
      elektrisk: {
        display: "Smart fargeskjerm",
        lys: { foran: true, bak: true, type: "Integrert LED" },
        horn: false,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Ergonomisk", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Ergonomisk (svakt nedover)", justerbar: false, materiale: "Aluminium" },
      },
      sikkerhet: { reflekser: true, bjelle: false, vannMotstand: "IPX5", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: true, gps: false, bluetooth: true, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: true },
    },
    description:
      "Eddy X kombinerer elegant integrert design med smart teknologi – en moderne by-elsykkel med effektiv midtmotor.",
    keyFeatures: [
      "Integrert batteridesign",
      "Smart fargeskjerm m/tilkobling",
      "Effektiv midtmotor",
      "Aerodynamisk ramme",
      "Stil + ytelse for byen",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Eddy X el-sykkel",
      "Integrert batteri",
      "Smart lader",
      "Brukermanual",
      "App-oppsettguide",
      "Monteringsverktøy",
    ],
  },

  // 14. JOBOBIKE Astra
  {
    id: "astra-001",
    name: "JOBOBIKE Astra",
    slug: "jobobike-astra",
    originalPrice: 3597,
    price: 2997,
    discount: "17%",
    image: "/images/astra/astra-1.png",
    images: ["/images/astra/astra-1.png", "/images/astra/astra-2.png"],
    features: ["250W forhjulsmotor", "36V 10Ah", "Lett design", "Budsjettvennlig", "Enkel betjening"],
    badge: "Best verdi",
    category: ["Pendler"],
    rating: 4.2,
    reviewCount: 156,
    specifications: {
      motor: "250W fornav",
      battery: "36V 10Ah (360Wh)",
      range: "40-60 km",
      speed: "25 km/t",
      weight: "21 kg",
      wheelSize: '26"',
      foldable: false,
      brakes: "V-bremser",
      frame: "Stål",
      drivetrain: "6-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Astra",
        rammeType: "Bysykkel",
        rammeMateriale: "Høyfast stål",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "175 x 60 x 105 cm", sammenlagt: "N/A" },
        vekt: "21 kg",
        maksLast: "100 kg",
        anbefalteHøyde: "155-185 cm",
      },
      motor: {
        type: "Forhjulsmotor",
        effekt: "250W",
        toppEffekt: "350W",
        dreiemoment: "30Nm",
        plassering: "Forhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "10Ah",
        kapasitetWh: "360Wh",
        avtakbar: true,
        ladetid: "3-4 timer",
        batteriLevetid: "500+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "30 km", pedalAssistanse: "40-60 km", kombinert: "35-50 km" },
        stigningsevne: "12°",
      },
      hjul: {
        størrelse: '26"',
        dekkType: "By",
        dekkStørrelse: '26 x 1.95"',
        felgMateriale: "Stål",
      },
      bremser: { foran: "V-bremse", bak: "V-bremse", type: "Mekanisk" },
      giring: { type: "Derailleur", gir: "6-trinns", girskifter: "Shimano Tourney" },
      elektrisk: {
        display: "Enkel LED",
        lys: { foran: true, bak: false, type: "Basic LED" },
        horn: false,
        gasspedal: true,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Grunnleggende komfort", justerbar: true, materiale: "PU" },
        styre: { type: "By-styre", justerbar: false, materiale: "Stål" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["EN15194", "CE"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: false },
    },
    description:
      "Astra er en prisgunstig innstegsmodell for bypendlere – lett, enkel og pålitelig med forhjulsmotor.",
    keyFeatures: [
      "Rimelig inngangsbillett",
      "Lett og lettmanøvrert",
      "Brukervennlig",
      "Pålitelig fornavsmotor",
      "Korte/middels pendler",
    ],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Astra el-sykkel",
      "36V 10Ah batteri",
      "Lader",
      "Brukermanual",
      "Grunnverktøy",
      "2 nøkler",
    ],
  },

  // 15. JOBOBIKE Viva
  {
    id: "viva-001",
    name: "JOBOBIKE Viva",
    slug: "jobobike-viva",
    originalPrice: 5097,
    price: 4197,
    discount: "18%",
    image: "/images/viva/viva-1.png",
    images: ["/images/viva/viva-1.png", "/images/viva/viva-2.png", "/images/viva/viva-3.png", "/images/viva/viva-4.png", "/images/viva/viva-5.png"],
    features: [
      "Lett 22kg aluminiumsramme",
      "250W XOFO bakhjulsmotor",
      "36V 14Ah LG batteri (BMS)",
      '28" hjul for jevn bykjøring',
      "Integrerte lys og skjermer",
    ],
    badge: "Lettvekt",
    category: ["Pendler"],
    rating: 4.7,
    reviewCount: 89,
    specifications: {
      motor: "250W XOFO baknav",
      battery: "36V 14Ah (504Wh)",
      range: "50-70 km",
      speed: "25 km/t",
      weight: "22 kg",
      wheelSize: '28"',
      foldable: false,
      brakes: "Mekaniske skivebremser",
      frame: "Aluminium 6061",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Viva",
        rammeType: "Høy ramme",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "1850 x 680 x 1050 mm", sammenlagt: "N/A" },
        vekt: "22 kg",
        maksLast: "120 kg",
        anbefalteHøyde: "165-185 cm",
      },
      motor: {
        type: "Børsteløs baknav (XOFO)",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "30Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "LG Lithium-ion",
        spenning: "36V",
        kapasitet: "14Ah",
        kapasitetWh: "504Wh",
        avtakbar: true,
        ladetid: "4-6 timer",
        batteriLevetid: "800-1000 sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45 km", pedalAssistanse: "70 km", kombinert: "50-70 km" },
        stigningsevne: "15°",
        svingradius: "2.5m",
      },
      hjul: { størrelse: '28"', dekkType: "By", dekkStørrelse: '28 x 1.75"', felgMateriale: "Aluminiumslegering" },
      bremser: { foran: "Mekanisk skive 160mm", bak: "Mekanisk skive 160mm", type: "Skivebremser" },
      giring: { type: "Derailleur", gir: "7-trinns", girskifter: "Shimano Tourney" },
      elektrisk: {
        display: "LED-display",
        lys: { foran: true, bak: true, type: "Integrert LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Ergonomisk", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "By-styre", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["CE", "EN15194"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: false, flaskeholder: false },
    },
    description:
      "Viva er den letteste modellen (22kg) – elegant og praktisk for bypendling med 28\" hjul og integrerte komponenter.",
    keyFeatures: [
      "22kg lett konstruksjon",
      "250W baknav (30Nm)",
      "504Wh batteri",
      "Elegant bydesign",
      "Shimano 7-trinns",
      "Integrerte lys/skjermer",
    ],
    availableSizes: ["One Size (165-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Viva el-sykkel",
      "36V 14Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Pedaler",
      "Bjelle",
    ],
  },

  // 16. JOBOBIKE Viva ST
  {
    id: "viva-st-001",
    name: "JOBOBIKE Viva ST",
    slug: "jobobike-viva-st",
    originalPrice: 5097,
    price: 4197,
    discount: "18%",
    image: "/images/viva-st/viva-st-1.png",
    images: ["/images/viva-st/viva-st-1.png", "/images/viva-st/viva-st-2.png", "/images/viva-st/viva-st-3.png", "/images/viva-st/viva-st-4.png", "/images/viva-st/viva-st-5.png"],
    features: ["Gjennomgående ramme", "Lett 22kg", "250W bakhjulsmotor", "36V 10,4Ah batteri", "Bypendling"],
    badge: "Lettvekt",
    category: ["Pendler"],
    rating: 4.8,
    reviewCount: 76,
    specifications: {
      motor: "250W XOFO baknav",
      battery: "36V 10.4Ah (374Wh)",
      range: "40-60 km",
      speed: "25 km/t",
      weight: "22 kg",
      wheelSize: '28"',
      foldable: false,
      brakes: "Mekaniske skiver",
      frame: "Gjennomgående aluminium",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Viva ST",
        rammeType: "Gjennomgående",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "1850 x 680 x 1050 mm", sammenlagt: "N/A" },
        vekt: "22 kg",
        maksLast: "120 kg",
        anbefalteHøyde: "165-185 cm",
      },
      motor: {
        type: "Børsteløs baknav (XOFO)",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "30Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "LG Lithium-ion",
        spenning: "36V",
        kapasitet: "10.4Ah",
        kapasitetWh: "374Wh",
        avtakbar: true,
        ladetid: "4-5 timer",
        batteriLevetid: "800-1000 sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "35 km", pedalAssistanse: "60 km", kombinert: "40-60 km" },
        stigningsevne: "15°",
        svingradius: "2.5m",
      },
      hjul: { størrelse: '28"', dekkType: "By", dekkStørrelse: '28 x 1.75"', felgMateriale: "Aluminiumslegering" },
      bremser: { foran: "Mekanisk skive 160mm", bak: "Mekanisk skive 160mm", type: "Skivebremser" },
      giring: { type: "Derailleur", gir: "7-trinns", girskifter: "Shimano Tourney" },
      elektrisk: {
        display: "LED-display",
        lys: { foran: true, bak: true, type: "Integrert LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Svingt (swept-back)", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["CE", "EN15194"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: false, flaskeholder: false },
    },
    description:
      "Viva ST har lav innsteg (gjennomgående ramme) for enkel på-/avstigning – lett, komfortabel og perfekt for daglige turer i byen.",
    keyFeatures: [
      "Lav innsteg",
      "22kg lett vekt",
      "250W baknav (30Nm)",
      "Komfortabel sittestilling",
      "Integrerte lys/skjermer",
      "Shimano 7-trinns",
    ],
    availableSizes: ["One Size (165-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Viva ST el-sykkel",
      "36V 10.4Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Pedaler",
      "Bjelle",
    ],
  },

  // 17. JOBOBIKE Henry
  {
    id: "henry-001",
    name: "JOBOBIKE Henry",
    slug: "jobobike-henry",
    originalPrice: 6897,
    price: 5697,
    discount: "17%",
    image: "/images/henry/henry-1.png",
    images: ["/images/henry/henry-1.png", "/images/henry/henry-2.png"],
    features: ["Bafang M200 midtmotor", "Skjult integrert batteri", "Retro design", '28" hjul', "Premium komponenter"],
    badge: "Midtmotor",
    category: ["Pendler"],
    rating: 4.9,
    reviewCount: 64,
    specifications: {
      motor: "Bafang M200 250W",
      battery: "36V 14Ah (504Wh)",
      range: "60-90 km",
      speed: "25 km/t",
      weight: "24 kg",
      wheelSize: '28"',
      foldable: false,
      brakes: "Hydrauliske skiver",
      frame: "Klassisk høy ramme (aluminium)",
      drivetrain: "Shimano 8-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Henry",
        rammeType: "Høy klassisk ramme",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "1900 x 700 x 1100 mm", sammenlagt: "N/A" },
        vekt: "24 kg",
        maksLast: "125 kg",
        anbefalteHøyde: "170-195 cm",
      },
      motor: {
        type: "Midtmotor (Bafang M200)",
        effekt: "250W",
        toppEffekt: "500W",
        dreiemoment: "55Nm",
        plassering: "Midt",
        dreiemomentSensor: true,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "14Ah",
        kapasitetWh: "504Wh",
        avtakbar: true,
        ladetid: "4-6 timer",
        batteriLevetid: "1000+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "50 km", pedalAssistanse: "90 km", kombinert: "60-90 km" },
        stigningsevne: "20°",
        svingradius: "2.8m",
      },
      hjul: { størrelse: '28"', dekkType: "By", dekkStørrelse: '28 x 1.75"', felgMateriale: "Aluminiumslegering" },
      bremser: { foran: "Hydraulisk skive 180mm", bak: "Hydraulisk skive 180mm", type: "Skivebremser" },
      giring: { type: "Derailleur", gir: "8-trinns", girskifter: "Shimano Altus" },
      elektrisk: {
        display: "Farget LCD",
        lys: { foran: true, bak: true, type: "Integrert LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Ergonomisk", justerbar: true, materiale: "Ekte lær" },
        styre: { type: "Klassisk", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX5", sertifisering: ["CE", "EN15194"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: true },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: false, flaskeholder: false },
    },
    description:
      "Henry er en raffinert by-elsykkel for de som vil ha minimalistisk retrostil med moderne midtmotor og skjult batteri.",
    keyFeatures: [
      "Bafang M200 midtmotor (55Nm)",
      "Skjult batteri",
      "Dreiemomentsensor",
      "Hydrauliske skiver",
      "Farget LCD",
      "Retro-stil, moderne teknologi",
    ],
    availableSizes: ["One Size (170-195cm)"],
    whatsInTheBox: [
      "JOBOBIKE Henry el-sykkel",
      "36V 14Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Pedaler",
      "Bjelle",
    ],
  },

  // 18. JOBOBIKE Ace
  {
    id: "ace-001",
    name: "JOBOBIKE Ace",
    slug: "jobobike-ace",
    originalPrice: 4797,
    price: 3897,
    discount: "19%",
    image: "/images/ace/ace-1.png",
    images: ["/images/ace/ace-1.png", "/images/ace/ace-2.png", "/images/ace/ace-3.png"],
    features: ["Sammenleggbart kompakt design", "Mobilapp-kontroll", "250W motor 45Nm", '20" hjul', "Lett og bærbar"],
    badge: "Sammenleggbar",
    category: ["Hybrid", "Pendler", "Sammenleggbar"],
    rating: 4.6,
    reviewCount: 118,
    specifications: {
      motor: "250W baknav",
      battery: "36V 10Ah (360Wh)",
      range: "40-60 km",
      speed: "25 km/t",
      weight: "21 kg",
      wheelSize: '20" x 2.125"',
      foldable: true,
      brakes: "Mekaniske skiver",
      frame: "Sammenleggbar aluminium",
      drivetrain: "Single Speed",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Ace",
        rammeType: "Sammenleggbar",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: true,
        dimensjoner: { utbrettet: "1480 x 580 x 1050 mm", sammenlagt: "800 x 450 x 650 mm" },
        vekt: "21 kg",
        maksLast: "120 kg",
        anbefalteHøyde: "155-190 cm",
      },
      motor: {
        type: "Børsteløs baknav",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "45Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "10Ah",
        kapasitetWh: "360Wh",
        avtakbar: true,
        ladetid: "4-5 timer",
        batteriLevetid: "800+ sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "35 km", pedalAssistanse: "60 km", kombinert: "40-60 km" },
        stigningsevne: "15°",
        svingradius: "2.0m",
      },
      hjul: {
        størrelse: '20"',
        dekkType: "CST anti-punktering",
        dekkStørrelse: '20 x 2.125"',
        felgMateriale: "Aluminiumslegering",
      },
      bremser: { foran: "Mekanisk skive 160mm", bak: "Mekanisk skive 160mm", type: "Skivebremser" },
      giring: { type: "Single Speed", gir: "1-trinn", girskifter: "N/A" },
      elektrisk: {
        display: "LED-display",
        lys: { foran: true, bak: true, type: "LED m/refleksstriper" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: false, bak: false, type: "Ingen" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Sammenleggbart styre", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["CE", "EN15194"] },
      tilkobling: { app: true, gps: false, bluetooth: true, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: false, flaskeholder: false },
    },
    description:
      "Ace er en kompakt sammenleggbar bysykkel med app-kontroll. Enkel å ta med i bil/bod og leverer solid ytelse.",
    keyFeatures: [
      "Hurtig sammenlegging",
      "App-kontroll via Bluetooth",
      "250W / 45Nm",
      "CST punkteringssikre dekk",
      "Kompakte 20\" hjul",
      "Lett 21kg",
    ],
    availableSizes: ["Universal (155-190cm)"],
    whatsInTheBox: [
      "JOBOBIKE Ace el-sykkel",
      "36V 10Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Pedaler",
      "Bjelle",
    ],
  },

  // 19. JOBOBIKE Triker
  {
    id: "triker-001",
    name: "JOBOBIKE Triker",
    slug: "jobobike-triker",
    originalPrice: 6597,
    price: 5397,
    discount: "18%",
    image: "/images/triker/triker-1.png",
    images: ["/images/triker/triker-1.png", "/images/triker/triker-2.png"],
    features: ["Elektrisk trehjulssykkel", "Stor bakre lastekurv", "Ekstra stabilitet", "250W motor m/differensial", "For seniorer og last"],
    badge: "Trehjuling",
    category: ["Hybrid"],
    rating: 4.9,
    reviewCount: 54,
    specifications: {
      motor: "250W differensial",
      battery: "36V 13Ah (468Wh)",
      range: "50-70 km",
      speed: "25 km/t",
      weight: "38 kg",
      wheelSize: '24" foran / 20" bak',
      foldable: false,
      brakes: "V-bremser",
      frame: "Lav gjennomgående stål",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Triker",
        rammeType: "Lav gjennomgående trehjuling",
        rammeMateriale: "Høyfast stål",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "1800 x 750 x 1100 mm", sammenlagt: "N/A" },
        vekt: "38 kg",
        maksLast: "160 kg",
        anbefalteHøyde: "155-185 cm",
      },
      motor: {
        type: "Differensialmotor",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "35Nm",
        plassering: "Bakhjulsaksel",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "13Ah",
        kapasitetWh: "468Wh",
        avtakbar: true,
        ladetid: "5-6 timer",
        batteriLevetid: "800-1000 sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45 km", pedalAssistanse: "70 km", kombinert: "50-70 km" },
        stigningsevne: "12°",
        svingradius: "3.5m",
      },
      hjul: {
        størrelse: '24" / 20"',
        dekkType: "Punkteringsbestandig",
        dekkStørrelse: '24 x 1.95" / 20 x 1.95"',
        felgMateriale: "Stål",
      },
      bremser: { foran: "V-bremse", bak: "V-bremse", type: "V-bremsesystem" },
      giring: { type: "Derailleur", gir: "7-trinns", girskifter: "Shimano Tourney" },
      elektrisk: {
        display: "LED-display",
        lys: { foran: true, bak: true, type: "LED" },
        horn: true,
        gasspedal: true,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "Fjærgaffel" },
        sete: { type: "Ekstra bred komfortsadel", justerbar: true, materiale: "Syntetisk lær m/fjærer" },
        styre: { type: "Ergonomisk svingt", justerbar: true, materiale: "Stål" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["CE", "EN15194"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: false, kurv: true, flaskeholder: false },
    },
    description:
      "Triker er en stabil trehjulssykkel med stor last, lav innsteg og differensial – ideell for seniorer og varetransport.",
    keyFeatures: [
      "Trehjuls stabilitet",
      "Stor bak-kurv (ca. 100L)",
      "Lav innstegsramme",
      "Differensial for jevne svinger",
      "Ekstra bred sadel",
      "Perfekt for last og trygghet",
    ],

    availableSizes: ["Universal (155-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Triker el-trehjulssykkel",
      "36V 13Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Pedaler",
      "Bjelle",
      "Bakre lastekurv",
    ],
  },

  // 20. JOBOBIKE Dyno (ST)
  {
    id: "dyno-001",
    name: "JOBOBIKE Dyno",
    slug: "jobobike-dyno",
    originalPrice: 5397,
    price: 4497,
    discount: "17%",
    image: "/images/dyno-gt/dyno-gt-1.png",
    images: ["/images/dyno-gt/dyno-gt-1.png", "/images/dyno-gt/dyno-gt-2.png"],
    features: ["Lav innsteg komfortdesign", "250W motor", "Frontdemping", '26" hjul', "Rimelig kvalitet"],
    badge: "Best verdi",
    category: ["Hybrid"],
    rating: 4.6,
    reviewCount: 103,
    specifications: {
      motor: "250W baknav",
      battery: "36V 13Ah (468Wh)",
      range: "50-70 km",
      speed: "25 km/t",
      weight: "25 kg",
      wheelSize: '26" x 1.95"',
      foldable: false,
      brakes: "Mekaniske skiver",
      frame: "Gjennomgående aluminium",
      drivetrain: "Shimano 7-trinns",
    },
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "Dyno (ST)",
        rammeType: "Gjennomgående",
        rammeMateriale: "6061 Aluminiumslegering",
        sammenleggbar: false,
        dimensjoner: { utbrettet: "1850 x 680 x 1100 mm", sammenlagt: "N/A" },
        vekt: "25 kg",
        maksLast: "120 kg",
        anbefalteHøyde: "160-185 cm",
      },
      motor: {
        type: "Børsteløs baknav",
        effekt: "250W",
        toppEffekt: "450W",
        dreiemoment: "40Nm",
        plassering: "Bakhjul",
        dreiemomentSensor: false,
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "13Ah",
        kapasitetWh: "468Wh",
        avtakbar: true,
        ladetid: "5-6 timer",
        batteriLevetid: "800-1000 sykluser",
      },
      ytelse: {
        maksFart: "25 km/t",
        rekkevidde: { renElektrisk: "45 km", pedalAssistanse: "70 km", kombinert: "50-70 km" },
        stigningsevne: "15°",
        svingradius: "2.6m",
      },
      hjul: { størrelse: '26"', dekkType: "By", dekkStørrelse: '26 x 1.95"', felgMateriale: "Aluminiumslegering" },
      bremser: { foran: "Mekanisk skive 160mm", bak: "Mekanisk skive 160mm", type: "Skivebremser" },
      giring: { type: "Derailleur", gir: "7-trinns", girskifter: "Shimano Tourney" },
      elektrisk: {
        display: "LED-display",
        lys: { foran: true, bak: true, type: "LED" },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "3 nivåer",
      },
      komfort: {
        demping: { foran: true, bak: false, type: "Fjærgaffel" },
        sete: { type: "Komfortsadel", justerbar: true, materiale: "Syntetisk lær" },
        styre: { type: "Ergonomisk", justerbar: true, materiale: "Aluminiumslegering" },
      },
      sikkerhet: { reflekser: true, bjelle: true, vannMotstand: "IPX4", sertifisering: ["CE", "EN15194"] },
      tilkobling: { app: false, gps: false, bluetooth: false, usb: false },
      tilbehør: { sidestøtte: true, skjermer: true, bagasjebrett: true, kurv: false, flaskeholder: false },
    },
    description:
      "Dyno (ST) gir enkel påstigning, komfortabel frontdemping og solid rekkevidde – mye sykkel for pengene.",
    keyFeatures: [
      "Gjennomgående ramme",
      "Frontdemping",
      "250W / 40Nm",
      "468Wh batteri",
      "26\" hjul",
      "Svært god verdi",
    ],

    availableSizes: ["Universal (160-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Dyno el-sykkel",
      "36V 13Ah batteri",
      "Lader",
      "Brukermanual",
      "Verktøysett",
      "Pedaler",
      "Bjelle",
    ],
  },
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