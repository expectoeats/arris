/**
 * ARRIS ARCHITECTS - Centralized Projects Database
 * Supports dynamic rendering on project-detail.html
 */
const ARRIS_PROJECTS = {
  // 1. Devgn Cinex Bellona (Cinemas, Thane) - Exact match to user reference screenshot
  'devgn-cinex-bellona': {
    id: 'devgn-cinex-bellona',
    title: 'Devgn Cinex Bellona',
    sec: 'SEC. 2019',
    category: 'Cinemas',
    location: 'Thane',
    year: '2026',
    heroImage: 'images/Devgn Cinex Bellona/2.jpeg',
    storyImage: 'images/Devgn Cinex Bellona/1.jpeg',
    description: "Inspired by Art Deco elegance, the interiors of the Devgn Cinex Bellona cinema in Mumbai celebrates bold geometry, rich symmetry, and metallic accents, layered with retro nostalgia — marquee signage, plush velvet seating, vintage posters, and patterned carpets. The fusion creates an atmosphere where every corner echoes the romance of yesterday's drama while captivating today's audience.",
    specs: {
      location: 'Thane',
      scope: 'Cinema, Interiors',
      typology: 'Cinema',
      siteArea: '3 Screens, 620 Seats',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/Devgn Cinex Bellona/1.jpeg",
        "alt": "Devgn Cinex Bellona Entry"
      },
      {
        "url": "images/Devgn Cinex Bellona/2.jpeg",
        "alt": "Devgn Cinex Bellona Main Concourse"
      },
      {
        "url": "images/Devgn Cinex Bellona/4.jpeg",
        "alt": "Devgn Cinex Bellona Ceiling Detail"
      },
      {
        "url": "images/Devgn Cinex Bellona/6.jpg",
        "alt": "Devgn Cinex Bellona Arched Auditorium Hall"
      },
      {
        "url": "images/Devgn Cinex Bellona/9.jpg",
        "alt": "Devgn Cinex Bellona Concession Stand"
      },
      {
        "url": "images/Devgn Cinex Bellona/11.jpg",
        "alt": "Devgn Cinex Bellona VIP Insignia Lounge"
      }
    ],
    related: ['times-tower-new', 'rajhans-precia', 'ib-suncity'],
    cardImage: 'images/Devgn Cinex Bellona/2.jpeg'
  },

  // 2. Rajhans Skylar (Commercial, Surat) - Exact match to user reference screenshot
  'rajhans-skylar': {
    id: 'rajhans-skylar',
    title: 'Rajhans Skylar',
    sec: 'SEC. 2019',
    category: 'Commercial',
    location: 'Surat',
    year: '2026',
    heroImage: 'images/Rajhans Skylar Commercial Surat/Cam_01.jpg',
    storyImage: 'images/Rajhans Skylar Commercial Surat/Interior_Atrium_Cam13.jpg',
    description: "This project brings together contemporary interior spaces with a thoughtfully designed landscape that complements the overall built environment. Our scope focused on the atrium, lobby spaces, gym, café and other key interior areas, creating cohesive and inviting spaces through considered materials and detailing. The landscape integrates lush planting with carefully placed sculptural elements that soften the effect of the built form, creating a more welcoming and engaging experience around the building. Together, the interiors and landscape create a refined environment that balances functionality, visual identity and a sense of openness.",
    specs: {
      location: 'Surat',
      scope: 'Commercial, Interiors, Landscape, F&B',
      typology: 'Commercial',
      siteArea: '1,32,720, sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/Rajhans Skylar Commercial Surat/Cam_01.jpg",
        "alt": "Rajhans Skylar Iconic Elevation"
      },
      {
        "url": "images/Rajhans Skylar Commercial Surat/Interior_Atrium_Cam13.jpg",
        "alt": "Rajhans Skylar Central Atrium"
      },
      {
        "url": "images/Rajhans Skylar Commercial Surat/Interior_Reception_Cam04.jpg",
        "alt": "Rajhans Skylar Grand Reception Lobby"
      },
      {
        "url": "images/Rajhans Skylar Commercial Surat/Cam_03.jpg",
        "alt": "Rajhans Skylar Landscaped Commercial Promenade"
      },
      {
        "url": "images/Rajhans Skylar Commercial Surat/Cam_04.jpg",
        "alt": "Rajhans Skylar Modern Facade"
      },
      {
        "url": "images/Rajhans Skylar Commercial Surat/Cam_05.jpg",
        "alt": "Rajhans Skylar Architectural Detail"
      }
    ],
    related: ['times-tower-new', 'rajhans-precia', 'ib-suncity'],
    cardImage: 'images/Rajhans Skylar Commercial Surat/Cam_01.jpg'
  },

  // 3. DPS Hazaribaug (Schools, Hazaribaug)
  'dps-hazaribaug': {
    id: 'dps-hazaribaug',
    title: 'DPS Hazaribaug',
    sec: 'SEC. 2026',
    category: 'Schools',
    location: 'Hazaribaug',
    year: '2026',
    heroImage: 'images/DPS.png',
    storyImage: 'images/big_5 1.png',
    description: "DPS Hazaribaug represents a benchmark in institutional architecture, seamlessly integrating open-air learning pavilions with sustainable climate-responsive building envelopes. The campus utilizes passive solar orientation, shaded courtyards, and native landscaping to craft an inspiring, calm educational sanctuary for future generations.",
    specs: {
      location: 'Hazaribaug, Jharkhand',
      scope: 'Campus Masterplan, Architecture, Interiors',
      typology: 'Institutional / School',
      siteArea: '2,40,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/big_5 1.png",
        "alt": "DPS Hazaribaug Main Academic Block"
      },
      {
        "url": "images/Rectangle 6 (1).png",
        "alt": "DPS Hazaribaug Central Courtyard & Shaded Pavilions"
      },
      {
        "url": "images/about/Rectangle 31.png",
        "alt": "DPS Hazaribaug Campus Learning Wings"
      },
      {
        "url": "images/projects/dps_hazaribaug.png",
        "alt": "DPS Hazaribaug Institutional Entrance & Lawn"
      }
    ],
    related: ['ahs-hazaribaug', 'ib-suncity', 'aldona-villa'],
    cardImage: 'images/projects/dps_hazaribaug.png'
  },

  // 4. Aldona Villa (Residential, Goa)
  'aldona-villa': {
    id: 'aldona-villa',
    title: 'Aldona Villa',
    sec: 'SEC. 2024',
    category: 'Residential',
    location: 'Aldona, Goa',
    year: 'Ongoing',
    heroImage: 'images/aldona Villa/1_8.jpg',
    storyImage: 'images/aldona Villa/4_5.jpg',
    description: "Nestled into the lush riverside topography of Aldona, this private sanctuary marries traditional Goan vernacular architecture with streamlined contemporary luxury. Deep verandas, exposed timber rafters, and cascading water features blur the boundaries between domestic intimacy and surrounding nature.",
    specs: {
      location: 'Aldona, Goa',
      scope: 'Architecture, Interior Design, Landscape',
      typology: 'Luxury Villa / Residential',
      siteArea: '18,500 sq.ft',
      status: 'Ongoing',
    },
    gallery: [
      {
        "url": "images/aldona Villa/1_8.jpg",
        "alt": "Aldona Villa Riverside Elevation"
      },
      {
        "url": "images/aldona Villa/4_5.jpg",
        "alt": "Aldona Villa Architecture & Landscape"
      },
      {
        "url": "images/aldona Villa/10 FINAL_2.jpg",
        "alt": "Aldona Villa Pool View"
      },
      {
        "url": "images/aldona Villa/11_7.jpg",
        "alt": "Aldona Villa Exterior Evening"
      },
      {
        "url": "images/aldona Villa/LR-1_7.jpg",
        "alt": "Aldona Villa Living Room"
      },
      {
        "url": "images/aldona Villa/BED-1-2_3.jpg",
        "alt": "Aldona Villa Master Bedroom"
      }
    ],
    related: ['bottle-house', 'hazaribaug-bungalow', 'rajhans-skylar'],
    cardImage: 'images/aldona Villa/1_8.jpg'
  },

  // 5. Times Tower New (Commercial, Mumbai)
  'times-tower-new': {
    id: 'times-tower-new',
    title: 'Times Tower New',
    sec: 'SEC. 2019',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2019',
    heroImage: 'images/Times Tower New/E_PHX2662_LR.jpg',
    storyImage: 'images/Times Tower New/E_PHX2667_LR.jpg',
    description: "Times Tower New redefines commercial corporate environments in Mumbai. With an emphasis on flexible workspaces, acoustic privacy, and high-performance energy envelopes, the tower delivers state-of-the-art corporate infrastructure that fosters collaborative focus and organizational prestige.",
    specs: {
      location: 'Mumbai, Maharashtra',
      scope: 'Commercial Architecture, Workspace Interiors',
      typology: 'Commercial High-Rise',
      siteArea: '85,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/Times Tower New/E_PHX2574_LR.jpg",
        "alt": "Times Tower New Executive Boardroom"
      },
      {
        "url": "images/Times Tower New/E_PHX2740_LR.jpg",
        "alt": "Times Tower New Open Lounge with Copper Ductwork"
      },
      {
        "url": "images/Times Tower New/E_PHX2712_LR.jpg",
        "alt": "Times Tower New Executive Cabin"
      },
      {
        "url": "images/Times Tower New/E_PHX2729_LR.jpg",
        "alt": "Times Tower New Director's Lounge"
      },
      {
        "url": "images/Times Tower New/E_PHX2662_LR.jpg",
        "alt": "Times Tower New Corporate Office"
      },
      {
        "url": "images/Times Tower New/E_PHX2667_LR.jpg",
        "alt": "Times Tower New Modern Workspace"
      }
    ],
    related: ['rajhans-skylar', 'rajhans-precia', 'devgn-cinex-bellona'],
    cardImage: 'images/Times Tower New/E_PHX2662_LR.jpg'
  },

  // 6. Devgn Cinex Ahmedabad (Cinemas, Ahmedabad)
  'devgn-cinex-ahmedabad': {
    id: 'devgn-cinex-ahmedabad',
    title: 'Devgn Cinex Ahmedabad',
    sec: 'SEC. 2022',
    category: 'Cinemas',
    location: 'Ahmedabad',
    year: '2022',
    heroImage: 'images/Devgn Cinex Ahmedabad/01.jpg',
    storyImage: 'images/Devgn Cinex Ahmedabad/02.jpg',
    description: "Devgn Cinex Ahmedabad elevates theatrical architecture into a multisensory art form. Featuring parametric ceiling baffles, warm brass lighting accents, and custom acoustic wall compositions, every space is tuned to immerse viewers in uncompromised luxury and theatrical grandeur.",
    specs: {
      location: 'Ahmedabad, Gujarat',
      scope: 'Multiplex Architecture, Cinema Interiors, F&B',
      typology: 'Cinema & Multiplex',
      siteArea: '4 Screens, 850 Seats',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/Devgn Cinex Ahmedabad/01.jpg",
        "alt": "Devgn Cinex Ahmedabad Grand Foyer"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/02.jpg",
        "alt": "Devgn Cinex Ahmedabad Concourse Lounge"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/06.jpg",
        "alt": "Devgn Cinex Ahmedabad Auditorium Seating"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/09.jpg",
        "alt": "Devgn Cinex Ahmedabad VIP Lounge"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/17.jpg",
        "alt": "Devgn Cinex Ahmedabad Cinema Experience"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/21.jpg",
        "alt": "Devgn Cinex Ahmedabad Premium Seating"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-elan', 'la-trichy'],
    cardImage: 'images/Devgn Cinex Ahmedabad/01.jpg'
  },

  // 7. IB Suncity (Schools, Gurugram)
  'ib-suncity': {
    id: 'ib-suncity',
    title: 'IB Suncity',
    sec: 'SEC. 2020',
    category: 'Schools',
    location: 'Gurugram',
    year: '2020',
    heroImage: 'images/IB Suncity/Suncity School-5.jpg',
    storyImage: 'images/IB Suncity/Suncity School-13.jpg',
    description: "Designed for progressive international education, IB Suncity balances vibrant communal recreation pods with focused study zones. Sunlit central corridors, ergonomic learning classrooms, and eco-friendly tactile materials create an inspiring campus atmosphere for students of all ages.",
    specs: {
      location: 'Gurugram, Haryana',
      scope: 'Campus Masterplan, Educational Interiors',
      typology: 'International School',
      siteArea: '1,10,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/IB Suncity/Suncity School-5.jpg",
        "alt": "IB Suncity Campus Exterior"
      },
      {
        "url": "images/IB Suncity/Suncity School-13.jpg",
        "alt": "IB Suncity Main Academic Courtyard"
      },
      {
        "url": "images/IB Suncity/Suncity School-19.jpg",
        "alt": "IB Suncity Learning Spaces"
      },
      {
        "url": "images/IB Suncity/Suncity School-7.jpg",
        "alt": "IB Suncity Sports & Outdoor Grounds"
      },
      {
        "url": "images/IB Suncity/Suncity School-1.jpg",
        "alt": "IB Suncity Modern Facade"
      },
      {
        "url": "images/IB Suncity/Suncity School-10.jpg",
        "alt": "IB Suncity Educational Wing"
      }
    ],
    related: ['dps-hazaribaug', 'ahs-hazaribaug', 'times-tower-new'],
    cardImage: 'images/IB Suncity/Suncity School-5.jpg'
  },

  // 8. AHS Hazaribaug (Schools, Hazaribaug)
  'ahs-hazaribaug': {
    id: 'ahs-hazaribaug',
    title: 'AHS Hazaribaug',
    sec: 'SEC. 2025',
    category: 'Schools',
    location: 'Hazaribaug',
    year: 'Ongoing',
    heroImage: 'images/AHS Hazaribaug/DSC06724.JPG.jpg',
    storyImage: 'images/AHS Hazaribaug/DSC06574.jpg',
    description: "AHS Hazaribaug integrates traditional institutional permanence with responsive contemporary architectural craft. The complex features tiered auditoriums, modular STEM laboratories, and shaded perimeter circulation corridors harmoniously anchored into the surrounding landscape.",
    specs: {
      location: 'Hazaribaug, Jharkhand',
      scope: 'Architecture, Structural Design, Campus Planning',
      typology: 'High School & Academy',
      siteArea: '1,85,000 sq.ft',
      status: 'Ongoing',
    },
    gallery: [
      {
        "url": "images/AHS Hazaribaug/IMG_20190412_104900.jpg",
        "alt": "AHS Hazaribaug Campus Overview"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06574.jpg",
        "alt": "AHS Hazaribaug Main Academic Block"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06591.jpg",
        "alt": "AHS Hazaribaug Academic Building"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06622.jpg",
        "alt": "AHS Hazaribaug School Courtyard"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06691.jpg",
        "alt": "AHS Hazaribaug Campus Pathway"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06712.jpg",
        "alt": "AHS Hazaribaug Institutional Facade"
      }
    ],
    related: ['dps-hazaribaug', 'ib-suncity', 'hazaribaug-bungalow'],
    cardImage: 'images/AHS Hazaribaug/IMG_20190412_104900.jpg'
  },

  // 9. LA Trichy (Cinemas, Trichy)
  'la-trichy': {
    id: 'la-trichy',
    title: 'LA Trichy',
    sec: 'SEC. 2026',
    category: 'Cinemas',
    location: 'Trichy',
    year: '2026',
    heroImage: 'images/projects/la_trichy.png',
    storyImage: 'images/interior/Rectangle 69 (1).png',
    description: "LA Trichy brings international standard cinema architecture to Tamil Nadu. Featuring fluted timber wall treatments, golden architectural arches, and expansive multi-level reception lobbies, it stands as a premier regional cinema entertainment destination.",
    specs: {
      location: 'Tiruchirappalli, Tamil Nadu',
      scope: 'Multiplex Architecture, Premium Lounges',
      typology: 'Cinema & Entertainment',
      siteArea: '5 Screens, 1,150 Seats',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/projects/la_trichy.png",
        "alt": "LA Trichy Multiplex Entrance"
      },
      {
        "url": "images/project1.2.png",
        "alt": "LA Trichy Screen Auditorium Hall"
      },
      {
        "url": "images/project 1.3.png",
        "alt": "LA Trichy Luxury Concourse"
      },
      {
        "url": "images/Rectangle 6 (3).png",
        "alt": "LA Trichy VIP Cinema Lounge"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "LA Trichy Premium Lounge"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "LA Trichy Modern Architecture"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-ahmedabad', 'devgn-cinex-elan'],
    cardImage: 'images/projects/la_trichy.png'
  },

  // 10. Bottle House (Residential, Raipur)
  'bottle-house': {
    id: 'bottle-house',
    title: 'Bottle House',
    sec: 'SEC. 2025',
    category: 'Residential',
    location: 'Raipur',
    year: '2025',
    heroImage: 'images/bottle house/1.jpg',
    storyImage: 'images/bottle house/BOTTLE HOUSE 3.jpg',
    description: "An innovative residential villa crafted around organic fluidity and environmental sustainability. Featuring distinctive curvilinear silhouettes, natural thermal cooling masonry, and floor-to-ceiling glass pavilions opening onto private garden courtyards.",
    specs: {
      location: 'Raipur, Chhattisgarh',
      scope: 'Architecture, Sustainable Engineering, Interior',
      typology: 'Eco-Luxury Residential',
      siteArea: '14,200 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/bottle house/1.jpg",
        "alt": "Bottle House Iconic Facade"
      },
      {
        "url": "images/bottle house/2.jpg",
        "alt": "Bottle House Modern Architecture"
      },
      {
        "url": "images/bottle house/BOTTLE HOUSE 3.jpg",
        "alt": "Bottle House Curvilinear Design"
      },
      {
        "url": "images/bottle house/D5_Scene 11_20240216_153737.jpg",
        "alt": "Bottle House Garden View"
      },
      {
        "url": "images/bottle house/D5_Scene 12_20240216_153922.jpg",
        "alt": "Bottle House Interior Pavilion"
      },
      {
        "url": "images/bottle house/D5_Scene 13_20240216_155330.jpg",
        "alt": "Bottle House Night View"
      }
    ],
    related: ['aldona-villa', 'hazaribaug-bungalow', 'rajhans-precia'],
    cardImage: 'images/bottle house/1.jpg'
  },

  // 11. Hazaribaug Bungalow (Residential, Hazaribaug)
  'hazaribaug-bungalow': {
    id: 'hazaribaug-bungalow',
    title: 'Hazaribaug Bungalow',
    sec: 'SEC. 2024',
    category: 'Residential',
    location: 'Hazaribaug',
    year: 'Ongoing',
    heroImage: 'images/Hazaribaug Bungalow/Scene 1_1.png',
    storyImage: 'images/Hazaribaug Bungalow/FORMAL LIVING ROOM.png',
    description: "Set against tranquil forested foothills, Hazaribaug Bungalow reinterprets classic residential architecture through local dry-stacked stone, deep cantilevered overhangs, and continuous sightlines that bring the surrounding landscape directly into the home.",
    specs: {
      location: 'Hazaribaug, Jharkhand',
      scope: 'Residential Architecture, Landscape, Interior',
      typology: 'Private Estate / Bungalow',
      siteArea: '22,000 sq.ft',
      status: 'Ongoing',
    },
    gallery: [
      {
        "url": "images/Hazaribaug Bungalow/Scene 1_1.png",
        "alt": "Hazaribaug Bungalow Front Elevation"
      },
      {
        "url": "images/Hazaribaug Bungalow/FORMAL LIVING ROOM.png",
        "alt": "Hazaribaug Bungalow Formal Living Room"
      },
      {
        "url": "images/Hazaribaug Bungalow/DINING.png",
        "alt": "Hazaribaug Bungalow Dining Lounge"
      },
      {
        "url": "images/Hazaribaug Bungalow/CANOPY.png",
        "alt": "Hazaribaug Bungalow Garden Canopy"
      },
      {
        "url": "images/Hazaribaug Bungalow/ENTRY 1.png",
        "alt": "Hazaribaug Bungalow Entrance Gateway"
      },
      {
        "url": "images/Hazaribaug Bungalow/GATE 2.png",
        "alt": "Hazaribaug Bungalow Perimeter Wall"
      }
    ],
    related: ['aldona-villa', 'bottle-house', 'dps-hazaribaug'],
    cardImage: 'images/Hazaribaug Bungalow/Scene 1_1.png'
  },

  // 12. Devgn Cinex Elan (Cinemas, Gurugram)
  'devgn-cinex-elan': {
    id: 'devgn-cinex-elan',
    title: 'Devgn Cinex Elan',
    sec: 'SEC. 2024',
    category: 'Cinemas',
    location: 'Gurugram',
    year: '2024',
    heroImage: 'images/Devgn Cinex Elan/02.jpg',
    storyImage: 'images/Devgn Cinex Elan/03.jpg',
    description: "Located within Gurugram's prime lifestyle retail hub, Devgn Cinex Elan introduces boutique cinema luxury. Ergonomic plush recliners, intimate acoustic volumes, and sculptural brass light installations deliver an unforgettable entertainment journey.",
    specs: {
      location: 'Gurugram, Haryana',
      scope: 'Multiplex Interiors, VIP Lounges, Acoustics',
      typology: 'Boutique Cinema',
      siteArea: '4 Screens, 520 Seats',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/Devgn Cinex Elan/02.jpg",
        "alt": "Devgn Cinex Elan Multiplex Concourse"
      },
      {
        "url": "images/Devgn Cinex Elan/03.jpg",
        "alt": "Devgn Cinex Elan Boutique Cinema Entrance"
      },
      {
        "url": "images/Devgn Cinex Elan/07.jpg",
        "alt": "Devgn Cinex Elan Auditorium"
      },
      {
        "url": "images/Devgn Cinex Elan/08.jpg",
        "alt": "Devgn Cinex Elan Ticket Lounge"
      },
      {
        "url": "images/Devgn Cinex Elan/10.jpg",
        "alt": "Devgn Cinex Elan Concession Area"
      },
      {
        "url": "images/Devgn Cinex Elan/11.jpg",
        "alt": "Devgn Cinex Elan VIP Seating"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-ahmedabad', 'ib-suncity'],
    cardImage: 'images/Devgn Cinex Elan/02.jpg'
  },

  // 13. Rajhans Precia (Commercial, Surat)
  'rajhans-precia': {
    id: 'rajhans-precia',
    title: 'Rajhans Precia',
    sec: 'SEC. 2024',
    category: 'Commercial',
    location: 'Surat',
    year: '2024',
    heroImage: 'images/Rajhans Precia/DJI_20250120213924_0431_D.jpg',
    storyImage: 'images/Rajhans Precia/KZP00127.jpg',
    description: "Rajhans Precia is an ultra-premium diamond retail and commercial landmark in Surat. An undulating parametric glass envelope, grand central sunlit atrium, and seamless circulation provide an international-caliber retail and corporate atmosphere.",
    specs: {
      location: 'Surat, Gujarat',
      scope: 'Commercial Mall, Retail Interiors, Atrium',
      typology: 'Commercial / Retail Hub',
      siteArea: '1,75,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/Rajhans Precia/DJI_20250120213924_0431_D.jpg",
        "alt": "Rajhans Precia Aerial Night View"
      },
      {
        "url": "images/Rajhans Precia/KZP00127.jpg",
        "alt": "Rajhans Precia Concession Lounge"
      },
      {
        "url": "images/Rajhans Precia/KZP00285.jpg",
        "alt": "Rajhans Precia Cinema Lobby Architecture"
      },
      {
        "url": "images/Rajhans Precia/KZP00350.jpg",
        "alt": "Rajhans Precia Atrium Promenade"
      },
      {
        "url": "images/Rajhans Precia/KZP00183.jpg",
        "alt": "Rajhans Precia Modern Interiors"
      },
      {
        "url": "images/Rajhans Precia/KZP00451.jpg",
        "alt": "Rajhans Precia Premium Retail"
      }
    ],
    related: ['rajhans-skylar', 'times-tower-new', 'devgn-cinex-bellona'],
    cardImage: 'images/Rajhans Precia/DJI_20250120213924_0431_D.jpg'
  },

  // Safety fallbacks for additional cards from expertise pages:
  'quorum': {
    id: 'quorum',
    title: 'Quorum',
    sec: 'SEC. 2013',
    category: 'Architecture',
    location: 'Raipur',
    year: '2013',
    heroImage: 'images/architecture/Rectangle 67.png',
    storyImage: 'images/architecture/Rectangle 68.png',
    description: "An expressive corporate complex featuring clean geometries, deep solar shading louvers, and expansive collaborative workspaces designed to optimize natural daylight throughout the day.",
    specs: {
      location: 'Raipur, Chhattisgarh',
      scope: 'Architecture, Workspace Design',
      typology: 'Commercial Complex',
      siteArea: '65,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/architecture/Rectangle 67.png",
        "alt": "Quorum Elevation"
      },
      {
        "url": "images/architecture/Rectangle 68.png",
        "alt": "Quorum Louvered Facade Detail"
      },
      {
        "url": "images/architecture/Rectangle 69.png",
        "alt": "Quorum Commercial Workspace"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "Quorum Entrance Atrium"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "Quorum Modern Architecture"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "Quorum Workspace Lounge"
      }
    ],
    related: ['times-tower-new', 'rajhans-skylar', 'rajhans-precia'],
    cardImage: 'images/architecture/Rectangle 67.png'
  },

  'urban-square': {
    id: 'urban-square',
    title: 'Urban Square',
    sec: 'SEC. 2016',
    category: 'Architecture',
    location: 'Mumbai',
    year: '2016',
    heroImage: 'images/architecture/Rectangle 68.png',
    storyImage: 'images/architecture/Rectangle 69.png',
    description: "A high-density mixed-use urban development in Mumbai integrating corporate offices, curated retail courtyards, and pedestrian thoroughfares with sustainable passive cooling.",
    specs: {
      location: 'Mumbai, Maharashtra',
      scope: 'Urban Planning, Architecture',
      typology: 'Mixed-Use Development',
      siteArea: '1,20,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/architecture/Rectangle 68.png",
        "alt": "Urban Square Tower Facade"
      },
      {
        "url": "images/architecture/Rectangle 67.png",
        "alt": "Urban Square Public Plaza"
      },
      {
        "url": "images/architecture/Rectangle 69.png",
        "alt": "Urban Square Commercial Promenade"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "Urban Square Grand Atrium"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "Urban Square Modern Architecture"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "Urban Square Office Lounge"
      }
    ],
    related: ['times-tower-new', 'rajhans-skylar', 'quorum'],
    cardImage: 'images/architecture/Rectangle 68.png'
  },

  'aurelia-business-park': {
    id: 'aurelia-business-park',
    title: 'Aurelia Business Park',
    sec: 'SEC. 2018',
    category: 'Architecture',
    location: 'Pune',
    year: '2018',
    heroImage: 'images/architecture/Rectangle 69.png',
    storyImage: 'images/architecture/Rectangle 68.png',
    description: "A forward-looking commercial development located in Pune, engineered to balance corporate efficiency with expansive green terraces and biophilic interior spaces.",
    specs: {
      location: 'Pune, Maharashtra',
      scope: 'Commercial Architecture, Landscape Design',
      typology: 'Business Park & IT Hub',
      siteArea: '1,50,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/architecture/Rectangle 69.png",
        "alt": "Aurelia Business Park Façade"
      },
      {
        "url": "images/architecture/Rectangle 67.png",
        "alt": "Aurelia Business Park Central Landscaped Court"
      },
      {
        "url": "images/architecture/Rectangle 68.png",
        "alt": "Aurelia Business Park Glass Envelope"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "Aurelia Business Park Conference Suite"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "Aurelia Business Park Modern Architecture"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "Aurelia Business Park Entry Atrium"
      }
    ],
    related: ['times-tower-new', 'urban-square', 'rajhans-skylar'],
    cardImage: 'images/architecture/Rectangle 69.png'
  },

  'the-grand-pavilion': {
    id: 'the-grand-pavilion',
    title: 'The Grand Pavilion',
    sec: 'SEC. 2020',
    category: 'Architecture',
    location: 'Ahmedabad',
    year: '2020',
    heroImage: 'images/architecture/Rectangle 67 (1).png',
    storyImage: 'images/architecture/Rectangle 66.png',
    description: "An iconic cultural and hospitality pavilion in Ahmedabad characterized by sculptural colonnades, expansive water reflecting pools, and climate-moderating stone brise-soleil.",
    specs: {
      location: 'Ahmedabad, Gujarat',
      scope: 'Architecture, Hospitality Interiors',
      typology: 'Pavilion & Banquet Complex',
      siteArea: '95,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/architecture/Rectangle 67 (1).png",
        "alt": "The Grand Pavilion Elevation"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "The Grand Pavilion Sculptural Colonnade"
      },
      {
        "url": "images/architecture/Rectangle 68 (1).png",
        "alt": "The Grand Pavilion Reception Hall"
      },
      {
        "url": "images/architecture/Rectangle 69 (1).png",
        "alt": "The Grand Pavilion Reflecting Pool"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "The Grand Pavilion Interior Lounge"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "The Grand Pavilion Banquet Space"
      }
    ],
    related: ['devgn-cinex-ahmedabad', 'rajhans-precia', 'aldona-villa'],
    cardImage: 'images/architecture/Rectangle 67 (1).png'
  },

  'verde-residence': {
    id: 'verde-residence',
    title: 'Verde Residence',
    sec: 'SEC. 2022',
    category: 'Architecture',
    location: 'Bengaluru',
    year: '2022',
    heroImage: 'images/architecture/Rectangle 68 (1).png',
    storyImage: 'images/architecture/image 9.png',
    description: "An urban residential sanctuary in Bengaluru celebrating vertical greenery, deep recessed balconies, and thermal mass strategies for natural cooling.",
    specs: {
      location: 'Bengaluru, Karnataka',
      scope: 'Residential Architecture, Interiors',
      typology: 'Luxury Residence',
      siteArea: '24,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/architecture/Rectangle 68 (1).png",
        "alt": "Verde Residence Elevation"
      },
      {
        "url": "images/architecture/Rectangle 69 (1).png",
        "alt": "Verde Residence Double-Height Living Salon"
      },
      {
        "url": "images/about/Rectangle 1.png",
        "alt": "Verde Residence Biophilic Garden Lounge"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "Verde Residence Dining Suite"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "Verde Residence Modern Architecture"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "Verde Residence Entrance Atrium"
      }
    ],
    related: ['aldona-villa', 'hazaribaug-bungalow', 'bottle-house'],
    cardImage: 'images/architecture/Rectangle 68 (1).png'
  },

  'aria-corporate-centreorum': {
    id: 'aria-corporate-centreorum',
    title: 'Aria Corporate Centre',
    sec: 'SEC. 2024',
    category: 'Architecture',
    location: 'Hyderabad',
    year: '2024',
    heroImage: 'images/architecture/Rectangle 69 (1).png',
    storyImage: 'images/architecture/Rectangle 65.png',
    description: "A flagship corporate center in Hyderabad combining sleek crystalline architectural geometries with high-performance workplace interiors.",
    specs: {
      location: 'Hyderabad, Telangana',
      scope: 'Commercial Architecture, Workplace Planning',
      typology: 'Corporate Headquarters',
      siteArea: '1,40,000 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/architecture/Rectangle 69 (1).png",
        "alt": "Aria Corporate Centre Crystalline Tower Elevation"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "Aria Corporate Centre Grand Atrium"
      },
      {
        "url": "images/architecture/Rectangle 68.png",
        "alt": "Aria Corporate Centre High-Efficiency Curtain Wall"
      },
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "Aria Corporate Centre Conference Suite"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "Aria Corporate Centre Entrance Lobby"
      },
      {
        "url": "images/architecture/Rectangle 67.png",
        "alt": "Aria Corporate Centre Modern Facade"
      }
    ],
    related: ['times-tower-new', 'rajhans-skylar', 'aurelia-business-park'],
    cardImage: 'images/architecture/Rectangle 69 (1).png'
  },

  'the-grand-residence': {
    id: 'the-grand-residence',
    title: 'The Grand Residence',
    sec: 'SEC. 2016',
    category: 'Interior',
    location: 'Mumbai',
    year: '2016',
    heroImage: 'images/interior/Rectangle 69.png',
    storyImage: 'images/interior/Rectangle 65.png',
    description: "A bespoke residential interior in Mumbai marrying luxurious Italian marble finishes with minimal architectural detailing and custom ambient lighting.",
    specs: {
      location: 'Mumbai, Maharashtra',
      scope: 'Luxury Interior Architecture',
      typology: 'High-End Residential Penthouse',
      siteArea: '9,500 sq.ft',
      status: 'Completed',
    },
    gallery: [
      {
        "url": "images/interior/Rectangle 66.png",
        "alt": "The Grand Residence Living Salon"
      },
      {
        "url": "images/interior/Rectangle 67.png",
        "alt": "The Grand Residence Master Suite"
      },
      {
        "url": "images/interior/Rectangle 111.png",
        "alt": "The Grand Residence Dining Hall"
      },
      {
        "url": "images/interior/Rectangle 69.png",
        "alt": "The Grand Residence Overview"
      },
      {
        "url": "images/interior/Rectangle 65.png",
        "alt": "The Grand Residence Entrance Foyer"
      },
      {
        "url": "images/architecture/Rectangle 111.png",
        "alt": "The Grand Residence Modern Architecture"
      }
    ],
    related: ['aldona-villa', 'hazaribaug-bungalow', 'bottle-house'],
    cardImage: 'images/interior/Rectangle 69.png'
  }
};

// Global / Module export support
if (typeof window !== 'undefined') {
  window.ARRIS_PROJECTS = ARRIS_PROJECTS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ARRIS_PROJECTS;
}

