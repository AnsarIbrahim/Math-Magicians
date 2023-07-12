import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('multiplies two numbers', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  it('divides two numbers', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it('returns "Can\'t divide by 0." when dividing by 0', () => {
    expect(operate('4', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('calculates modulo', () => {
    expect(operate('7', '4', '%')).toBe('3');
  });

  it('returns "Can\'t find modulo as can\'t divide by 0." when dividing by 0 for modulo', () => {
    expect(operate('9', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('throws an error for an unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
  });
});
