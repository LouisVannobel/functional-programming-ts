import {
    isEven,
    sumArray,
    factorial,
    chunkArray,
    pipe,
    deepClone,
  } from '../src/utils/customUtils';
  
  test('isEven should return true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });
  
  test('isEven should return false for odd numbers', () => {
    expect(isEven(5)).toBe(false);
  });
  
  test('sumArray should calculate the sum of an array', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });
  
  test('factorial should calculate the correct value', () => {
    expect(factorial(5)).toBe(120);
  });
  
  test('chunkArray should divide an array into smaller chunks', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
  
  test('pipe should compose functions correctly', () => {
    const addOne = (n: number) => n + 1;
    const double = (n: number) => n * 2;
  
    const pipeline = pipe(addOne, double);
  
    expect(pipeline(3)).toBe(8); // (3 + 1) * 2 = 8
  });
  
  test('deepClone should deeply clone an object', () => {
    const obj = { a: { b: { c: [1, 2, { d: 'hello' }] } } };
  
    const clonedObj = deepClone(obj);
  
    expect(clonedObj).toEqual(obj);
  
    // Vérifie que les objets ne partagent pas la même référence
    expect(clonedObj).not.toBe(obj);
  });  