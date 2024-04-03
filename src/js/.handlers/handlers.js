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
