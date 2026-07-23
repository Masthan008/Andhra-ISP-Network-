import { validateConfig } from '../utils';

describe('@andhra-isp/config', () => {
  it('should validate environment config with defaults', () => {
    const config = validateConfig({});
    expect(config.NODE_ENV).toBe('development');
    expect(config.PORT).toBe(3000);
  });
});
