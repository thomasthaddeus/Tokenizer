// handlers.js
import { cleanText, truncateTokens } from '../utils/textUtils.js';

export function handleCleanText(inputSelector, options) {
  const inputText = document.querySelector(inputSelector).value;
  return cleanText(inputText, options);
}

export function handleTruncateText(inputSelector, maxTokens) {
  const inputText = document.querySelector(inputSelector).value;
  return truncateTokens(inputText, maxTokens);
}

export function handleFileRead(inputSelector) {
  return (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              document.querySelector(inputSelector).value = e.target.result;
          };
          reader.readAsText(file);
      }
  };
}
