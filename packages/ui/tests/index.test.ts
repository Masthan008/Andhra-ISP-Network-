import { getButtonClass } from '../utils';

describe('@andhra-isp/ui', () => {
  it('should generate correct button class', () => {
    expect(getButtonClass('primary')).toBe('btn btn-primary');
  });
});
