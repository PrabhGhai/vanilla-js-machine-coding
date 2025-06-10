# Character Limit Textarea

A simple web-based character-limited textarea that provides real-time feedback on character usage and remaining characters. The maximum character limit is set to 50.

## Features

- Textarea input limited to 50 characters
- Real-time character count display
- Remaining characters shown dynamically
- Alert when the character limit is reached
- Clean and responsive UI with basic styling

## Demo

![bandicam 2025-06-10 23-03-40-782](https://github.com/user-attachments/assets/6f2ccada-7388-48f0-999f-1ec744edc0f9)

![bandicam 2025-06-10 23-03-51-074](https://github.com/user-attachments/assets/a0f93f61-6dca-4f41-8e57-0c7c5369b15c)

## How It Works

- The textarea listens for input events.
- As the user types, the script calculates the number of characters typed and how many are left.
- If the user tries to type more than 50 characters, an alert is shown and no more input is accepted.

## Files

### `index.html`

Basic HTML structure with a `<textarea>`, and two `<div>`s to show character count and characters left.

### `index.js`

JavaScript that handles user input and updates the character count dynamically.
