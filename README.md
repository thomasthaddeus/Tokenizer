# Tokenizer / Text Truncator with File Upload

- [Tokenizer / Text Truncator with File Upload](#tokenizer--text-truncator-with-file-upload)
  - [Overview](#overview)
  - [Features](#features)
  - [Usage](#usage)
    - [Setting the Token Limit](#setting-the-token-limit)
    - [Uploading a File](#uploading-a-file)
    - [Cleaning Text](#cleaning-text)
    - [Truncating Text](#truncating-text)
    - [Viewing Cut Off Text](#viewing-cut-off-text)
  - [CSS Styles](#css-styles)
  - [JavaScript Functions](#javascript-functions)

## Overview

This application provides a user-friendly interface for text manipulation, focusing on truncating text and removing unnecessary elements like special characters, numbers, punctuation, and emojis. Users can input text directly, paste large text blocks, or upload text files for processing.

## Features

- **Token Limit:** Set a maximum token limit to truncate the text accordingly. Default limit is 7000 tokens.
- **File Upload:** Supports uploading text files for easy and efficient text processing.
- **Cleaning Options:** Includes checkboxes to customize text cleaning by converting to lowercase, removing special characters, numbers, punctuation, and emojis.

## Usage

### Setting the Token Limit

1. Enter a number in the "Max tokens" field to set the limit of tokens.
2. If no number is specified, the default limit is 7000 tokens.

### Uploading a File

1. Click on the "Choose File" button in the sidebar.
2. Select a text file from your device.

### Cleaning Text

Select the cleaning options you wish to apply:

- Convert to Lowercase
- Remove Special Characters
- Remove Numbers
- Remove Punctuation
- Remove Emojis

### Truncating Text

1. After setting the token limit or uploading a file, click the "Truncate Text" button.
2. The processed text will appear in the "Truncated Text" section.

### Viewing Cut Off Text

The text exceeding the set token limit will be displayed in the "Text Cut Off" section.

## CSS Styles

The CSS file `styles.css` defines the visual aspects of the application, including layout, colors, and typography, ensuring a clear and accessible user interface.

## JavaScript Functions

The JavaScript file `index.js` contains functions to handle file upload, text cleaning, and text truncation.

- `cleanText(text)`: Cleans the text based on selected options.
- `truncateTokens(text, maxTokens)`: Truncates the text to the specified number of tokens.
- Event listeners are used for interactive elements like buttons and file input.
