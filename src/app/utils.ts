export function toUpperCase (str: string): string {
  return str.toUpperCase()
}

export type stringInfo = {
  lowerCase: string
  upperCase: string
  characters: string[]
  length: number,
  extraInfo: object | undefined
}

export function getStringInfo (str: string): stringInfo {
  return {
    lowerCase: str.toLowerCase(),
    upperCase: str.toUpperCase(),
    characters: Array.from(str),
    length: str.length,
    extraInfo: {}
  }
}
