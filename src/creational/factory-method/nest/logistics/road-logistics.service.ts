import { Injectable } from '@nestjs/common';
import { Logistics } from './logistics.interface';
import { Transport } from '../transport/transport.interface';
import { Truck } from '../transport/truck.service';

@Injectable()
export class RoadLogistics implements Logistics {
  constructor(private readonly truck: Truck) {}

  createTransport(): Transport {
    return this.truck;
  }
}
