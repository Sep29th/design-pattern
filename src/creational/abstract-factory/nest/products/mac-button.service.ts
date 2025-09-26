import { Injectable } from '@nestjs/common';
import { Button } from './button.interface';

@Injectable()
export class MacButton implements Button {
  render(): string {
    return 'Rendering Mac Button';
  }
}
