// inputs
let rectangleHeight = document.getElementById('rectangle-height');
let rectangleWidth = document.getElementById('rectangle-width');
let squareSideLength = document.getElementById('square-sidelength');
let circleRadius = document.getElementById('circle-radius');
let triangleBase = document.getElementById('triangle-base');
// canvas
let canvas = document.getElementById('canvas');
// buttons
let rectangleBtn = document.getElementById('rectangle-button');
let squareBtn = document.getElementById('square-button');
let circleBtn = document.getElementById('circle-button');
let triangleBtn = document.getElementById('triangle-button');
// parameters
let shapeName = document.getElementById('shape-name');
let widthWidth = document.getElementById('width');
let heightHeight = document.getElementById('height');
let radiusRadius = document.getElementById('radius');
let area = document.getElementById('area');
let perimeter = document.getElementById('perimeter');

// parent object
class Shape {

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.render();
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            this.undescribe();
        });

    }

    render() {
        this.div = document.createElement('div');
        canvas.appendChild(this.div);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.y = `${this.randomVal(this.height, 600)}px`;
        this.div.style.top = this.y;
        this.x = `${this.randomVal(this.width, 600)}px`
        this.div.style.left = this.x;
        this.div.style.position = 'absolute';
    }

    randomVal(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
    undescribe(){
        widthWidth.value = '';
        heightHeight.value = '';
        radiusRadius.value = '';
        area.value = '';
        perimeter.value = '';
        shapeName.value = '';
        shapeName.style.backgroundColor = 'white';
    }
}

// child object
class Rectangle extends Shape {

    constructor(height, width) {
        super(height, width);
        this.div.style.backgroundColor = 'rgba(30, 224, 30, 0.6)';
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }

    describe() {
        widthWidth.value = `${this.width}px`;
        heightHeight.value = `${this.height}px`;
        radiusRadius.value = 'N/A';
        area.value = this.width * this.height;
        perimeter.value = this.width * 2 + this.height * 2;
        shapeName.value = 'Rectangle';
        shapeName.style.backgroundColor = 'rgba(30, 224, 30, 0.6)';
    }

}

// child object
class Square extends Shape {

    constructor(sideLength) {
        super(sideLength, sideLength);
        this.div.style.backgroundColor = 'rgba(218, 22, 22, 0.6)';
        this.div.addEventListener('click', () => {
            this.describe();
        });

    }

    describe() {
        widthWidth.value = `${this.width}px`;
        heightHeight.value = `${this.height}px`;
        radiusRadius.value = 'N/A';
        area.value = this.height * this.width;
        perimeter.value = this.height * 2 + this.width * 2;
        shapeName.value = 'Square';
        shapeName.style.backgroundColor = 'rgba(218, 22, 22, 0.6)';
    }

}
// child object
class Triangle extends Shape {

    constructor(height) {
        super(height, height);
        this.div.style.borderBottom = `${this.height}px solid rgba(214, 214, 9, 0.6`;
        this.div.style.borderRight = `${this.width}px solid transparent`;
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        widthWidth.value = this.height;
        heightHeight.value = this.width;
        radiusRadius.value = 'N/A';
        area.value = (this.height / 2) * this.width;
        perimeter.value = 2 * this.height + Math.sqrt(2) * this.width;
        shapeName.value = 'Triangle';
        shapeName.style.backgroundColor = 'rgba(214, 214, 9, 0.6';
    }
}
// child object
class Circle extends Shape {

    constructor(radius) {
        super(radius * 2, radius * 2);
        this.div.style.backgroundColor = 'rgba(71, 12, 233, 0.6)';
        this.div.style.borderRadius = '50%';
        this.div.addEventListener('click', () => {
            this.describe();
        });
    }
    describe() {
        widthWidth.value = `N/A`;
        heightHeight.value = `N/A`;
        radiusRadius.value = this.height;
        area.value = Math.pow(this.height, 2) + 3.14;
        perimeter.value = this.height * 2 * 3.14;
        shapeName.value = 'Circle';
        shapeName.style.backgroundColor = 'rgba(71, 12, 233, 0.6)';
    }
}


// rectangle button click
rectangleBtn.addEventListener('click', () => {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
    if (rectangleHeight.value > 600 || rectangleWidth.value > 600) {
        alert ('Too many pixels, dumby!');
        window.location.reload();
    }
    rectangleHeight.value = '';
    rectangleWidth.value = '';
});

// square button click
squareBtn.addEventListener('click', () => {
    new Square(squareSideLength.value, squareSideLength.value);
    if (squareSideLength.value > 600) {
        alert ('Too many pixels, dumby!');
        window.location.reload();
    }
    squareSideLength.value = '';
});
// circle button click
circleBtn.addEventListener('click', () => {
    new Circle(circleRadius.value);
    if (circleRadius.value > 300) {
        alert ('Too many pixels, dumby!');
        window.location.reload();
    }
    circleRadius.value = '';
});
// triangle button click
triangleBtn.addEventListener('click', () => {
    new Triangle(triangleBase.value);
    if (triangleBase.value > 600) {
        alert ('Too many pixels, dumby!');
        window.location.reload();
    }
    triangleBase.value = '';
});