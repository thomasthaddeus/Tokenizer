// .handlers/handlers.js
import {
  cleanText,
  truncateTokens,
  countCharacters,
  countWords,
  toUpperCase,
  findAndReplace,
} from "../utils/textUtils.js";

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

export function handleWordCount(inputSelector, outputSelector) {
  const inputText = document.querySelector(inputSelector).value;
  const wordCount = countWords(inputText);
  document.querySelector(
    outputSelector
  ).textContent = `Word count: ${wordCount}`;
}

export function handleCharacterCount(inputSelector, outputSelector) {
  const inputText = document.querySelector(inputSelector).value;
  const charCount = countCharacters(inputText);
  document.querySelector(
    outputSelector
  ).textContent = `Character count: ${charCount}`;
}

export function handleTextToUpper(inputSelector) {
  const inputText = document.querySelector(inputSelector).value;
  return toUpperCase(inputText);
}

export function handleFindAndReplace(inputSelector, findText, replaceText) {
  const inputText = document.querySelector(inputSelector).value;
  return findAndReplace(inputText, findText, replaceText);
}
