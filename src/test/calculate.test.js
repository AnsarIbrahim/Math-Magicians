import calculate from '../logic/calculate';

describe('calculate', () => {
  it('clears the calculator data when "AC" button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('updates the next number when a number button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '7');
    expect(result).toEqual({ total: '10', next: '57', operation: '+' });
  });

  it('handles the equals button correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('handles the +/- button correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });

  it('handles an operation button correctly when "=" was pressed previously', () => {
    const result = calculate({ total: '10', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '10', next: null, operation: '+' });
  });

  it('handles an operation button correctly when there is an existing operation and no next number', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '-');
    expect(result).toEqual({ total: '10', next: null, operation: '-' });
  });

  it('handles an operation button correctly when there is an existing operation and a next number', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });
  });
});
