import { toUpperCase } from '../app/utils'

describe('Utils test suite', () => {
  test('should return the uppercase of the string', () => {
    expect(toUpperCase('hello')).toBe('HELLO')
  })
})
