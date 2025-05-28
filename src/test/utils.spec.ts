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

  describe('getStringInfo for arg "My-String"', () => {
    test('return right length', () => {
      const actual = getStringInfo('My-String')
      expect(actual.characters).toHaveLength(9)
    })

    test('return right lower case', () => {
      const actual = getStringInfo('My-String')
      expect(actual.lowerCase).toBe('my-string')
    })

    test('return right upper case', () => {
      const actual = getStringInfo('My-String')
      expect(actual.upperCase).toBe('MY-STRING')
    })

    test('return right characters', () => {
      const actual = getStringInfo('My-String')
      expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
      expect(actual.characters).toContain<string>('M')
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      )
    })

    test('return defined extra info', () => {
      const actual = getStringInfo('My-String')
      expect(actual.extraInfo).toBeDefined()
    })

    test('return valid extra info', () => {
      const actual = getStringInfo('My-String')
      expect(actual.extraInfo).toEqual({})
    })
  })
})
