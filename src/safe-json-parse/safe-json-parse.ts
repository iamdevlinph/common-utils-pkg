/**
 * Parses JSON without throwing.
 *
 * @version 4.4.0
 * @module JSON
 * @name safeJsonParse
 * @param {string} text JSON text to parse
 * @returns {object} the parsed value or parse error
 * @example
 *
 * safeJsonParse('{"value":true}');
 * // => { ok: true, value: { value: true } }
 *
 * safeJsonParse('{');
 * // => { ok: false, error: SyntaxError }
 */
export const safeJsonParse = (
  text: string
): { ok: true; value: unknown } | { ok: false; error: unknown } => {
  try {
    const value: unknown = JSON.parse(text);
    return { ok: true, value };
  } catch (error) {
    return { ok: false, error };
  }
};
