export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  description: string;
  features: string[];
  type: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  avatar?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Family Home',
    price: '$450,000',
    location: 'River Heights, Winnipeg, MB',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    image: '/src/assets/property-1.jpg',
    description: 'Beautiful modern family home featuring an open concept layout, updated kitchen with stainless steel appliances, hardwood floors throughout main level, and a fully finished basement. Located in the desirable River Heights neighborhood with easy access to schools, parks, and shopping.',
    features: ['Open concept layout', 'Updated kitchen', 'Hardwood floors', 'Finished basement', 'Double garage', 'Large backyard'],
    type: 'House'
  },
  {
    id: '2',
    title: 'Contemporary Luxury Home',
    price: '$625,000',
    location: 'Tuxedo, Winnipeg, MB',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 2800,
    image: '/src/assets/property-2.jpg',
    description: 'Stunning contemporary home in prestigious Tuxedo neighborhood. Features include soaring ceilings, gourmet kitchen with granite countertops, master suite with walk-in closet and ensuite, and professionally landscaped grounds.',
    features: ['Gourmet kitchen', 'Master ensuite', 'High ceilings', 'Premium finishes', 'Landscaped yard', 'Triple garage'],
    type: 'House'
  },
  {
    id: '3',
    title: 'Executive Family Estate',
    price: '$750,000',
    location: 'Charleswood, Winnipeg, MB',
    bedrooms: 6,
    bathrooms: 4,
    sqft: 3400,
    image: '/src/assets/property-3.jpg',
    description: 'Impressive executive home offering luxury living with spacious rooms, elegant finishes, and premium location. Perfect for entertaining with formal dining room, great room with fireplace, and chef-inspired kitchen.',
    features: ['Chef kitchen', 'Great room with fireplace', 'Formal dining', 'Home office', 'Rec room', 'Premium location'],
    type: 'House'
  },
  {
    id: '4',
    title: 'Cozy Starter Home',
    price: '$285,000',
    location: 'St. Boniface, Winnipeg, MB',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    image: '/src/assets/property-1.jpg',
    description: 'Perfect starter home in vibrant St. Boniface. Features updated flooring, modern kitchen, and a large fenced yard. Close to the Seine River and French Quarter cultural district.',
    features: ['Updated kitchen', 'Fenced yard', 'Near river', 'Cultural district', 'Move-in ready', 'Great value'],
    type: 'House'
  },
  {
    id: '5',
    title: 'Elegant Heritage Home',
    price: '$525,000',
    location: 'Wolseley, Winnipeg, MB',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2100,
    image: '/src/assets/property-2.jpg',
    description: 'Charming heritage home with modern updates in trendy Wolseley. Original character features blend seamlessly with contemporary amenities. Walking distance to cafes, shops, and the Assiniboine River.',
    features: ['Heritage character', 'Modern updates', 'Walk to amenities', 'River nearby', 'Unique charm', 'Prime location'],
    type: 'House'
  },
  {
    id: '6',
    title: 'New Construction Gem',
    price: '$485,000',
    location: 'Sage Creek, Winnipeg, MB',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2000,
    image: '/src/assets/property-3.jpg',
    description: 'Brand new construction in the growing Sage Creek community. Energy-efficient design with modern amenities, open floor plan, and builder warranty. Perfect for growing families.',
    features: ['New construction', 'Energy efficient', 'Builder warranty', 'Open floor plan', 'Growing community', 'Modern amenities'],
    type: 'House'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane & Mike Thompson',
    review: 'Sara made our home buying experience seamless and stress-free. Her knowledge of the Winnipeg market is exceptional, and she found us the perfect family home in River Heights!',
  },
  {
    id: '2',
    name: 'David Chen',
    review: 'Professional, responsive, and truly cares about her clients. Sara helped us sell our home quickly and for top dollar. Highly recommend her services!',
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    review: 'As first-time homebuyers, we were nervous about the process. Sara guided us every step of the way and helped us find our dream home within our budget.',
  }
];