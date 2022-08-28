# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Screenshot%202022-08-28%20at%2017-11-04%20Frontend%20Mentor%20Interactive%20rating%20component.png)
![](./images/Screenshot%202022-08-28%20at%2017-11-16%20Frontend%20Mentor%20Interactive%20rating%20component.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

When I had started this project I started with 5 normal buttons but when I got to the implementing javascript I had trouble making it so that I could only select one button at a time. I then started to wonder if I could use a radio button and I just so happens that I could. So I then learned how to some cs to make it so that the radio buttons appear like normal buttons

```css
.radio_input {
  display: none;
}
.radio_label {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282e34;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  color: hsl(217, 12%, 63%);
  font-size: 15px;
  border: none;
}
.radio_label:hover {
  color: white;
  background-color: hsl(25, 97%, 53%);
  cursor: pointer;
}
.radio_input:checked + .radio_label {
  color: white;
  background-color: grey;
}
```

The last style was what I found the most tricky. Afterwards I went onto the javascript, the only trouble I had with this is obtaining the form data after the submition. I then learned of FormData(), it only took me a few minutes to find various methods to obtain the values.

### Continued development

After going through this challenge I need to continue to learn more about form data.

### Useful resources

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData) - This helped me with finding ways to obtain form data.

## Author

- Frontend Mentor - [@Val7997](https://www.frontendmentor.io/profile/Val7997)
