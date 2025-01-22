import { A, S } from '@mobily/ts-belt';

test('A.filter should filter even numbers', () => {
  const numbers = [1, 2, 3, 4];
  const evenNumbers = A.filter(numbers, (n) => n % 2 === 0);
  expect(evenNumbers).toEqual([2, 4]);
});

test('A.map should double the numbers', () => {
  const numbers = [1, 2];
  const doubled = A.map(numbers, (n) => n * 2);
  expect(doubled).toEqual([2, 4]);
});

test('S.trim should remove extra spaces', () => {
  const trimmed = S.trim('   hello   ');
  expect(trimmed).toBe('hello');
});

test('S.split should split a string into words', () => {
  const words = S.split('hello world', ' ');
  expect(words).toEqual(['hello', 'world']);
});
