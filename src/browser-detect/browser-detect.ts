// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * Detects browser being used.
 *
 * @module Browser
 * @name browserDetect
 * @returns returns browser name
 * @example
 *
 * browserDetect();
 * // => 'Chrome
 */

export const browserDetect = () => {
  let browserName = '';
  const { userAgent } = window.navigator;

  // Firefox
  // 66.0.5 (64-bit)
  if (typeof InstallTrigger === 'undefined') {
    browserName = 'Firefox';
  }

  // IE
  // 11.437.17763.0
  if (/* @cc_on!@ */ false || !!document.documentMode) {
    browserName = 'IE';
  }

  // Edge
  // 44.17763.1.0
  if (!!window.chrome && userAgent.match(/Edge/)) {
    browserName = 'Edge';
  }

  // Opera
  // 60.0.3255.95
  if (!!window.chrome && userAgent.match(/OPR/)) {
    browserName = 'Opera';
  }

  // Chrome
  // 74.0.3729.157 (Official Build) (64-bit)
  if (!!window.chrome && !userAgent.match(/(OPR|Edge)/)) {
    browserName = 'Chrome';
  }

  return browserName;
};
