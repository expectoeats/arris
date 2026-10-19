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
    heroImage: 'images/project 1.png',
    storyImage: 'images/project 1.png',
    description: "Inspired by Art Deco elegance, the interiors of the Devgn Cinex Bellona cinema in Mumbai celebrates bold geometry, rich symmetry, and metallic accents, layered with retro nostalgia — marquee signage, plush velvet seating, vintage posters, and patterned carpets. The fusion creates an atmosphere where every corner echoes the romance of yesterday's drama while captivating today's audience.",
    specs: {
      rev: 'REV. 04.24',
      location: 'Thane',
      scope: 'Cinema, Interiors',
      typology: 'Cinema',
      siteArea: '3 Screens, 620 Seats',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/project 1.3.png', alt: 'Devgn Cinex Bellona Luxury Foyer' },
      { url: 'images/project-detail/gallery_2_aerial.png', alt: 'Devgn Cinex Bellona Exterior Plaza' },
      { url: 'images/project-detail/gallery_3_pool.png', alt: 'Devgn Cinex Bellona Concourse Walk' },
      { url: 'images/project-detail/gallery_1_wide.png', alt: 'Devgn Cinex Bellona Architectural Lounge' }
    ],
    related: ['times-tower-new', 'rajhans-precia', 'ib-suncity'],
    cardImage: 'images/projects/devgn_cinex_bellona.png'
  },

  // 2. Rajhans Skylar (Commercial, Surat) - Exact match to user reference screenshot
  'rajhans-skylar': {
    id: 'rajhans-skylar',
    title: 'Rajhans Skylar',
    sec: 'SEC. 2019',
    category: 'Commercial',
    location: 'Surat',
    year: '2026',
    heroImage: 'images/project-detail/rajhans_skylar_hero.png',
    storyImage: 'images/project-detail/rajhans_skylar_atrium.png',
    description: "This project brings together contemporary interior spaces with a thoughtfully designed landscape that complements the overall built environment. Our scope focused on the atrium, lobby spaces, gym, café and other key interior areas, creating cohesive and inviting spaces through considered materials and detailing. The landscape integrates lush planting with carefully placed sculptural elements that soften the effect of the built form, creating a more welcoming and engaging experience around the building. Together, the interiors and landscape create a refined environment that balances functionality, visual identity and a sense of openness.",
    specs: {
      rev: 'REV. 04.24',
      location: 'Surat',
      scope: 'Commercial, Interiors, Landscape, F&B',
      typology: 'Commercial',
      siteArea: '1,32,720, sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/project-detail/gallery_1_wide.png', alt: 'Rajhans Skylar Dynamic Elevation' },
      { url: 'images/project-detail/gallery_2_aerial.png', alt: 'Rajhans Skylar Aerial View' },
      { url: 'images/project-detail/gallery_3_pool.png', alt: 'Rajhans Skylar Landscaped Forecourt' },
      { url: 'images/project-detail/gallery_4_lounge.png', alt: 'Rajhans Skylar Atrium Lighting' }
    ],
    related: ['times-tower-new', 'rajhans-precia', 'ib-suncity'],
    cardImage: 'images/projects/rajhans_skylar.png'
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
      rev: 'REV. 02.26',
      location: 'Hazaribaug, Jharkhand',
      scope: 'Campus Masterplan, Architecture, Interiors',
      typology: 'Institutional / School',
      siteArea: '2,40,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/Rectangle 6 (1).png', alt: 'DPS Hazaribaug Central Courtyard' },
      { url: 'images/dorpdow-shuffle/DPS.png', alt: 'DPS Hazaribaug Main Façade' },
      { url: 'images/design-process/Rectangle 86.png', alt: 'DPS Hazaribaug Learning Pods' },
      { url: 'images/projects/dps_hazaribaug.png', alt: 'DPS Hazaribaug Exterior Campus' }
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
    heroImage: 'images/Rectangle 7.png',
    storyImage: 'images/big_5 1 (1).png',
    description: "Nestled into the lush riverside topography of Aldona, this private sanctuary marries traditional Goan vernacular architecture with streamlined contemporary luxury. Deep verandas, exposed timber rafters, and cascading water features blur the boundaries between domestic intimacy and surrounding nature.",
    specs: {
      rev: 'REV. 05.25',
      location: 'Aldona, Goa',
      scope: 'Architecture, Interior Design, Landscape',
      typology: 'Luxury Villa / Residential',
      siteArea: '18,500 sq.ft',
      status: 'Ongoing',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/Rectangle 6 (2).png', alt: 'Aldona Villa Poolside Patio' },
      { url: 'images/about/Rectangle 4.png', alt: 'Aldona Villa Master Suite Lounge' },
      { url: 'images/legacy/Rectangle 4.png', alt: 'Aldona Villa Garden Courtyard' },
      { url: 'images/projects/aldona_villa.png', alt: 'Aldona Villa Sunset Elevation' }
    ],
    related: ['bottle-house', 'hazaribaug-bungalow', 'rajhans-skylar'],
    cardImage: 'images/projects/aldona_villa.png'
  },

  // 5. Times Tower New (Commercial, Mumbai)
  'times-tower-new': {
    id: 'times-tower-new',
    title: 'Times Tower New',
    sec: 'SEC. 2019',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2019',
    heroImage: 'images/projects/times_tower_new.png',
    storyImage: 'images/interior/Rectangle 65.png',
    description: "Times Tower New redefines commercial corporate environments in Mumbai. With an emphasis on flexible workspaces, acoustic privacy, and high-performance energy envelopes, the tower delivers state-of-the-art corporate infrastructure that fosters collaborative focus and organizational prestige.",
    specs: {
      rev: 'REV. 01.19',
      location: 'Mumbai, Maharashtra',
      scope: 'Commercial Architecture, Workspace Interiors',
      typology: 'Commercial High-Rise',
      siteArea: '85,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/interior/Rectangle 66.png', alt: 'Times Tower Boardroom' },
      { url: 'images/architecture/Rectangle 65.png', alt: 'Times Tower Grand Lobby' },
      { url: 'images/interior/Rectangle 111.png', alt: 'Times Tower Executive Suite' },
      { url: 'images/projects/times_tower_new.png', alt: 'Times Tower Exterior View' }
    ],
    related: ['rajhans-skylar', 'rajhans-precia', 'devgn-cinex-bellona'],
    cardImage: 'images/projects/times_tower_new.png'
  },

  // 6. Devgn Cinex Ahmedabad (Cinemas, Ahmedabad)
  'devgn-cinex-ahmedabad': {
    id: 'devgn-cinex-ahmedabad',
    title: 'Devgn Cinex Ahmedabad',
    sec: 'SEC. 2022',
    category: 'Cinemas',
    location: 'Ahmedabad',
    year: '2022',
    heroImage: 'images/interior/Rectangle 67 (1).png',
    storyImage: 'images/projects/devgn_cinex_ahmedabad.png',
    description: "Devgn Cinex Ahmedabad elevates theatrical architecture into a multisensory art form. Featuring parametric ceiling baffles, warm brass lighting accents, and custom acoustic wall compositions, every space is tuned to immerse viewers in uncompromised luxury and theatrical grandeur.",
    specs: {
      rev: 'REV. 03.22',
      location: 'Ahmedabad, Gujarat',
      scope: 'Multiplex Architecture, Cinema Interiors, F&B',
      typology: 'Cinema & Multiplex',
      siteArea: '4 Screens, 850 Seats',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/project1.2.png', alt: 'Devgn Cinex Ahmedabad Auditorium' },
      { url: 'images/project 1.3.png', alt: 'Devgn Cinex Concourse Lounge' },
      { url: 'images/interior/Rectangle 68.png', alt: 'Devgn Cinex VIP Box' },
      { url: 'images/projects/devgn_cinex_ahmedabad.png', alt: 'Devgn Cinex Entrance Foyer' }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-elan', 'la-trichy'],
    cardImage: 'images/projects/devgn_cinex_ahmedabad.png'
  },

  // 7. IB Suncity (Schools, Gurugram)
  'ib-suncity': {
    id: 'ib-suncity',
    title: 'IB Suncity',
    sec: 'SEC. 2020',
    category: 'Schools',
    location: 'Gurugram',
    year: '2020',
    heroImage: 'images/interior/Rectangle 68.png',
    storyImage: 'images/projects/ib_suncity.png',
    description: "Designed for progressive international education, IB Suncity balances vibrant communal recreation pods with focused study zones. Sunlit central corridors, ergonomic learning classrooms, and eco-friendly tactile materials create an inspiring campus atmosphere for students of all ages.",
    specs: {
      rev: 'REV. 06.20',
      location: 'Gurugram, Haryana',
      scope: 'Campus Masterplan, Educational Interiors',
      typology: 'International School',
      siteArea: '1,10,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/dorpdow-shuffle/DPS.png', alt: 'IB Suncity Campus Grounds' },
      { url: 'images/design-process/image 10.png', alt: 'IB Suncity Interactive Library' },
      { url: 'images/about/Rectangle 30.png', alt: 'IB Suncity Multipurpose Hall' },
      { url: 'images/projects/ib_suncity.png', alt: 'IB Suncity Elevation' }
    ],
    related: ['dps-hazaribaug', 'ahs-hazaribaug', 'times-tower-new'],
    cardImage: 'images/projects/ib_suncity.png'
  },

  // 8. AHS Hazaribaug (Schools, Hazaribaug)
  'ahs-hazaribaug': {
    id: 'ahs-hazaribaug',
    title: 'AHS Hazaribaug',
    sec: 'SEC. 2025',
    category: 'Schools',
    location: 'Hazaribaug',
    year: 'Ongoing',
    heroImage: 'images/projects/ahs_hazaribaug.png',
    storyImage: 'images/architecture/Rectangle 67.png',
    description: "AHS Hazaribaug integrates traditional institutional permanence with responsive contemporary architectural craft. The complex features tiered auditoriums, modular STEM laboratories, and shaded perimeter circulation corridors harmoniously anchored into the surrounding landscape.",
    specs: {
      rev: 'REV. 02.25',
      location: 'Hazaribaug, Jharkhand',
      scope: 'Architecture, Structural Design, Campus Planning',
      typology: 'High School & Academy',
      siteArea: '1,85,000 sq.ft',
      status: 'Ongoing',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 68.png', alt: 'AHS Hazaribaug Courtyard Walk' },
      { url: 'images/architecture/Rectangle 69.png', alt: 'AHS Hazaribaug Academic Wing' },
      { url: 'images/DPS.png', alt: 'AHS Hazaribaug Amphitheatre' },
      { url: 'images/projects/ahs_hazaribaug.png', alt: 'AHS Hazaribaug Building Gate' }
    ],
    related: ['dps-hazaribaug', 'ib-suncity', 'hazaribaug-bungalow'],
    cardImage: 'images/projects/ahs_hazaribaug.png'
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
      rev: 'REV. 04.26',
      location: 'Tiruchirappalli, Tamil Nadu',
      scope: 'Multiplex Architecture, Premium Lounges',
      typology: 'Cinema & Entertainment',
      siteArea: '5 Screens, 1,150 Seats',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/project 1.3.png', alt: 'LA Trichy Concourse' },
      { url: 'images/project1.2.png', alt: 'LA Trichy Screen Auditorium' },
      { url: 'images/dorpdow-shuffle/project 4.png', alt: 'LA Trichy VIP Lounge' },
      { url: 'images/projects/la_trichy.png', alt: 'LA Trichy Grand Entrance' }
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
    heroImage: 'images/projects/bottle_house.png',
    storyImage: 'images/legacy/Rectangle 3.png',
    description: "An innovative residential villa crafted around organic fluidity and environmental sustainability. Featuring distinctive curvilinear silhouettes, natural thermal cooling masonry, and floor-to-ceiling glass pavilions opening onto private garden courtyards.",
    specs: {
      rev: 'REV. 01.25',
      location: 'Raipur, Chhattisgarh',
      scope: 'Architecture, Sustainable Engineering, Interior',
      typology: 'Eco-Luxury Residential',
      siteArea: '14,200 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/legacy/Rectangle 4.png', alt: 'Bottle House Courtyard' },
      { url: 'images/about/Rectangle 1.png', alt: 'Bottle House Living Pavilion' },
      { url: 'images/about/Rectangle 4.png', alt: 'Bottle House Master Veranda' },
      { url: 'images/projects/bottle_house.png', alt: 'Bottle House Curvilinear Facade' }
    ],
    related: ['aldona-villa', 'hazaribaug-bungalow', 'rajhans-precia'],
    cardImage: 'images/projects/bottle_house.png'
  },

  // 11. Hazaribaug Bungalow (Residential, Hazaribaug)
  'hazaribaug-bungalow': {
    id: 'hazaribaug-bungalow',
    title: 'Hazaribaug Bungalow',
    sec: 'SEC. 2024',
    category: 'Residential',
    location: 'Hazaribaug',
    year: 'Ongoing',
    heroImage: 'images/projects/hazaribaug_bungalow.png',
    storyImage: 'images/interior/Rectangle 68 (1).png',
    description: "Set against tranquil forested foothills, Hazaribaug Bungalow reinterprets classic residential architecture through local dry-stacked stone, deep cantilevered overhangs, and continuous sightlines that bring the surrounding landscape directly into the home.",
    specs: {
      rev: 'REV. 03.24',
      location: 'Hazaribaug, Jharkhand',
      scope: 'Residential Architecture, Landscape, Interior',
      typology: 'Private Estate / Bungalow',
      siteArea: '22,000 sq.ft',
      status: 'Ongoing',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/about/Rectangle 3.png', alt: 'Hazaribaug Bungalow Garden Terrace' },
      { url: 'images/legacy/Rectangle 53.png', alt: 'Hazaribaug Bungalow Living Lounge' },
      { url: 'images/architecture/Rectangle 66.png', alt: 'Hazaribaug Bungalow Dining Wing' },
      { url: 'images/projects/hazaribaug_bungalow.png', alt: 'Hazaribaug Bungalow Exterior' }
    ],
    related: ['aldona-villa', 'bottle-house', 'dps-hazaribaug'],
    cardImage: 'images/projects/hazaribaug_bungalow.png'
  },

  // 12. Devgn Cinex Elan (Cinemas, Gurugram)
  'devgn-cinex-elan': {
    id: 'devgn-cinex-elan',
    title: 'Devgn Cinex Elan',
    sec: 'SEC. 2024',
    category: 'Cinemas',
    location: 'Gurugram',
    year: '2024',
    heroImage: 'images/projects/devgn_cinex_elan.png',
    storyImage: 'images/project 1.png',
    description: "Located within Gurugram's prime lifestyle retail hub, Devgn Cinex Elan introduces boutique cinema luxury. Ergonomic plush recliners, intimate acoustic volumes, and sculptural brass light installations deliver an unforgettable entertainment journey.",
    specs: {
      rev: 'REV. 04.24',
      location: 'Gurugram, Haryana',
      scope: 'Multiplex Interiors, VIP Lounges, Acoustics',
      typology: 'Boutique Cinema',
      siteArea: '4 Screens, 520 Seats',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/project1.2.png', alt: 'Devgn Cinex Elan Auditorium' },
      { url: 'images/project 1.3.png', alt: 'Devgn Cinex Elan Ticket Lounge' },
      { url: 'images/dorpdow-shuffle/project 4.png', alt: 'Devgn Cinex Elan Concessions' },
      { url: 'images/projects/devgn_cinex_elan.png', alt: 'Devgn Cinex Elan Facade' }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-ahmedabad', 'ib-suncity'],
    cardImage: 'images/projects/devgn_cinex_elan.png'
  },

  // 13. Rajhans Precia (Commercial, Surat)
  'rajhans-precia': {
    id: 'rajhans-precia',
    title: 'Rajhans Precia',
    sec: 'SEC. 2024',
    category: 'Commercial',
    location: 'Surat',
    year: '2024',
    heroImage: 'images/project 4.png',
    storyImage: 'images/projects/rajhans_precia.png',
    description: "Rajhans Precia is an ultra-premium diamond retail and commercial landmark in Surat. An undulating parametric glass envelope, grand central sunlit atrium, and seamless circulation provide an international-caliber retail and corporate atmosphere.",
    specs: {
      rev: 'REV. 05.24',
      location: 'Surat, Gujarat',
      scope: 'Commercial Mall, Retail Interiors, Atrium',
      typology: 'Commercial / Retail Hub',
      siteArea: '1,75,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/interior/Rectangle 53.png', alt: 'Rajhans Precia Atrium Skylight' },
      { url: 'images/architecture/Rectangle 111.png', alt: 'Rajhans Precia Retail Promenade' },
      { url: 'images/project-detail/gallery_1_wide.png', alt: 'Rajhans Precia Exterior Lighting' },
      { url: 'images/projects/rajhans_precia.png', alt: 'Rajhans Precia Iconic Facade' }
    ],
    related: ['rajhans-skylar', 'times-tower-new', 'devgn-cinex-bellona'],
    cardImage: 'images/projects/rajhans_precia.png'
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
      rev: 'REV. 01.13',
      location: 'Raipur, Chhattisgarh',
      scope: 'Architecture, Workspace Design',
      typology: 'Commercial Complex',
      siteArea: '65,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 69.png', alt: 'Quorum Workspace' },
      { url: 'images/interior/Rectangle 65.png', alt: 'Quorum Reception' },
      { url: 'images/project-detail/gallery_2_aerial.png', alt: 'Quorum Exterior' },
      { url: 'images/architecture/Rectangle 67.png', alt: 'Quorum Elevation' }
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
      rev: 'REV. 02.16',
      location: 'Mumbai, Maharashtra',
      scope: 'Urban Planning, Architecture',
      typology: 'Mixed-Use Development',
      siteArea: '1,20,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 67.png', alt: 'Urban Square Plaza' },
      { url: 'images/interior/Rectangle 66.png', alt: 'Urban Square Atrium' },
      { url: 'images/project-detail/gallery_3_pool.png', alt: 'Urban Square Promenade' },
      { url: 'images/architecture/Rectangle 68.png', alt: 'Urban Square Tower' }
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
      rev: 'REV. 02.18',
      location: 'Pune, Maharashtra',
      scope: 'Commercial Architecture, Landscape Design',
      typology: 'Business Park & IT Hub',
      siteArea: '1,50,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 67.png', alt: 'Aurelia Business Park Main Court' },
      { url: 'images/architecture/Rectangle 65.png', alt: 'Aurelia Business Park Lobby' },
      { url: 'images/project-detail/gallery_2_aerial.png', alt: 'Aurelia Business Park Aerial' },
      { url: 'images/architecture/Rectangle 69.png', alt: 'Aurelia Business Park Façade' }
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
      rev: 'REV. 04.20',
      location: 'Ahmedabad, Gujarat',
      scope: 'Architecture, Hospitality Interiors',
      typology: 'Pavilion & Banquet Complex',
      siteArea: '95,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 111.png', alt: 'The Grand Pavilion Courtyard' },
      { url: 'images/architecture/Rectangle 68 (1).png', alt: 'The Grand Pavilion Hall' },
      { url: 'images/project-detail/gallery_3_pool.png', alt: 'The Grand Pavilion Water Feature' },
      { url: 'images/architecture/Rectangle 67 (1).png', alt: 'The Grand Pavilion Elevation' }
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
      rev: 'REV. 06.22',
      location: 'Bengaluru, Karnataka',
      scope: 'Residential Architecture, Interiors',
      typology: 'Luxury Residence',
      siteArea: '24,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 69 (1).png', alt: 'Verde Residence Living Area' },
      { url: 'images/about/Rectangle 4.png', alt: 'Verde Residence Garden Deck' },
      { url: 'images/project-detail/gallery_4_lounge.png', alt: 'Verde Residence Lounge' },
      { url: 'images/architecture/Rectangle 68 (1).png', alt: 'Verde Residence Facade' }
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
      rev: 'REV. 01.24',
      location: 'Hyderabad, Telangana',
      scope: 'Commercial Architecture, Workplace Planning',
      typology: 'Corporate Headquarters',
      siteArea: '1,40,000 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/architecture/Rectangle 111.png', alt: 'Aria Corporate Centre Atrium' },
      { url: 'images/interior/Rectangle 66.png', alt: 'Aria Corporate Centre Conference Suite' },
      { url: 'images/project-detail/gallery_1_wide.png', alt: 'Aria Corporate Centre Plaza' },
      { url: 'images/architecture/Rectangle 69 (1).png', alt: 'Aria Corporate Centre Elevation' }
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
      rev: 'REV. 03.16',
      location: 'Mumbai, Maharashtra',
      scope: 'Luxury Interior Architecture',
      typology: 'High-End Residential Penthouse',
      siteArea: '9,500 sq.ft',
      status: 'Completed',
      leadPartner: 'A. Chhatwal, RIBA'
    },
    gallery: [
      { url: 'images/interior/Rectangle 66.png', alt: 'The Grand Residence Living Salon' },
      { url: 'images/interior/Rectangle 67.png', alt: 'The Grand Residence Master Suite' },
      { url: 'images/interior/Rectangle 111.png', alt: 'The Grand Residence Dining Hall' },
      { url: 'images/interior/Rectangle 69.png', alt: 'The Grand Residence Overview' }
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

