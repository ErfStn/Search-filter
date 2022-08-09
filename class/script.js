//encapsulation
class Rectangle {
    //property
    constructor(x,y,color) {
        this.x = x+"px";
        this.y = y+"px";
        this.color = color;
    }
    //methods
    getArea(){
        console.log(`The rectangle is ${this.color}`);
    }
}

const rectangle1 = new Rectangle(100, 200,"red")

console.log(rectangle1);

const body = document.querySelector(".body") 
const div = document.createElement("div");
div.style.width = rectangle1.x;
div.style.height = rectangle1.y;
div.style.backgroundColor = rectangle1.color;

body.appendChild(div);


//inherirance => daryaft etelaat az pedar 
class Circle extends Rectangle {
    constructor(x,y,radius,color) {
        super(x, y, color);
        this.radius = radius;
    }
    getArea() {
        super.getArea() //=> estefade az joft method
        console.log(`The cirle is ${this.color}`);
    }
}
const circle1 = new Circle(10,10,50,"blue")

//polymorphism overide kardan on methodi ke to class parent ,age ndashte bashe az pedar migire 
