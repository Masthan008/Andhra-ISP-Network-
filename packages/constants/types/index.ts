export type AppRoute = typeof import('../constants').ROUTES[keyof typeof import('../constants').ROUTES];
export type UserRole = typeof import('../constants').ROLES[keyof typeof import('../constants').ROLES];
