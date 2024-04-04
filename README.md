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
  - [JavaScript Functions and Structure](#javascript-functions-and-structure)
  - [Development and Extension](#development-and-extension)
  - [Running the Application](#running-the-application)

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
2. Select a text file from your device. The content of the file will be displayed in the input text area for processing.

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

## JavaScript Functions and Structure

The application's functionality is divided among several JavaScript modules:

- `textUtils.js`: Contains logic for cleaning and truncating text.
- `handlers.js`: Provides functions that interact with the DOM to handle user input and apply text processing.
- `eventBinders.js`: Binds DOM events to handler functions.
- `main.js`: Initializes the application by binding the necessary DOM elements to their respective event handlers on document load.

## Development and Extension

The application is structured modularly, allowing for easy extension and maintenance. Developers can add new text processing features or modify existing ones by updating `textUtils.js` and `handlers.js` accordingly.

## Running the Application

Load the `index.html` file in a web browser to start using the application. Make sure all JavaScript files are correctly linked and accessible in the `js/` directory.
