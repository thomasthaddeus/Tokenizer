// Import the functions you want to test
const { cleanText, truncateTokens } = require('../js/');

describe('Text processing tests', () => {
  it('should clean text correctly', () => {
    const testText = "Example text with numbers 123 and symbols @#$!";
    const cleanedText = cleanText(testText);
    expect(cleanedText).toBe("example text with numbers and symbols ");
  });

  it('should truncate text correctly', () => {
    const testText = "This is a long text that needs to be truncated";
    const maxTokens = 5;
    const { truncated } = truncateTokens(testText, maxTokens);
    expect(truncated.split(' ').length).toBe(maxTokens);
  });
});
