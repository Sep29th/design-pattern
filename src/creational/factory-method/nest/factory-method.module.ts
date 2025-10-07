import { Module } from '@nestjs/common';
import { Truck } from './transport/truck.service';
import { Ship } from './transport/ship.service';
import { RoadLogistics } from './logistics/road-logistics.service';
import { SeaLogistics } from './logistics/sea-logistics.service';

@Module({
  providers: [Truck, Ship, RoadLogistics, SeaLogistics],
  exports: [RoadLogistics, SeaLogistics],
})
export class FactoryMethodModule {}
