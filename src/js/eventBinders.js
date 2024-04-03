// eventBinders.js
import { handleCleanText, handleTruncateText } from './.handlers/handlers.js';

export function bindCleanButton(buttonSelector, inputSelector) {
  const button = document.querySelector(buttonSelector);
  button.addEventListener('click', () => {
    const options = {
      lowercase: document.getElementById('lowercase').checked,
      removeSpecialChars: document.getElementById('removeSpecialChars').checked,
      removeNumbers: document.getElementById('removeNumbers').checked,
      removePunctuation: document.getElementById('removePunctuation').checked,
      removeEmojis: document.getElementById('removeEmojis').checked,
    };
    const result = handleCleanText(inputSelector, options);
    document.querySelector(inputSelector).value = result;
  });
}

export function bindTruncateButton(buttonSelector, inputSelector, outputSelector, maxTokensSelector) {
  const button = document.querySelector(buttonSelector);
  button.addEventListener('click', () => {
    const maxTokens = parseInt(document.querySelector(maxTokensSelector).value) || 7000;
    const result = handleTruncateText(inputSelector, maxTokens);
    document.querySelector(outputSelector).value = result.truncated;
    document.querySelector('#cutOffText').value = result.cutOff; // Assuming #cutOffText is the id for cut-off text area
  });
}
