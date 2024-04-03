// textUtils.test.js
import { cleanText, truncateTokens } from '../js/utils/textUtils';
import { generateTestText } from '../js/utils/testUtils';

describe('textUtils', () => {
  describe('cleanText', () => {
    it('should convert to lowercase', () => {
      const text = 'Test String';
      expect(cleanText(text, { lowercase: true })).toBe('test string');
    });

    it('should remove special characters', () => {
      const text = 'hello@world!';
      expect(cleanText(text, { removeSpecialChars: true })).toBe('helloworld');
    });

    it('should remove numbers', () => {
      const text = 'Text with numbers 12345';
      expect(cleanText(text, { removeNumbers: true })).toBe('Text with numbers ');
    });

    it('should remove punctuation', () => {
      const text = 'Hello, world! How are you?';
      expect(cleanText(text, { removePunctuation: true })).toBe('Hello world How are you');
    });

    it('should remove emojis', () => {
      const text = 'Hello 😊👍🏻';
      expect(cleanText(text, { removeEmojis: true })).toBe('Hello ');
    });

    it('should handle multiple cleaning options', () => {
      const text = 'TEST String 1234!@#$ 😊';
      const options = {
        lowercase: true,
        removeSpecialChars: true,
        removeNumbers: true,
        removePunctuation: true,
        removeEmojis: true
      };
      expect(cleanText(text, options)).toBe('test string  ');
    });

    it('should return the original text if no options are provided', () => {
      const text = 'Original Text 1234!@#$ 😊';
      expect(cleanText(text, {})).toBe('Original Text 1234!@#$ 😊');
    });

    it('should clean text correctly', () => {
      const text = 'Some text with various Elements 1234!@#$ 😊';
      const options = { lowercase: true, removeSpecialChars: true, removeNumbers: true, removePunctuation: true, removeEmojis: true };
      const cleanedText = cleanText(text, options);
      expect(cleanedText).not.toMatch(/[0-9!@#$%^&*()_+]/);
    });

  });

  describe('truncateTokens', () => {
    it('should truncate text to the specified number of tokens', () => {
      const text = generateTestText();
      const { truncated, cutOff } = truncateTokens(text, 10);
      expect(truncated.split(/\s+/).length).toBeLessThanOrEqual(10);
      // Additional assertions can be made about the `cutOff` part or the complete functionality
    });

    it('should not truncate if text is within the limit', () => {
      const text = 'This is a short text.';
      const { truncated, cutOff } = truncateTokens(text, 10);
      expect(truncated).toBe('This is a short text.');
      expect(cutOff).toBe('');
    });

    it('should handle empty string', () => {
      const text = '';
      const { truncated, cutOff } = truncateTokens(text, 10);
      expect(truncated).toBe('');
      expect(cutOff).toBe('');
    });

    it('should truncate text correctly when text is longer than the limit', () => {
      const text = generateTestText(); // This should generate a long string
      const maxTokens = 50;
      const { truncated, cutOff } = truncateTokens(text, maxTokens);
      expect(truncated.split(/\s+/).length).toBeLessThanOrEqual(maxTokens);
      expect(truncated.length + cutOff.length).toBe(text.length);
    });

    it('should handle cases where maxTokens is zero', () => {
      const text = 'This should be entirely cut off.';
      const { truncated, cutOff } = truncateTokens(text, 0);
      expect(truncated).toBe('');
      expect(cutOff).toBe(text);
    });

  });
});
