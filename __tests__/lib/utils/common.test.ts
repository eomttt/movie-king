import { getNumberWithComma } from 'lib/utils/common';

describe('getNumberWithComma test', () => {
  it('getNumberWithComma correctly', () => {
    const number = getNumberWithComma(123456789);
    expect(number).toBe('123,456,789');
  });

  it('getNumberWithComma number < 1000', () => {
    const number = getNumberWithComma(300);
    expect(number).toBe('300');
  });
});
