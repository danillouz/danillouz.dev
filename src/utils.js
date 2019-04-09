/**
 * Generate a random number between 0 and a maximum (up to but not including).
 *
 * @param {Number} max - The maximum index that may be returned
 *
 * @returns {Number}
 */
export function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 *
 * @param {String} data - The text data to be rendered
 * @param {Object} el  - The DOM Node of which the text content will be set
 */
export function renderText(data, el) {
  el.textContent = data;
}
