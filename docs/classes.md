To update your HTML to use Bootstrap 5 and align with its class structure, you need to include the Bootstrap 5 CSS in your `<head>` section and possibly adjust the class names used in your HTML to match Bootstrap's styling conventions.

1. **Include Bootstrap 5 CSS:**
   Replace your custom CSS link with Bootstrap's CSS if you want to fully use Bootstrap styles, or add it additionally if you want to use both.

   ```html
   <head>
     <title>Text Truncator with File Upload</title>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
     <link rel="stylesheet" type="text/css" href="css/styles.css" />
   </head>
   ```

2. **Adjust HTML with Bootstrap 5 classes:**
   Without changing your layout logic, here's how you might adjust the classes to fit into Bootstrap's system. I'm not changing class names fundamentally but will list them out to consider Bootstrap components' styling where applicable.

Here’s your updated HTML structure with consideration for Bootstrap 5 classes:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Text Truncator with File Upload</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css" />
</head>

<body>
  <div class="container">
    <div class="sidebar bg-dark text-white">
      <h3>Token Limit</h3>
      <input type="number" id="maxTokens" class="form-control" placeholder="Max tokens (default 7000)" />
      <input type="file" id="fileInput" class="form-control" />
      <hr class="separator" />
      <h3>Cleaning Options</h3>
      <div class="form-check">
        <input type="checkbox" id="lowercase" class="form-check-input">
        <label for="lowercase" class="form-check-label">Convert to Lowercase</label>
      </div>
      <div class="form-check">
        <input type="checkbox" id="removeSpecialChars" class="form-check-input">
        <label for="removeSpecialChars" class="form-check-label">Remove Special Characters</label>
      </div>
      <div class="form-check">
        <input type="checkbox" id="removeNumbers" class="form-check-input">
        <label for="removeNumbers" class="form-check-label">Remove Numbers</label>
      </div>
      <div class="form-check">
        <input type="checkbox" id="removePunctuation" class="form-check-input">
        <label for="removePunctuation" class="form-check-label">Remove Punctuation</label>
      </div>
      <div class="form-check">
        <input type="checkbox" id="removeEmojis" class="form-check-input">
        <label for="removeEmojis" class="form-check-label">Remove Emojis</label>
      </div>
      <hr class="separator" />
      <div class="button-container">
        <button id="cleanButton" class="btn btn-primary">Clean Text</button>
        <button id="truncateButton" class="btn btn-secondary">Truncate Text</button>
      </div>
    </div>
    <div class="main-content">
      <h2>Text Truncator with File Upload</h2>

      <div class="text-areas d-flex">
        <div class="input-area flex-grow-1 me-2">
          <textarea id="inputText" class="form-control" rows="10" placeholder="Or enter text here..."></textarea>
        </div>
        <div class="output-area flex-grow-1">
          <details>
            <summary>Truncated Text</summary>
            <textarea id="outputText" class="form-control" rows="10" readonly></textarea>
          </details>
        </div>
      </div>

      <div class="cut-off-area">
        <details>
          <summary>Text Cut Off</summary>
          <textarea id="cutOffText" class="form-control" rows="10" readonly></textarea>
        </details>
      </div>
    </div>
  </div>
  <script type="module" src="js/main.js"></script>
</body>

</html>
```

### List of Classes Used in the Document:

- container
- sidebar
- bg-dark
- text-white
- form-control
- separator (custom, ensure it’s styled in your CSS)
- form-check
- form-check-input
- form-check-label
- button-container
- btn
- btn-primary
- btn-secondary
- main-content
- text-areas
- d-flex
- input-area
- flex-grow-1
- me-2 (margin-end)
- output-area
- cut-off-area

These classes include both Bootstrap's utilities (like `bg-dark`, `text-white`, `btn`, `form-control`) and your custom classes (like `separator`, `button-container`). Ensure your custom styles don’t conflict with Bootstrap’s styles, and adjust where necessary.
