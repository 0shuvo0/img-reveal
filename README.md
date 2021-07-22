# Image Reveal
Image reveal effect with JavaScript and CSS

[View Demo](https://github.com/0shuvo0/img-reveal/blob/main/preview.mp4?raw=true)

## Usage
1. download and link [reveal.css](https://github.com/0shuvo0/img-reveal/blob/main/reveal.css) and [reveal.js](https://github.com/0shuvo0/img-reveal/blob/main/reveal.js) in you project
2. Create an element for reveal effect(img-reveal classed is required for styles)
```html
<div class="img-reveal" id="reveal1"></div>
```
4. Optionally you can use some css
```css
#reveal1{
    height: 600px;
    width: 400px;
}
```
3. Use Javascript to create revealer
```js
//we use createRevealer function to create a revealer, it returns a function so we are capturing it in a variable.
let reveal1 = createRevealer({
    el: "#reveal1", //Selector
    dotCount: 20, // NUmber of dots/boxes in each row and colum using 20 will give 20 * 20 = 400 boxes(Optional, default: 10)
    maxOffset: 10 // How far the dots should come from at max(Optional, default: 100)
})

//Now when ever we want the reveal to occure we just have to call the function
reveal1()
```