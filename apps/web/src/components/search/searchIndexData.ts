export interface SearchResultItem {
  id: string;
  providerName: string;
  logoEmoji: string;
  rating: number;
  isVerified: boolean;
  district: string;
  mandal: string;
  pinCode: string;
  technology: 'FTTH Fiber' | '5G AirFiber' | 'Leased Line' | 'Wireless';
  maxSpeedMbps: number;
  startingPrice: string;
  slug: string;
}

export const SEARCH_INDEX_DATA: SearchResultItem[] = [
  {
    id: 'act-vizag-530026',
    providerName: 'ACT Fibernet',
    logoEmoji: '⚡',
    rating: 4.6,
    isVerified: true,
    district: 'Visakhapatnam',
    mandal: 'Gajuwaka',
    pinCode: '530026',
    technology: 'FTTH Fiber',
    maxSpeedMbps: 1000,
    startingPrice: '₹699/mo',
    slug: 'act-fibernet-visakhapatnam',
  },
  {
    id: 'jio-vizag-530016',
    providerName: 'JioFiber',
    logoEmoji: '🌐',
    rating: 4.5,
    isVerified: true,
    district: 'Visakhapatnam',
    mandal: 'Visakhapatnam Urban',
    pinCode: '530016',
    technology: 'FTTH Fiber',
    maxSpeedMbps: 1000,
    startingPrice: '₹599/mo',
    slug: 'jiofiber-visakhapatnam',
  },
  {
    id: 'airtel-vjw-520001',
    providerName: 'Airtel Xstream Fiber',
    logoEmoji: '📡',
    rating: 4.7,
    isVerified: true,
    district: 'NTR Vijayawada',
    mandal: 'Vijayawada Urban',
    pinCode: '520001',
    technology: 'FTTH Fiber',
    maxSpeedMbps: 1000,
    startingPrice: '₹799/mo',
    slug: 'airtel-xstream-vijayawada',
  },
  {
    id: 'apsfl-kurnool-518001',
    providerName: 'AP State FiberNet (APSFL)',
    logoEmoji: '🏛️',
    rating: 4.2,
    isVerified: true,
    district: 'Kurnool',
    mandal: 'Kurnool Mandal',
    pinCode: '518001',
    technology: 'FTTH Fiber',
    maxSpeedMbps: 100,
    startingPrice: '₹300/mo',
    slug: 'apsfl-kurnool',
  },
  {
    id: 'bsnl-tirupati-517501',
    providerName: 'BSNL Bharat Fiber',
    logoEmoji: '🟢',
    rating: 4.1,
    isVerified: true,
    district: 'Tirupati',
    mandal: 'Tirupati Urban',
    pinCode: '517501',
    technology: 'FTTH Fiber',
    maxSpeedMbps: 300,
    startingPrice: '₹499/mo',
    slug: 'bsnl-bharat-fiber-tirupati',
  },
];
