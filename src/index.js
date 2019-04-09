import typewriter from './typewriter';
import textData from './text-data';

function main() {
  const typedTextEl = document.getElementById('typed-text');
  const cursorEl = document.getElementById('cursor');
  const typeText = typewriter(typedTextEl, cursorEl, textData);
  setTimeout(typeText, 3000);
}

main();
