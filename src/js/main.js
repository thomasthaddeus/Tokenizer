// main.js
import { bindCleanButton, bindTruncateButton } from './eventBinders.js';

document.addEventListener('DOMContentLoaded', () => {
  bindCleanButton('#cleanButton', '#inputText');
  bindTruncateButton('#truncateButton', '#inputText', '#outputText', '#maxTokens');
});
