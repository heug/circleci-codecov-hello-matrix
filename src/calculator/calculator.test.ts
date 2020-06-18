import Calculator from './calculator'

test('adds 2 + 3 to equal 5', () => {
  const calc = new Calculator()
  expect(calc.add(2, 3)).toBe(5);
});
