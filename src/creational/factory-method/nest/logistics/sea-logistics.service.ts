import { Injectable } from '@nestjs/common';
import { Logistics } from './logistics.interface';
import { Transport } from '../transport/transport.interface';
import { Ship } from '../transport/ship.service';

@Injectable()
export class SeaLogistics implements Logistics {
  constructor(private readonly ship: Ship) {}

  createTransport(): Transport {
    return this.ship;
  }
}
