import { getRandomIndex, renderText } from './utils';

/**
 * Simulates a text typing effect.
 *
 * @param {Object} typedTextEl - DOM Node referencing the node that will contain the type text
 * @param {Object} cursorEl - DOM Node referencing the node with the text cursor
 * @param {Array} textData - List of text the typewriter will "rotate" through
 * @param {Number} defaultTiming - The time after- and before text will be "typed"
 *
 * @returns {Function} Starts "typing" text when called and will call itself recursively, indefinitely
 */
export default function typewriter(
  typedTextEl,
  cursorEl,
  textData,
  defaultTiming = 3e3
) {
  let i = getRandomIndex(textData.length);
  let screenText = '';
  let isBackspacing = false;

  // Begin with a blinking cursor
  cursorEl.classList.add('blink');

  return function typeText() {
    // Don't blink the cursor wile "typing"
    cursorEl.classList.remove('blink');

    const likeIndex = i % textData.length;
    const fullText = textData[likeIndex];

    // Randomize the "typing speed" to create a more natural "typing effect"
    let timing = 500 - Math.random() * 500;

    if (!isBackspacing) {
      screenText = fullText.substring(0, screenText.length + 1);
    } else {
      screenText = fullText.substring(0, screenText.length - 1);

      // Simulate faster "backspacing effect"
      timing = 80;
    }

    const isReadyTyping = screenText === fullText;
    if (!isBackspacing && isReadyTyping) {
      cursorEl.classList.add('blink');
      isBackspacing = true;
      timing = defaultTiming;
    }

    const isReadybackspacing = screenText === '';
    if (isBackspacing && isReadybackspacing) {
      cursorEl.classList.add('blink');
      isBackspacing = false;
      timing = defaultTiming;
      i++;
    }

    renderText(screenText, typedTextEl);

    // Schedule rendering the next text char
    setTimeout(typeText, timing);
  };
}
