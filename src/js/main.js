// js/main.js
import {
  bindCleanButton,
  bindFileInput,
  bindFindAndReplace,
  bindReplaceTextButton,
  bindTextStatisticsButtons,
  bindTextToUpperButton,
  bindTruncateButton,
} from "./eventBinders.js";

document.addEventListener("DOMContentLoaded", () => {
  bindCleanButton(
    "#cleanButton",
    "#inputText"
  );
  bindTruncateButton(
    "#truncateButton",
    "#inputText",
    "#outputText",
    "#maxTokens"
  );
  bindFileInput(
    "#fileInput",
    "#inputText",
    "#fileProgress",
    "#fileFeedback"
  );
  bindTextStatisticsButtons(
    "#wordCountButton",
    "#charCountButton",
    "#inputText",
    "#statsOutput"
  );
  bindTextToUpperButton(
    "#textToUpperButtonSelector",
    "#inputSelector",
    "#outputSelector"
  );
  bindReplaceTextButton(
    "#replaceTextButton",
    "#inputText",
    "#findText",
    "#replaceText"
  );
  bindFindAndReplace(
    "#findReplaceButton",
    "#inputText",
    "#findText",
    "#replaceText"
  );
  // Add other bindings as necessary
});
