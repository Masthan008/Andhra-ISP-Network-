export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  meta?: Record<string, any>;
  timestamp: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface PaginationMeta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'CITIZEN' | 'ISP_OPERATOR' | 'ADMIN' | 'GOVERNMENT_AUDITOR';
  district?: string;
  createdAt: string;
}

export interface DistrictInfo {
  code: string;
  name: string;
  nameTelugu: string;
  headquarters: string;
  population: number;
  mandalsCount: number;
  activeIspsCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}
