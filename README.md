# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot


#### Desktop design

<img src="https://github.com/luizarilo/rating-component/blob/master/images/desktop_design.png" alt="Desktop design"/>

#### Desktop design - Thank You

<img src="https://github.com/luizarilo/rating-component/blob/master/images/desktop_thanks.png" alt="Thanks Screen"/>



### Links

- Solution URL: [FrontEnd Mentor Solution](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub/rating-component-with-a-flexbox-Uo3Ga2GiUE)
- Live Site URL: [Netlify Site](https://brilliant-cendol-e3c8cd.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

In this project I learned how to custom a radio input

```css
.input__radio{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 50px;
    border-radius: 50px;
    height: 50px;
    background-color: #262F38;
    box-sizing: border-box;
    float: left;
    position: relative;
    cursor: pointer;
    transition: 0.4s;
}

```

And how to make a modal 

```html
div class="modal__box">
        <div id="myModal" class="modal">
          <div class="modal__content">
            <span class="close">&times;</span>
            <img class = "modal__image" src = "images/illustration-thank-you.svg" class = "moda__image">
            <div class = "text__rating">
              <p>You selected <span id = "rating__select"></span> out of 5</p>
            </div>
            <h1 class = "rating__title">Thank you!</h1>
            <h4 class = "rating__subtitle">
              We appreciate you taking the time to give a rating. If you ever need more support, 
              don’t hesitate to get in touch!
            </h3>
          </div>
        </div>
```



### Useful resources

- [How to make a modal](https://www.w3schools.com/howto/howto_css_modals.asp) - This link helped me in the thank-you screen.
- [JavaScript Radio](https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/) - This is an amazing site which helped me an understand how to use Js to checked the radio inputs value.


## Author

- Frontend Mentor - [@luizarilo](https://www.frontendmentor.io/profile/luizarilo)
- [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-arilo)


