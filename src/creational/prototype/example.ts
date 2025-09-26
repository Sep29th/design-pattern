// src/creational/prototype/example.ts

// Prototype interface
interface Prototype<T> {
  clone(): T;
}

// Concrete Prototype 1
class Circle implements Prototype<Circle> {
  public radius: number;
  public color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  clone(): Circle {
    return new Circle(this.radius, this.color);
  }

  draw(): void {
    console.log(
      `Drawing Circle with radius ${this.radius} and color ${this.color}`,
    );
  }
}

// Concrete Prototype 2
class Rectangle implements Prototype<Rectangle> {
  public width: number;
  public height: number;
  public color: string;

  constructor(width: number, height: number, color: string) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  clone(): Rectangle {
    return new Rectangle(this.width, this.height, this.color);
  }

  draw(): void {
    console.log(
      `Drawing Rectangle ${this.width}x${this.height} with color ${this.color}`,
    );
  }
}

// Client
function main() {
  const circle1 = new Circle(10, 'red');
  const circle2 = circle1.clone();

  circle1.draw();
  circle2.draw();

  console.log('circle1 === circle2 ?', circle1 === circle2); // false
  console.log(
    'circle1 and circle2 have same properties:',
    circle1.radius === circle2.radius && circle1.color === circle2.color,
  );

  const rect1 = new Rectangle(20, 10, 'blue');
  const rect2 = rect1.clone();

  rect1.draw();
  rect2.draw();
}

main();
