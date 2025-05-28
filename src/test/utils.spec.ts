import { toUpperCase } from '../app/utils'

describe('Utils test suite', () => {
  it('should return the uppercase of a valid string', () => {
    // Arrange
    const expected = 'HELLO'

    // Act
    const actual = toUpperCase('hello')

    // Assert
    expect(actual).toBe(expected)
  })
})
