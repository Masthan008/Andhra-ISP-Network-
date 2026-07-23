export function isKnownRoute(path: string): boolean {
  return Object.values(import('../constants').ROUTES).includes(path as any);
}
