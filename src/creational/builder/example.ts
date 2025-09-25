// src/creational/builder/example.ts

// Product
class House {
  private walls: string[] = [];
  private roof: string = '';
  private doors: string[] = [];
  private windows: string[] = [];

  public addWall(wall: string): void {
    this.walls.push(wall);
  }

  public setRoof(roof: string): void {
    this.roof = roof;
  }

  public addDoor(door: string): void {
    this.doors.push(door);
  }

  public addWindow(window: string): void {
    this.windows.push(window);
  }

  public show(): void {
    console.log('House built with:');
    console.log(`- Walls: ${this.walls.join(', ')}`);
    console.log(`- Roof: ${this.roof}`);
    console.log(`- Doors: ${this.doors.join(', ')}`);
    console.log(`- Windows: ${this.windows.join(', ')}`);
  }
}

// Builder interface
interface HouseBuilder {
  buildWalls(): void;
  buildRoof(): void;
  buildDoors(): void;
  buildWindows(): void;
  getResult(): House;
}

// Concrete Builder 1
class WoodenHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.addWall('Wooden Wall');
  }

  buildRoof(): void {
    this.house.setRoof('Wooden Roof');
  }

  buildDoors(): void {
    this.house.addDoor('Wooden Door');
  }

  buildWindows(): void {
    this.house.addWindow('Wooden Window');
  }

  getResult(): House {
    return this.house;
  }
}

// Concrete Builder 2
class StoneHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.addWall('Stone Wall');
  }

  buildRoof(): void {
    this.house.setRoof('Stone Roof');
  }

  buildDoors(): void {
    this.house.addDoor('Stone Door');
  }

  buildWindows(): void {
    this.house.addWindow('Glass Window');
  }

  getResult(): House {
    return this.house;
  }
}

// Director
class Director {
  private builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  constructSimpleHouse(): void {
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoors();
    this.builder.buildWindows();
  }
}

// Client
function main() {
  const woodenBuilder = new WoodenHouseBuilder();
  const director1 = new Director(woodenBuilder);
  director1.constructSimpleHouse();
  const woodenHouse = woodenBuilder.getResult();
  woodenHouse.show();

  console.log('-----');

  const stoneBuilder = new StoneHouseBuilder();
  const director2 = new Director(stoneBuilder);
  director2.constructSimpleHouse();
  const stoneHouse = stoneBuilder.getResult();
  stoneHouse.show();
}

main();
