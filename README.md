# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). 

## Table of contents

- [Overview](#overview)
  - [Key Features](#key-features)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Need to fix](#need-to-fix)
  - [Useful resources](#useful-resources)

## Overview

This app is a dictionary tool that allows users to look up definitions of words. 

## Key Features

- **Word Definitions:** Quickly find the meanings and definitions of words.
- **Theme Switch:** Choose between a light and dark theme. 
  - If using website for the first time, the theme will be applied automatically based on the user's browser/device settings, and this will be saved locally so the app remembers the theme across sessions.
- **Font Switch:** Choose between 3 custom fonts.
  - It will also be saved locally.

### Links

## My process

### Todo features and fixes

- Some words (**porcelain** for example) have no pronunciation but have the phonetic writing, I need to make so the phonetic writing is rendered even if no audio exists

- Include loading animation when you click an antonym/synonym button

- It is already responsive, but I need to improve the desktop version 

- Handle unkown errors. Only way I found to trigger it is searching a dot '.' 

- Sometimes the underline animation will not start, I think it doesn't happen in production, as the only way to fix it is by changing the css to something random, and then back to the original, it is rare and I have no idea how to trigger the error

### Built with

- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) - For type safety
- [Styled Components](https://styled-components.com/) - For styles
- [Mobile-first workflow](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First) - For better maintainability

### Useful resources

- [Styled Components documentation](https://styled-components.com/docs) - Useful for understanding how to correctly work with styled components
- [Chir.ag](https://chir.ag/projects/name-that-color/#6195ED) - A tool to name colors
- [Nekocalc](https://nekocalc.com/px-to-rem-converter) - A tool to convert pixel unit to rem unit (and vice versa)
- [React typescript cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Useful for understanding typescript better
- [Type JSON](https://transform.tools/json-to-typescript) - Automatically type a JSON object