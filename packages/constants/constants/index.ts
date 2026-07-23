export const APP_NAME = 'Andhra ISP Network';
export const APP_TAGLINE = 'Connecting Every Corner of Andhra Pradesh';

export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  MAP: '/map',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ADMIN_DASHBOARD: '/admin/dashboard',
} as const;

export const ROLES = {
  CITIZEN: 'CITIZEN',
  ISP_OPERATOR: 'ISP_OPERATOR',
  ADMIN: 'ADMIN',
  GOVERNMENT_AUDITOR: 'GOVERNMENT_AUDITOR',
} as const;

export const FEATURE_FLAGS = {
  ENABLE_AI_COPILOT: true,
  ENABLE_DIGITAL_TWIN: true,
  ENABLE_PUBLIC_REGISTRATION: true,
} as const;
