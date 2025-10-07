import { Injectable } from '@nestjs/common';
import { HouseBuilder } from './house-builder.interface';
import { House } from '../house';

@Injectable()
export class StoneHouseBuilder implements HouseBuilder {
  private house: House = new House();

  reset(): void {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.addPart('Stone Walls');
  }

  buildDoors(): void {
    this.house.addPart('Metal Doors');
  }

  buildWindows(): void {
    this.house.addPart('Small Windows');
  }

  getResult(): House {
    return this.house;
  }
}
