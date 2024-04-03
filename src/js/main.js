// js/main.js
import { bindCleanButton, bindTruncateButton, bindFileInput } from './eventBinders.js';

document.addEventListener('DOMContentLoaded', () => {
    bindCleanButton('#cleanButton', '#inputText');
    bindTruncateButton('#truncateButton', '#inputText', '#outputText', '#maxTokens');
    bindFileInput('#fileInput', '#inputText');
});
