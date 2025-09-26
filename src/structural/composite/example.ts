// src/structural/composite/example.ts

// Component
interface Graphic {
  draw(): void;
}

// Leaf
class Circle implements Graphic {
  draw(): void {
    console.log('Drawing a Circle');
  }
}

class Square implements Graphic {
  draw(): void {
    console.log('Drawing a Square');
  }
}

// Composite
class CompoundGraphic implements Graphic {
  private children: Graphic[] = [];

  add(child: Graphic): void {
    this.children.push(child);
  }

  remove(child: Graphic): void {
    this.children = this.children.filter((c) => c !== child);
  }

  draw(): void {
    console.log('Drawing CompoundGraphic:');
    for (const child of this.children) {
      child.draw();
    }
  }
}

// Client
function main() {
  const circle1 = new Circle();
  const circle2 = new Circle();
  const square = new Square();

  const compound = new CompoundGraphic();
  compound.add(circle1);
  compound.add(circle2);
  compound.add(square);

  compound.draw();
}

main();
