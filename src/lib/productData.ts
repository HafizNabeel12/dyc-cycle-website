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
        bagasjebrett: true,
        kurv: false,
        flaskeholder: true
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
      generelt: {
        modell: "DYU C1",
        rammeType: "City bike step-through",
        rammeMateriale: "Aluminum alloy",
        sammenleggbar: true,
        dimensjoner: {
          utbrettet: "180×65×110cm",
          sammenlagt: "90×65×85cm"
        },
        vekt: "25kg (55 lbs)",
        maksLast: "150kg (330 lbs)",
        anbefalteHøyde: "160-190cm"
      },
      motor: {
        type: "Rear hub motor",
        effekt: "350W",
        toppEffekt: "500W",
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
        maksFart: "40km/h (25mph)",
        rekkevidde: {
          renElektrisk: "60km (37 miles)",
          pedalAssistanse: "100km (62 miles)",
          kombinert: "60-100km (37-62 miles)"
        },
        stigningsevne: "20°"
      },
      hjul: {
        størrelse: "26 inch (actually 27.5\")",
        dekkType: "All-terrain",
        dekkStørrelse: "27.5×2.5",
        felgMateriale: "Aluminum alloy"
      },
      bremser: {
        foran: "Mechanical disc brake",
        bak: "Mechanical disc brake",
        type: "Dual mechanical disc"
      },
      giring: {
        type: "Shimano derailleur",
        gir: "7-speed",
        girskifter: "Shimano"
      },
      elektrisk: {
        display: "LED display",
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
          foran: true,
          bak: false,
          type: "Front suspension fork"
        },
        sete: {
          type: "Comfort saddle",
          justerbar: true,
          materiale: "Synthetic leather"
        },
        styre: {
          type: "City handlebar",
          justerbar: true,
          materiale: "Steel"
        }
      },
      sikkerhet: {
        reflekser: true,
        bjelle: true,
        vannMotstand: "IPX4",
        sertifisering: ["CE"]
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
        bagasjebrett: true,
        kurv: false,
        flaskeholder: false
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
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "DYU C6",
        rammeType: "Step-through city",
        rammeMateriale: "Steel frame",
        sammenleggbar: true,
        dimensjoner: {
          utbrettet: "175×65×115cm",
          sammenlagt: "88×65×90cm"
        },
        vekt: "25kg (55 lbs)",
        maksLast: "120kg (264 lbs)",
        anbefalteHøyde: "155-185cm"
      },
      motor: {
        type: "Rear hub motor",
        effekt: "250W",
        toppEffekt: "350W",
        plassering: "Rear wheel",
        dreiemomentSensor: false
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "12.5Ah",
        kapasitetWh: "450Wh",
        avtakbar: true,
        ladetid: "4-6 hours",
        batteriLevetid: "800+ cycles"
      },
      ytelse: {
        maksFart: "25km/h (15.5mph)",
        rekkevidde: {
          renElektrisk: "50km (31 miles)",
          pedalAssistanse: "60km (37 miles)",
          kombinert: "50-60km (31-37 miles)"
        },
        stigningsevne: "20°",
        svingradius: "65°"
      },
      hjul: {
        størrelse: "26 inch",
        dekkType: "City tires",
        dekkStørrelse: "26×1.95",
        felgMateriale: "Steel"
      },
      bremser: {
        foran: "Hydraulic disc brake",
        bak: "Hydraulic disc brake",
        type: "Dual hydraulic disc"
      },
      giring: {
        type: "Single speed",
        gir: "1"
      },
      elektrisk: {
        display: "LCD display",
        lys: {
          foran: true,
          bak: true,
          type: "LED integrated"
        },
        horn: true,
        gasspedal: true,
        assistanseNivåer: "3 levels"
      },
      komfort: {
        demping: {
          foran: true,
          bak: true,
          type: "Front fork + seat suspension"
        },
        sete: {
          type: "Comfort seat with suspension",
          justerbar: true,
          materiale: "PU leather"
        },
        styre: {
          type: "Adjustable handlebar",
          justerbar: true,
          materiale: "Steel"
        }
      },
      sikkerhet: {
        reflekser: true,
        bjelle: true,
        vannMotstand: "IPX4",
        sertifisering: ["CE"]
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
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "DYU C9",
        rammeType: "Fat tire folding",
        rammeMateriale: "Steel and aluminum hybrid",
        sammenleggbar: true,
        dimensjoner: {
          utbrettet: "170×70×115cm",
          sammenlagt: "95×70×90cm"
        },
        vekt: "29.5kg (65 lbs)",
        maksLast: "150kg (330 lbs)",
        anbefalteHøyde: "160-195cm"
      },
      motor: {
        type: "Rear hub motor",
        effekt: "500W",
        toppEffekt: "750W",
        dreiemoment: "65Nm",
        plassering: "Rear wheel",
        dreiemomentSensor: false
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "48V",
        kapasitet: "15Ah",
        kapasitetWh: "720Wh",
        avtakbar: true,
        ladetid: "6-8 hours",
        batteriLevetid: "1000+ cycles"
      },
      ytelse: {
        maksFart: "45km/h (28mph)",
        rekkevidde: {
          renElektrisk: "80km (50 miles)",
          pedalAssistanse: "160km (100 miles)",
          kombinert: "100-160km (62-100 miles)"
        },
        stigningsevne: "30°"
      },
      hjul: {
        størrelse: "20 inch",
        dekkType: "Fat tires",
        dekkStørrelse: "20×3.0",
        felgMateriale: "Aluminum alloy"
      },
      bremser: {
        foran: "Hydraulic disc brake",
        bak: "Hydraulic disc brake",
        type: "Dual hydraulic disc (180mm rotors)"
      },
      giring: {
        type: "Shimano derailleur",
        gir: "7-speed",
        girskifter: "Shimano"
      },
      elektrisk: {
        display: "Color LCD display",
        lys: {
          foran: true,
          bak: true,
          type: "High-power LED"
        },
        horn: true,
        gasspedal: true,
        assistanseNivåer: "5 levels"
      },
      komfort: {
        demping: {
          foran: true,
          bak: false,
          type: "Front shock absorber"
        },
        sete: {
          type: "Wide comfort saddle",
          justerbar: true,
          materiale: "Memory foam with leather"
        },
        styre: {
          type: "Ergonomic handlebar",
          justerbar: true,
          materiale: "Aluminum alloy"
        }
      },
      sikkerhet: {
        reflekser: true,
        bjelle: true,
        vannMotstand: "IPX5",
        sertifisering: ["CE", "UL"]
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
        bagasjebrett: true,
        kurv: false,
        flaskeholder: true
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
    tekniskeSpesifikasjoner: {
      generelt: {
        modell: "DYU Stroll 1",
        rammeType: "City bike step-through",
        rammeMateriale: "Streamlined aluminum alloy",
        sammenleggbar: false,
        dimensjoner: {
          utbrettet: "185×65×115cm",
          sammenlagt: "N/A (non-folding)"
        },
        vekt: "22kg (48.5 lbs)",
        maksLast: "125kg (275 lbs)",
        anbefalteHøyde: "160-185cm"
      },
      motor: {
        type: "Mid-drive motor",
        effekt: "250W",
        toppEffekt: "400W",
        dreiemoment: "45Nm",
        plassering: "Bottom bracket",
        dreiemomentSensor: false
      },
      batteri: {
        type: "Lithium-ion",
        spenning: "36V",
        kapasitet: "9Ah",
        kapasitetWh: "324Wh",
        avtakbar: true,
        ladetid: "3-4 hours",
        batteriLevetid: "800+ cycles"
      },
      ytelse: {
        maksFart: "25km/h (15.5mph)",
        rekkevidde: {
          renElektrisk: "45km (28 miles)",
          pedalAssistanse: "67km (42 miles)",
          kombinert: "50-67km (31-42 miles)"
        },
        stigningsevne: "15°"
      },
      hjul: {
        størrelse: "700C (28 inch)",
        dekkType: "City/road tires",
        dekkStørrelse: "700×35C",
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
        girskifter: "Shimano"
      },
      elektrisk: {
        display: "LCD display with multiple modes",
        lys: {
          foran: true,
          bak: true,
          type: "Integrated LED system"
        },
        horn: true,
        gasspedal: false,
        assistanseNivåer: "5 levels (Eco, Normal, Sport modes)"
      },
      komfort: {
        demping: {
          foran: false,
          bak: false
        },
        sete: {
          type: "Ergonomic city saddle",
          justerbar: true,
          materiale: "Synthetic leather"
        },
        styre: {
          type: "Comfort city handlebar",
          justerbar: true,
          materiale: "Aluminum alloy"
        }
      },
      sikkerhet: {
        reflekser: true,
        bjelle: true,
        vannMotstand: "IPX4",
        sertifisering: ["CE", "EN15194"]
      },
      tilkobling: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: false
      },
      tilbehør: {
        sidestøtte: true,
        skjermer: true,
        bagasjebrett: false,
        kurv: false,
        flaskeholder: true
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

export const getProductById = (id: string) => {
  return PRODUCTS_DATA.find(product => product.id === id);
};