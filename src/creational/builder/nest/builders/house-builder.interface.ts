import { House } from '../house';

export interface HouseBuilder {
  reset(): void;
  buildWalls(): void;
  buildDoors(): void;
  buildWindows(): void;
  getResult(): House;
}
