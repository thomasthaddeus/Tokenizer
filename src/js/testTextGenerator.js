function generateTestText() {
  const lowerCaseText = "this is a lowercase string. ";
  const upperCaseText = "THIS IS AN UPPERCASE STRING. ";
  const numberString = "123 456 7890 ";
  const specialCharString = "!@#$%^&*()_+[];'./,<>?\":{}|=- ";
  const punctuationString = ",.;:?!-(){}[]'\" ";
  const emojiString = "😀👍🚀🌟💥🌈 ";
  const mixedText = "Mixed: ABC abc 123 🚀! ";
  const allChars =
    lowerCaseText +
    upperCaseText +
    numberString +
    specialCharString +
    punctuationString +
    emojiString;

  let randomText = "";
  for (let i = 0; i < 1000; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    randomText += allChars[randomIndex];
  }

  return (
    lowerCaseText.repeat(5) +
    upperCaseText.repeat(5) +
    numberString.repeat(5) +
    specialCharString.repeat(5) +
    punctuationString.repeat(5) +
    emojiString.repeat(5) +
    mixedText.repeat(5) +
    randomText
  );
}

// Use this function to get the test text and use it for testing
const testText = generateTestText();
console.log(testText);
