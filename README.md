# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots-of-my-final-project)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots of my final project

<span>
<img src="./design/desktop-complete.png" height=400>
<img src="./design/mobile-complete.png" height=400>
</span>

### Link

- Live Site URL: [project hosted on Netlify](https://joyful-manatee-b8ed26.netlify.app)

## My process

Started with mobile design first. Created the utility classes (fonts, colors, sizes), followed by the buttons and layout.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

CSS position is difficult, using the position property takes practise and a good foundation which i tried to brute force. Improvements in javascript dom understanding.

```html
<details>
  <summary>
    How many team members can I invite?
    <img src="./images/icon-arrow-down.svg" width="12px" height="8px" />
  </summary>
</details>
```

```css
.pic-container {
  display: flex;
  justify-content: center;
  float: none;
  height: 150px;
  /* border: 1px solid red; */
  position: relative;
}
```

```js
if (this.open) {
  detailList.forEach((detail) => {
    if (detail != this) {
      detail.open = false;
    }
  });
}
```

### Continued development

did not use and understand the position property properly, but finally got something working at the end.

### Useful resources

- [Create a Design System with CSS](https://www.youtube.com/watch?v=lRaL-8qZ0mM) - This helped me for use more complex CSS tools. I really liked this pattern and will use it going forward.
- [CSS Positioning](https://www.w3schools.com/css/css_positioning.asp) - This is an amazing article which helped me finally understand The position Property. I'd recommend it to anyone still learning this concept.
