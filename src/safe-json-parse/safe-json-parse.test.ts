import { safeJsonParse } from './safe-json-parse';

const validJsonCases: [string, unknown][] = [
  ['{"key":"value"}', { key: 'value' }],
  ['[1,"two",false]', [1, 'two', false]],
  ['"text"', 'text'],
  ['42', 42],
  ['true', true],
  ['null', null],
];

describe('safeJsonParse', () => {
  it.each(validJsonCases)('parses %s', (text, value) => {
    const jsonParseResult = safeJsonParse(text);
    expect(jsonParseResult.ok).toBe(true);

    if (!jsonParseResult.ok) {
      throw jsonParseResult.error;
    }

    const parsedValue: unknown = jsonParseResult.value;
    expect(parsedValue).toEqual(value);
  });

  it('returns parse errors without throwing', () => {
    expect(() => safeJsonParse('{')).not.toThrow();

    const jsonParseResult = safeJsonParse('{');
    expect(jsonParseResult.ok).toBe(false);

    if (jsonParseResult.ok) {
      throw new Error('Expected JSON parsing to fail');
    }

    const error: unknown = jsonParseResult.error;
    expect(error).toBeInstanceOf(SyntaxError);
  });

  it('returns caught values unchanged', () => {
    const parseError = { reason: 'invalid JSON' };
    vi.spyOn(JSON, 'parse').mockImplementationOnce(() => {
      throw parseError;
    });

    expect(safeJsonParse('invalid')).toEqual({
      ok: false,
      error: parseError,
    });
  });
});
