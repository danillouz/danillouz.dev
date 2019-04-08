const THINGS_I_LIKE = [
  'learning new things',
  'working with an amazing team',
  'to keep pushing myself',
  'Node.js',
  'operating what I build',
  'pizza',
  'Go',
  'sharing knowledge',
  'to build things people love',
  'ReactJS',
  'to understand why a problem needs to be solved',
  'ice cream',
  'Rust',
  'to bring out the best in the people around me',
  'serverless technologies, like AWS Lambda',
  'salsa dancing',
  'listening to people',
  'having an open mind',
  'reading books',
  'tweaking the color scheme of my terminal',
  'sleeping',
  'to have strong opinions, but hold them weakly',
  'making crosswind landings',
  'taking charge',
  'to learn from my mistakes'
];

const DEFAULT_TIMING = 3e3;

function render(data, el) {
  el.textContent = data;
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function main() {
  const typedTextEl = document.getElementById('typed-text');
  const cursor = document.getElementById('cursor');

  let i = getRandomIndex(THINGS_I_LIKE.length);
  let screenText = '';
  let isBackspacing = false;

  function tick() {
    // Don't blink the cursor wile "typing"
    cursor.classList.remove('blink');

    const likeIndex = i % THINGS_I_LIKE.length;
    const fullText = THINGS_I_LIKE[likeIndex];

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
      cursor.classList.add('blink');
      isBackspacing = true;
      timing = DEFAULT_TIMING;
    }

    const isReadybackspacing = screenText === '';
    if (isBackspacing && isReadybackspacing) {
      cursor.classList.add('blink');
      isBackspacing = false;
      timing = DEFAULT_TIMING;
      i++;
    }

    render(screenText, typedTextEl);

    // Schedule rendering the next text char
    setTimeout(tick, timing);
  }

  // Begin with a blinking cursor
  cursor.classList.add('blink');

  // Entrypoint: start rendering the first text char
  setTimeout(tick, 3000);
}

main();
