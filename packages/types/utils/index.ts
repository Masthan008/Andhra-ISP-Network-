export function isApiResponse(obj: any): boolean {
  return obj && typeof obj === 'object' && 'success' in obj && 'timestamp' in obj;
}
