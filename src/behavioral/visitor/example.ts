// src/behavioral/visitor/example.ts

// Visitor interface
interface Visitor {
  visitCircle(circle: Circle): void;
  visitSquare(square: Square): void;
}

// Element interface
interface Shape {
  accept(visitor: Visitor): void;
}

// Concrete Elements
class Circle implements Shape {
  accept(visitor: Visitor): void {
    visitor.visitCircle(this);
  }
}

class Square implements Shape {
  accept(visitor: Visitor): void {
    visitor.visitSquare(this);
  }
}

// Concrete Visitors
class AreaCalculator implements Visitor {
  visitCircle(circle: Circle): void {
    console.log('Calculating area of Circle');
  }
  visitSquare(square: Square): void {
    console.log('Calculating area of Square');
  }
}

class DrawingVisitor implements Visitor {
  visitCircle(circle: Circle): void {
    console.log('Drawing a Circle');
  }
  visitSquare(square: Square): void {
    console.log('Drawing a Square');
  }
}

// Client
function main() {
  const shapes: Shape[] = [new Circle(), new Square()];

  const areaVisitor = new AreaCalculator();
  const drawVisitor = new DrawingVisitor();

  for (const shape of shapes) {
    shape.accept(areaVisitor);
  }

  console.log('---');

  for (const shape of shapes) {
    shape.accept(drawVisitor);
  }
}

main();
