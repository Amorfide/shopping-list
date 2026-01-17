# Dynamic Shopping List (DOM Manipulation)

A dynamic shopping list application built with vanilla JavaScript as part of The Odin Project curriculum.
This project demonstrates core front-end skills such as DOM manipulation, event handling, and dynamic element creation without using any frameworks or libraries.

---

## Project Overview

This project allows users to create and manage a shopping list directly in the browser. Items are added dynamically through user input and can be removed individually without reloading the page.

The focus of this assignment was to strengthen my understanding of how JavaScript interacts with the DOM and how user actions can drive UI changes in real time.

---

## Features

- Add items to a shopping list using a form input
- Dynamically create and append DOM elements
- Remove individual items using a delete button
- Input field clears and refocuses after submission
- No page reloads — all interactions handled with JavaScript

---

## Concepts & Skills Practiced

This project specifically practices:

- DOM selection using querySelector
- Creating elements with document.createElement
- Appending elements dynamically to the DOM
- Handling events with addEventListener
- Preventing default form submission behavior
- Using closures to manage dynamically created elements
- Writing clean, readable, and maintainable JavaScript

All logic is implemented using plain JavaScript (ES6+).

---

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Git & GitHub

---

## Project Structure

index.html  
js-file.js  
README.md  

---

## How It Works

1. The user enters an item into the input field.
2. Clicking the Add Item button:
   - Prevents the default form submission
   - Reads the current input value
   - Creates a new list item containing the item text and a delete button
3. Each delete button has its own event listener that removes its parent list item.
4. After adding an item:
   - The input field is cleared
   - Focus is returned to the input for faster entry

