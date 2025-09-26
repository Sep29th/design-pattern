// src/structural/flyweight/example.ts

// Flyweight
class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string,
  ) {}

  draw(x: number, y: number): void {
    console.log(
      `Drawing ${this.name} tree at (${x}, ${y}) with color ${this.color} and texture ${this.texture}`,
    );
  }
}

// Flyweight Factory
class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}_${color}_${texture}`;
    if (!this.treeTypes.has(key)) {
      console.log(`Creating new TreeType: ${key}`);
      this.treeTypes.set(key, new TreeType(name, color, texture));
    }
    return this.treeTypes.get(key)!;
  }
}

// Context
class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType,
  ) {}

  draw(): void {
    this.type.draw(this.x, this.y);
  }
}

// Client
class Forest {
  private trees: Tree[] = [];

  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string,
  ): void {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(): void {
    for (const tree of this.trees) {
      tree.draw();
    }
  }
}

function main() {
  const forest = new Forest();

  forest.plantTree(1, 2, 'Oak', 'Green', 'Rough');
  forest.plantTree(5, 7, 'Oak', 'Green', 'Rough');
  forest.plantTree(3, 4, 'Pine', 'Dark Green', 'Smooth');

  forest.draw();
}

main();
