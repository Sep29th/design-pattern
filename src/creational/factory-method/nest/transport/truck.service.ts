import { Injectable } from '@nestjs/common';
import { Transport } from './transport.interface';

@Injectable()
export class Truck implements Transport {
  deliver(): string {
    return 'Delivering by land in a box truck';
  }
}
