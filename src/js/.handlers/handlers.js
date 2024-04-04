// .handlers/handlers.js
import {
  cleanText,
  truncateTokens,
  countCharacters,
  countWords,
  toUpperCase,
  findAndReplace,
} from "../utils/textUtils.js";

function isValidTextFile(type) {
  // This regex checks for text file mime types;
  // add more as needed
  return type.match("text.*");
}

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
      // Check if the file is a valid text file
      if (!isValidTextFile(file.type)) {
        feedback.textContent = "Please upload a valid text file.";
        feedback.style.display = "block";
        return;
      } else {
        feedback.style.display = "none";
      }

      const reader = new FileReader();

      // Update progress
      reader.onprogress = (e) => {
        const percentLoaded = Math.round((e.loaded / e.total) * 100);
        progress.style.width = `${percentLoaded}%`;
        progress.textContent = `${percentLoaded}% loaded`;
      };

      reader.onloadstart = () => {
        progress.style.width = "0%";
        progress.textContent = `0% loaded`;
      };

      reader.onload = (e) => {
        document.querySelector(inputSelector).value = e.target.result;
        // Hide or reset the progress bar
        progress.style.width = "100%";
        progress.textContent = `Loading complete`;
      };

      reader.onerror = () => {
        feedback.textContent = "Error reading file";
        feedback.style.display = "block";
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
