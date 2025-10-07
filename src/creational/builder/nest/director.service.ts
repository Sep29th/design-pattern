import { Injectable } from '@nestjs/common';
import { HouseBuilder } from './builders/house-builder.interface';

@Injectable()
export class Director {
  constructBasicHouse(builder: HouseBuilder): void {
    builder.reset();
    builder.buildWalls();
    builder.buildDoors();
    builder.buildWindows();
  }
}
