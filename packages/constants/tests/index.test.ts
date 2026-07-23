import { isKnownRoute } from '../utils';

describe('@andhra-isp/constants', () => {
  it('should validate known routes', () => {
    expect(isKnownRoute('/')).toBe(true);
    expect(isKnownRoute('/unknown')).toBe(false);
  });
});
