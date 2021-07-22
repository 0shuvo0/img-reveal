# Image Reveal
Image reveal effect with JavaScript and CSS

![Preview](preview.png)
[View Demo](https://github.com/0shuvo0/img-reveal/blob/main/preview.mp4?raw=true)

## Usage
1. download and link [reveal.css](https://github.com/0shuvo0/img-reveal/blob/main/reveal.css) and [reveal.js](https://github.com/0shuvo0/img-reveal/blob/main/reveal.js) in you project
2. Create an element for reveal effect(img-reveal class is required for styles)
```html
<div class="img-reveal" id="reveal1"></div>
```
3. Optionally you can use some css
```css
#reveal1{
    height: 600px;
    width: 400px;
}
```
4. Use Javascript to create revealer
```js
// we use createRevealer function to create a revealer, it returns a function so we are capturing it in a variable.
let reveal1 = createRevealer({
    el: "#reveal1", // Selector
    dotCount: 20, // Number of dots/boxes in each row and colum, using 20 will give 20 * 20 = 400 boxes(Optional, default: 10)
    maxOffset: 10, // How far the dots should come from at max(Optional, default: 100)
    style: "diagonal" // Reveal direction. Can be horizontal, vertical or diagonal(Optional, default: diagonal)
})

//Now whenever we want the reveal to occure we just have to call the function with the path to image we want to reveal as an arguement
reveal1("img/1.jpg")
```



## Example: creating an image slider
```html
<link rel="stylesheet" href="reveal.css">

<div class="img-reveal" id="reveal1">
    <img src="img/1.jpg"><!-- Optional default image -->
</div>
<button id="prev">Previous</button>
<button id="next">Next</button>

<script src="reveal.js"></script>
<script>
const imgs = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"
]
let counter = 0
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let reveal1 = createRevealer({
    el: "#reveal1"
})

prev.addEventListener("click" () => {
    counter--
    if(counter < 0) counter = imgs.length - 1
    reveal1(imgs[counter])
})

next.addEventListener("click" () => {
    counter++
    if(counter > imgs.length - 1) counter = 0
    reveal1(imgs[counter])
})
</script>
```