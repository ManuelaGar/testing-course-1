# Testing Course 1

## Setup

```bash
npm install
```

## Run tests

```bash
npm test
```

## Structure of a properly written test

AAA principles:

- Arrange
- Act
- Assert

```js
describe('toUppercase', () => {
  it('should return the uppercase of a valid string', () => {
    // Arrange
    const sut = toUpperCase
    const expected = 'HELLO'

    // Act
    const actual = sut('hello')

    // Assert
    expect(actual).toBe(expected)
  })
})
```
Setup and teardown

## FIRST principles

- Fast: tests should be fast to run.
- Independent: tests should not depend on each other, the order of tests should not matter.
- Repeatable: tests should be repeatable in any environment, same input should always produce the same output.
- Self-validating: after the test is run, it should be clear if the test passed or failed.
- Thorough: tests should cover all edge cases.