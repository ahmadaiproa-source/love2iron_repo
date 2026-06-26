import { ServiceItem, PricingCategory, ReviewItem, FAQItem } from './types';

export const CONTACT_INFO = {
  phone: "+44 7000 123456",
  email: "hello@love2iron.co.uk",
  address: "123 High Street, Hampton, London, TW12 1AB",
  whatsappUrl: "https://wa.me/447000123456?text=Hi%20Love%202%20Iron%2C%20I%27m%20interested%20in%20your%20laundry%2C%20dry%20cleaning%20or%20ironing%20service.%20Can%20you%20share%20more%20details%3F"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "laundry-service",
    title: "Laundry Service",
    description: "Everyday washing and garment care for fresh, clean clothes without the weekly stress.",
    bullets: [
      "Everyday clothing",
      "Bedding and towels",
      "Fresh wash and fold",
      "Family laundry support"
    ],
    image: "https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512278/laundry_cleaning_services_for_love_2_iron_an6cnl.png"
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Professional care for garments that need a cleaner, sharper finish.",
    bullets: [
      "Suits and coats",
      "Delicate fabrics",
      "Occasion wear",
      "Professional finishing"
    ],
    image: "https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512279/dry_cleaning_services_for_love_2_iron_ulmmun.png"
  },
  {
    id: "ironing-service",
    title: "Ironing Service",
    description: "Crisp, neatly pressed clothes ready for work, events, and daily wear.",
    bullets: [
      "Shirts and trousers",
      "Dresses and uniforms",
      "Folded or hanging finish",
      "Regular ironing support"
    ],
    image: "https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512280/ironing_service_-_love_2_iron_dz6ili.png"
  },
  {
    id: "wedding-dress-cleaning",
    title: "Wedding Dress Cleaning",
    description: "Careful cleaning support for bridal and occasion dresses that need delicate attention.",
    bullets: [
      "Bridal dresses",
      "Occasion gowns",
      "Delicate fabric handling",
      "Quote required"
    ],
    image: "https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512278/wedding_dress_cleaning-_love_2_iron_mabn5v.png"
  },
  {
    id: "curtain-cleaning",
    title: "Curtain Cleaning",
    description: "Refresh curtains and large fabrics with convenient cleaning support.",
    bullets: [
      "Curtains",
      "Drapes",
      "Large fabric items",
      "Home fabric refresh"
    ],
    image: "https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512284/curtain_cleaning-_love2_iron_ipcaa7.png"
  },
  {
    id: "repairs-alterations",
    title: "Repairs / Alterations",
    description: "Simple repair and alteration support for garments that need extra care.",
    bullets: [
      "Trouser repairs",
      "Dress adjustments",
      "Minor garment fixes",
      "Alteration enquiries"
    ],
    image: "https://res.cloudinary.com/dfywgxkn3/image/upload/v1782512284/alteration_services-_love_2_iron_gltwwg.png"
  }
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    title: "Dry Cleaning",
    subtitle: "All prices from",
    items: [
      { name: "2pc Suit", price: "£19.99" },
      { name: "3pc Suit", price: "£27.95" },
      { name: "2pc Suit Dinner Suit", price: "£24.99" },
      { name: "Linen Suit", price: "£24.99" },
      { name: "Shirt", price: "£4.99" },
      { name: "Tie", price: "£7.99" },
      { name: "Waistcoat", price: "£11.99" },
      { name: "Suit Jacket", price: "£14.99" },
      { name: "Trouser", price: "£9.99" },
      { name: "Jumper", price: "£11.99" },
      { name: "Dress", price: "£24.99" },
      { name: "Skirt", price: "£14.99" },
      { name: "Blouse", price: "£12.99" }
    ]
  },
  {
    title: "Winter Jackets / Overcoat",
    subtitle: "Specialist care — prices from",
    items: [
      { name: "Short Puffer Jackets", price: "£34.99" },
      { name: "Parka Style Puffer Jackets", price: "£39.99" },
      { name: "Moose Knuckles", price: "£49.99 / 10+ fur" },
      { name: "Canada Goose", price: "£49.99 / 10+ fur" },
      { name: "Mackage", price: "£45" },
      { name: "Winter Wool Long Coat", price: "£32" }
    ]
  },
  {
    title: "Repairs / Alterations",
    subtitle: "All types — prices from",
    items: [
      { name: "Trouser", price: "£16.50" },
      { name: "Dress", price: "From £29.99" },
      { name: "Voile / Sheer", price: "£20 per panel" },
      { name: "Curtain Unlined", price: "£25 per panel" },
      { name: "Curtain Lined", price: "£35 per panel" },
      { name: "Blackout / Thermal", price: "£40 per panel" },
      { name: "Heavy Interlined", price: "£45–£50 per panel" }
    ]
  },
  {
    title: "Wedding Dress / Suit",
    subtitle: "Premium fabric and occasion care",
    items: [
      { name: "Groom Wedding Suit", price: "£30" },
      { name: "Simple Wedding Dress", price: "From £160" },
      { name: "Beaded Wedding Dress", price: "From £220" }
    ]
  },
  {
    title: "Curtains",
    subtitle: "All prices from",
    items: [
      { name: "Voile / Sheer Curtains", price: "£6 per m²" },
      { name: "Unlined Curtains", price: "£12 per m²" },
      { name: "Lined Curtains", price: "£18 per m²" },
      { name: "Blackout / Thermal Lined", price: "£20 per m²" },
      { name: "Heavy Interlined Curtains", price: "£24 per m²" }
    ]
  },
  {
    title: "Laundry",
    subtitle: "All prices from",
    items: [
      { name: "King Duvet Cover", price: "£13.99" },
      { name: "Double Duvet Cover", price: "£12.99" },
      { name: "Single Duvet Cover", price: "£9.99" },
      { name: "King Duvet", price: "£36.00" },
      { name: "Double Duvet", price: "£32.00" },
      { name: "Single Duvet", price: "£28.00" },
      { name: "Fitted Sheet King", price: "£11.99" },
      { name: "Fitted Sheet Double", price: "£10.99" },
      { name: "Fitted Sheet Single", price: "£9.99" },
      { name: "Pillow Case", price: "£4.99" }
    ]
  }
];

