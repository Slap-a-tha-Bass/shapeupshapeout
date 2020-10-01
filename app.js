let rectangleHeight = document.getElementById('rectangle-height');
let rectangleWidth = document.getElementById('rectangle-width');
let squareSideLength = document.getElementById('square-sidelength');
let circleRadius = document.getElementById('circle-radius');
let triangleBase = document.getElementById('triangle-base');
let canvas = document.getElementById('canvas');
// parent object
class Shape {

    constructor() {
        this.rendor();
        // this.draw();
        this.describe();
    }

    // draw() {

    // }
    describe() {

    }

    rendor() {
        this.div = document.createElement('div');
        canvas.appendChild(this.div);
        // this.div.style.length = '100px';
        // this.div.style.height = '100px';
        // this.div.style.backgroundColor = 'green';
    }

}
// child object
class Rectangle extends Shape {

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    draw() {
        this.height = rectangleHeight.value;
        this.width = rectangleWidth.value;
        this.style.backgroundColor = 'green';
    }

}
// child object
class Square extends Shape {

    constructor(sideLength) {
        super();
    }

}
// child object
class Triangle extends Shape {

    constructor(height) {
        super();
    }

}
// child object
class Circle extends Shape {

    constructor(radius) {
        super();
    }

}

let rectangleBtn = document.getElementById('rectangle-button');
let squareBtn = document.getElementById('square-button');
let circleBtn = document.getElementById('circle-button');
let triangleBtn = document.getElementById('triangle-button');
// rectangle button click
rectangleBtn.addEventListener('click', () => {
    // let newRectangle = new Rectangle();
    new Rectangle();
    // console.log(rectangleHeight.value);
    // console.log(rectangleWidth.value);


});
// square button click
squareBtn.addEventListener('click', () => {
    let newSquare = new Square();
    
});
// circle button click
circleBtn.addEventListener('click', () => {
    let newCircle = new Circle();

});
// triangle button click
triangleBtn.addEventListener('click', () => {
    let newTriangle = new Triangle();
 
});