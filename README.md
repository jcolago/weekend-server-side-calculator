# Server-side Calculator

## Description

A basic server-side calulator. This calculator will take in 2 numbers and run the equasion based on the operator chosen. 

# Usage
1. Enter the numbers for your equasion into the input fields.
2. Click the operator you would like to use.
3. Click the equals button to run the equasion.
4. The result will be shown below the calculator and the equasion will be added to the history section.

# Built With

Front End:
HTML
CSS
JavaScript
jQuery

Back end:
Express
Node.js
npm

# To-Do
Below is my to-do list for this project:
- NPM
    - [x] Install NPM
    - [x] Init NPM

- Files
    -[x] Create index.html
    -[x] Create client.js
    -[x] Create jquery.js
    -[x] Create style.css
    -[x] Create server.js
    -[x] Create modules.js

- HTML
    -[x] Link jquery.js, style.css, and client.js to html file
    -[x] Make 2 number inputs
    -[x] Make buttons for operators
    -[x] Submit button (=)
    -[x] Button to clear all inputs (C)
    -[x] Section for history

- Client.js
    -[x] Take in inputs create an object
    -[x] Click listeners and events for buttons
    -[x] Send to server via POST
    -[x] GET request to get the solution back
    -[x] Append the history after every problem

- Server.js
    -[x] Connect server/express
    -[x] Logic should be able to complete addition, subtraction, multiplication, and division.
    -[x] Send back ok when done
    -[x] GET request to get problem history
    -[x] GET request tested in POSTMAN
    -[x] POST request for the logic
    -[x] POST request tested in POSTMAN
    