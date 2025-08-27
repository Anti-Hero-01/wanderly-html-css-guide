// Travel destinations data for Wanderly
import goaImage from '@/assets/destinations/goa.jpg';
import parisImage from '@/assets/destinations/paris.jpg';
import baliImage from '@/assets/destinations/bali.jpg';
import manaliImage from '@/assets/destinations/manali.jpg';
import jaipurImage from '@/assets/destinations/jaipur.jpg';
import kyotoImage from '@/assets/destinations/kyoto.jpg';

export interface Destination {
  slug: string;
  name: string;
  country: string;
  region: string;
  description: string;
  image: string;
  tags: string[];
  overview?: string;
  bestTime?: string;
  highlights?: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'goa',
    name: 'Goa',
    country: 'India',
    region: 'Asia',
    description: 'Sunny beaches, Portuguese heritage, and laid-back vibes make Goa the perfect tropical escape.',
    image: goaImage,
    tags: ['Beaches', 'Culture', 'Nightlife'],
    overview: 'Goa is a state on the western coast of India known for its pristine beaches, Portuguese colonial architecture, and vibrant nightlife. From the bustling beaches of North Goa to the serene shores of South Goa, this coastal paradise offers something for every traveler.',
    bestTime: 'November to February',
    highlights: ['Baga Beach', 'Fort Aguada', 'Anjuna Flea Market', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Old Goa Churches']
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    description: 'Art, fashion, and iconic landmarks at every corner in the City of Light.',
    image: parisImage,
    tags: ['Culture', 'Art', 'Romance'],
    overview: 'Paris, the capital of France, is globally renowned for its art, fashion, gastronomy, and culture. Home to iconic landmarks like the Eiffel Tower and Louvre Museum, Paris seamlessly blends historic charm with modern sophistication.',
    bestTime: 'April to June, September to October',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Champs-Élysées', 'Montmartre', 'Seine River Cruise']
  },
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    description: 'Island paradise with temples, rice terraces, and surf-perfect waves.',
    image: baliImage,
    tags: ['Beaches', 'Culture', 'Adventure'],
    overview: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is home to ancient temples and a rich cultural heritage that permeates daily life.',
    bestTime: 'April to October',
    highlights: ['Tanah Lot Temple', 'Tegallalang Rice Terraces', 'Ubud Monkey Forest', 'Mount Batur', 'Seminyak Beach', 'Uluwatu Temple']
  },
  {
    slug: 'manali',
    name: 'Manali',
    country: 'India',
    region: 'Asia',
    description: 'Breathtaking Himalayan landscapes with adventure sports and mountain serenity.',
    image: manaliImage,
    tags: ['Mountains', 'Adventure', 'Nature'],
    overview: 'Manali is a high-altitude Himalayan resort town in India\'s northern Himachal Pradesh state. Set on the Beas River, it\'s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.',
    bestTime: 'March to June, October to February',
    highlights: ['Solang Valley', 'Rohtang Pass', 'Hadimba Temple', 'Vashisht Hot Springs', 'Old Manali', 'Beas River']
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    country: 'India',
    region: 'Asia',
    description: 'The Pink City showcases royal palaces, vibrant markets, and Rajasthani heritage.',
    image: jaipurImage,
    tags: ['Culture', 'History', 'Architecture'],
    overview: 'Jaipur, the capital of Rajasthan, is known as the Pink City due to the color of its buildings. This UNESCO World Heritage site is famous for its magnificent palaces, forts, and vibrant bazaars.',
    bestTime: 'October to March',
    highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort', 'Johari Bazaar']
  },
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    description: 'Ancient temples, traditional gardens, and preserved cultural heritage in Japan\'s former capital.',
    image: kyotoImage,
    tags: ['Culture', 'History', 'Temples'],
    overview: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses.',
    bestTime: 'March to May, September to November',
    highlights: ['Fushimi Inari Shrine', 'Kinkaku-ji (Golden Pavilion)', 'Arashiyama Bamboo Grove', 'Gion District', 'Kiyomizu-dera', 'Philosopher\'s Path']
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(dest => dest.slug === slug);
};