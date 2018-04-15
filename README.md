# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Introduction to the game](#introduction-to-the-game)
* [Usage](#usage)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Introduction to the game
  The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

  Each turn:

  - The player flips one card over to reveal its underlying symbol.
  - The player then turns over a second card, trying to find the corresponding card with the same symbol.
  - If the cards match, both cards stay flipped over.
  - If the cards do not match, both cards are flipped face down.
  - The game ends once all cards have been correctly matched.

  You can play the game from [Here](https://morojalh.github.io/fend-project-memory-game-master/).

## Usage

- **jQuery**:
  Is a javaScript library. To setup, your code with jQuery library put this code in the `<head>` of HTML page.
  ```
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  ```
  [Learn More](https://www.w3schools.com/jquery/default.asp)

- **animate.css**:
  Is is a bunch of cool, fun, and cross-browser animations for you to use in your projects. To setup, your code with animate.css library put this code in the `<head>` of HTML page.
  ```
  <script src="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></script>
  ```
  [Learn More](https://daneden.github.io/animate.css/)
- **Google Fonts API**:
  Setup your code with Google Fonts API. put this code in the `<head>` of HTML page.
  ```
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name">
  ```
  replace `Font+Name` with the font you want form haer [Google Fonts](https://fonts.google.com)

  [Learn More](https://developers.google.com/fonts/docs/getting_started#overview)