export const SERVICE_AREAS = [
  "Hampton",
  "Hampton Hill",
  "Hampton Wick",
  "Teddington",
  "Twickenham",
  "Sunbury",
  "Feltham",
  "Hounslow",
  "Richmond",
  "Kingston upon Thames",
  "Whitton",
  "St Margarets",
  "East Molesey",
  "Walton-on-Thames"
];

export const WHY_CHOOSE_US_REASONS = [
  {
    title: "Careful Garment Handling",
    description: "We handle everyday and delicate items with attention to fabric, finish, and presentation."
  },
  {
    title: "Convenient Local Service",
    description: "Book laundry, dry cleaning, ironing, and specialist cleaning support in one place."
  },
  {
    title: "Clear Communication",
    description: "We keep the process simple and let you know what to expect."
  },
  {
    title: "Fresh, Professional Finish",
    description: "Clothes are cleaned, pressed, and prepared to look their best."
  },
  {
    title: "Specialist Item Support",
    description: "Wedding dresses, curtains, coats, and delicate fabrics are handled with extra care."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    quote: "My shirts came back neatly pressed and ready for the week. Really simple service.",
    name: "Local Customer",
    type: "Ironing Service"
  },
  {
    quote: "The laundry service saved me so much time. Everything felt fresh, clean, and well handled.",
    name: "Hampton Resident",
    type: "Laundry Service"
  },
  {
    quote: "They explained everything clearly and handled my delicate items with care.",
    name: "Customer Review",
    type: "Dry Cleaning"
  },
  {
    quote: "Helpful, reliable, and easy to contact. I’d use them again.",
    name: "Local Customer",
    type: "Garment Care"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer laundry, dry cleaning, and ironing services in Hampton?",
    answer: "Yes. Love 2 Iron offers laundry, dry cleaning, ironing, wedding dress cleaning, curtain cleaning, repairs, alterations, and garment care services in Hampton and nearby London areas."
  },
  {
    question: "Can I book a collection for laundry or ironing?",
    answer: "Yes. You can use the booking form or WhatsApp button to request collection availability. Collection details can be confirmed based on your location and service needs."
  },
  {
    question: "How much does dry cleaning cost?",
    answer: "Dry cleaning prices depend on the garment type. The pricing section shows guide prices such as shirts, suits, dresses, coats, and specialist items."
  },
  {
    question: "Do you clean wedding dresses?",
    answer: "Yes. Wedding dress cleaning is available by quote because pricing depends on the dress fabric, detailing, condition, and cleaning requirements."
  },
  {
    question: "Do you clean curtains?",
    answer: "Yes. Curtain cleaning is available. Pricing depends on the curtain size, fabric, lining, and cleaning requirements."
  },
  {
    question: "Do you offer repairs and alterations?",
    answer: "Yes. Repairs and alterations are available for selected garments. You can send details through the booking form or WhatsApp for a quote."
  },
  {
    question: "Which areas do you serve?",
    answer: "Love 2 Iron serves Hampton and nearby areas including Hampton Hill, Teddington, Twickenham, Sunbury, Feltham, Richmond, Kingston upon Thames, and surrounding locations."
  },
  {
    question: "How can I contact Love 2 Iron?",
    answer: "You can contact Love 2 Iron by phone, WhatsApp, email, or by submitting the booking form on the website."
  }
];
