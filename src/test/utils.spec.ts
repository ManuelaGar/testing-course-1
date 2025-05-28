import { getStringInfo, toUpperCase } from '../app/utils'

describe('Utils test suite', () => {
  it('should return the uppercase of a valid string', () => {
    // Arrange
    const sut = toUpperCase
    const expected = 'HELLO'

    // Act
    const actual = sut('hello')

    // Assert
    expect(actual).toBe(expected)
  })

  it('should return the string info of a valid string', () => {
    const actual = getStringInfo('hello')

    expect(actual.lowerCase).toBe('hello')
    expect(actual.upperCase).toBe('HELLO')

    expect(actual.characters.length).toBe(5)
    expect(actual.characters).toEqual(['h', 'e', 'l', 'l', 'o'])
    expect(actual.characters).toContain<string>('h')
    expect(actual.characters).toEqual(
      expect.arrayContaining(['l', 'l', 'o', 'h', 'e'])
    )

    expect(actual.length).toBe(5)
    expect(actual.extraInfo).toEqual({})
    expect(actual.extraInfo).not.toBe(undefined)
    expect(actual.extraInfo).not.toBeNull()
    expect(actual.extraInfo).toBeDefined()
    expect(actual.extraInfo).toBeInstanceOf(Object)
  })
})
