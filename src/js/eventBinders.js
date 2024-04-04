// eventBinders.js
import {
  handleCleanText,
  handleTruncateText,
  handleFileRead,
  handleCharacterCount,
  handleFindAndReplace,
  handleTextToUpper,
  handleWordCount,
} from "./.handlers/handlers.js";

export function bindCleanButton(buttonSelector, inputSelector) {
  const button = document.querySelector(buttonSelector);
  button.addEventListener("click", () => {
    const options = {
      lowercase: document.getElementById("lowercase").checked,
      removeSpecialChars: document.getElementById("removeSpecialChars").checked,
      removeNumbers: document.getElementById("removeNumbers").checked,
      removePunctuation: document.getElementById("removePunctuation").checked,
      removeEmojis: document.getElementById("removeEmojis").checked,
    };
    const result = handleCleanText(inputSelector, options);
    document.querySelector(inputSelector).value = result;
  });
}

export function bindTruncateButton(
  buttonSelector,
  inputSelector,
  outputSelector,
  maxTokensSelector
) {
  const button = document.querySelector(buttonSelector);
  button.addEventListener("click", () => {
    const maxTokens =
      parseInt(document.querySelector(maxTokensSelector).value) || 7000;
    const result = handleTruncateText(inputSelector, maxTokens);
    document.querySelector(outputSelector).value = result.truncated;
    document.querySelector("#cutOffText").value = result.cutOff; // Assuming #cutOffText is the id for cut-off text area
  });
}

export function bindFileInput(fileInputSelector, inputSelector) {
  const fileInput = document.querySelector(fileInputSelector);
  fileInput.addEventListener("change", handleFileRead(inputSelector));
}

export function bindTextStatisticsButtons(
  wordCountButtonSelector,
  charCountButtonSelector,
  inputSelector,
  outputSelector
) {
  const wordCountButton = document.querySelector(wordCountButtonSelector);
  wordCountButton.addEventListener("click", () =>
    handleWordCount(inputSelector, outputSelector)
  );

  const charCountButton = document.querySelector(charCountButtonSelector);
  charCountButton.addEventListener("click", () =>
    handleCharacterCount(inputSelector, outputSelector)
  );
}

export function bindTextToUpperButton(
  textToUpperButtonSelector,
  inputSelector,
  outputSelector
) {
  const textToUpperButton = document.querySelector(textToUpperButtonSelector);
  textToUpperButton.addEventListener("click", () =>
    handleTextToUpper(inputSelector, outputSelector)
  );
}

export function bindReplaceTextButton(
  inputSelector,
  outputSelector
) {
  const replaceTextButton
}
// handleFindAndReplace
