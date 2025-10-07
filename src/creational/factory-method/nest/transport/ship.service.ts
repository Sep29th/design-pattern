import { Injectable } from '@nestjs/common';
import { Transport } from './transport.interface';

@Injectable()
export class Ship implements Transport {
  deliver(): string {
    return 'Delivering by sea in a container ship';
  }
}
