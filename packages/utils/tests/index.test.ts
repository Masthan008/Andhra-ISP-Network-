import { truncateText } from '../utils';

describe('@andhra-isp/utils', () => {
  it('should truncate text correctly', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello...');
    expect(truncateText('Hi', 5)).toBe('Hi');
  });
});
