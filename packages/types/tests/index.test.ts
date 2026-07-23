import { isApiResponse } from '../utils';

describe('@andhra-isp/types utils', () => {
  it('should correctly identify API response structures', () => {
    expect(isApiResponse({ success: true, data: {}, timestamp: '2026-07-23' })).toBe(true);
    expect(isApiResponse({ invalid: true })).toBe(false);
  });
});
