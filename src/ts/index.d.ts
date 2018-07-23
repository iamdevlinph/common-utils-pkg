// Type definitions for common-utils-pkg
// Project: common-utils-pkg
// Definitions by: Devlin Pajaron https://iamdevlinph.com/

export namespace ArrayUtil {
  export function strToArray(string: string, delimiter: string): Array<string>
}

export namespace BoolUtil {
  export function toBool(val: any, trueValuesArr?: Array<string>): boolean
}

export namespace ColorUtil {
  export function invertHexColor(hex: string): string
  export function randomColorPastel(): string
}

export namespace CoreUtil {
  export function argTypesMatch(arg: any, expectedType: any): boolean
}

export namespace DateUtil { }

export namespace FileUtil {
  export function convertBytes(bytes: number, demicals?: number): string
}

export namespace StringUtil {
  export function arrToString(array: Array<string>, delimiter: string): string
  export function toSentenceCase(string: string): string
  export function toTitleCase(string: string): string
}
