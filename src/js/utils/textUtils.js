// textUtils.js
export function cleanText(text, options) {
  if (options.lowercase) {
    text = text.toLowerCase();
  }
  if (options.removeSpecialChars) {
    text = text.replace(/[^a-z0-9\s]/gi, "");
  }
  if (options.removeNumbers) {
    text = text.replace(/[0-9]/g, "");
  }
  if (options.removePunctuation) {
    text = text.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");
  }
  if (options.removeEmojis) {
    text = text.replace(
      /([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])/gu,
      ""
    );
  }
  if (options.removeDoubleSpaces) {
    text = text.replace(/\s{2,}/g, " ");
  }
  return text;
}

export function truncateTokens(text, maxTokens = 7000) {
  const tokens = text.split(/\s+/);
  return {
    truncated: tokens.slice(0, maxTokens).join(" "),
    cutOff: tokens.slice(maxTokens).join(" "),
  };
}
