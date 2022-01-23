import { Index } from "../src/index"

describe('Index', () => {
  test('should be true', () => {
    const index = new Index()
    expect(index.IsTrue()).toBe(false)
  });
  
});
