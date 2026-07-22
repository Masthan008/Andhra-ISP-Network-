export interface NetworkHubNode {
  id: string;
  name: string;
  designation: string;
  district: string;
  capacityGbps: number;
  mandalsConnected: number;
  x: number; // Percentage or 2D coordinate [0..100]
  y: number;
  primaryRouteTargetId?: string;
}

export interface FiberRouteLink {
  fromId: string;
  toId: string;
  status: 'active' | 'expanding';
  distanceKm: number;
}

export const NETWORK_HUBS_DATA: NetworkHubNode[] = [
  {
    id: 'vizag',
    name: 'Visakhapatnam HQ',
    designation: 'Primary Gateway Exchange',
    district: 'Visakhapatnam',
    capacityGbps: 100,
    mandalsConnected: 11,
    x: 78,
    y: 22,
    primaryRouteTargetId: 'vijayawada',
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada Central',
    designation: 'Metro Routing Hub',
    district: 'NTR Vijayawada',
    capacityGbps: 80,
    mandalsConnected: 20,
    x: 52,
    y: 44,
    primaryRouteTargetId: 'tirupati',
  },
  {
    id: 'kakinada',
    name: 'Kakinada Exchange',
    designation: 'Coastal Port Node',
    district: 'Kakinada',
    capacityGbps: 40,
    mandalsConnected: 21,
    x: 68,
    y: 32,
    primaryRouteTargetId: 'vizag',
  },
  {
    id: 'guntur',
    name: 'Guntur Exchange',
    designation: 'Delta Region Interconnect',
    district: 'Guntur',
    capacityGbps: 50,
    mandalsConnected: 18,
    x: 48,
    y: 54,
    primaryRouteTargetId: 'vijayawada',
  },
  {
    id: 'kurnool',
    name: 'Kurnool Hub',
    designation: 'Rayalaseema West Hub',
    district: 'Kurnool',
    capacityGbps: 40,
    mandalsConnected: 26,
    x: 28,
    y: 62,
    primaryRouteTargetId: 'tirupati',
  },
  {
    id: 'tirupati',
    name: 'Tirupati Gateway',
    designation: 'South Fiber Gateway',
    district: 'Tirupati',
    capacityGbps: 60,
    mandalsConnected: 34,
    x: 42,
    y: 80,
  },
];

export const FIBER_ROUTES_DATA: FiberRouteLink[] = [
  { fromId: 'vizag', toId: 'kakinada', status: 'active', distanceKm: 152 },
  { fromId: 'kakinada', toId: 'vijayawada', status: 'active', distanceKm: 130 },
  { fromId: 'vijayawada', toId: 'guntur', status: 'active', distanceKm: 38 },
  { fromId: 'guntur', toId: 'tirupati', status: 'active', distanceKm: 280 },
  { fromId: 'vijayawada', toId: 'kurnool', status: 'active', distanceKm: 240 },
  { fromId: 'kurnool', toId: 'tirupati', status: 'active', distanceKm: 230 },
];
