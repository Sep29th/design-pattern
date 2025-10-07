import { Injectable } from '@nestjs/common';
import { HouseBuilder } from './house-builder.interface';
import { House } from '../house';

@Injectable()
export class WoodenHouseBuilder implements HouseBuilder {
  private house: House = new House();

  reset(): void {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.addPart('Wooden Walls');
  }

  buildDoors(): void {
    this.house.addPart('Wooden Doors');
  }

  buildWindows(): void {
    this.house.addPart('Glass Windows');
  }

  getResult(): House {
    return this.house;
  }
}
