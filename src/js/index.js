function cleanText(text) {
  if (document.getElementById('lowercase').checked) {
      text = text.toLowerCase();
  }
  if (document.getElementById('removeSpecialChars').checked) {
      text = text.replace(/[^a-z0-9\s]/gi, '');
  }
  if (document.getElementById('removeNumbers').checked) {
      text = text.replace(/[0-9]/g, '');
  }
  if (document.getElementById('removePunctuation').checked) {
      // You can modify the regex pattern to target specific punctuation marks
      text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  }
  if (document.getElementById('removeEmojis').checked) {
      // Regex pattern to match most common emojis
      text = text.replace(/([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])/gu, '');
  }
  return text;
}

function truncateTokens(text, maxTokens = 7000) {
  const tokens = text.split(/\s+/);
  const truncatedTokens = tokens.slice(0, maxTokens);
  const cutOffTokens = tokens.slice(maxTokens);
  return {
    truncated: truncatedTokens.join(" "),
    cutOff: cutOffTokens.join(" "),
  };
}

document
  .getElementById("truncateButton")
  .addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const maxTokens =
      parseInt(document.getElementById("maxTokens").value) || 7000;
    const result = truncateTokens(inputText, maxTokens);
    document.getElementById("outputText").value = result.truncated;
    document.getElementById("cutOffText").value = result.cutOff;
  });

document.getElementById("cleanButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const cleanedText = cleanText(inputText);
  document.getElementById("inputText").value = cleanedText;
});

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("inputText").value = e.target.result;
      };
      reader.readAsText(file);
    }
  });
