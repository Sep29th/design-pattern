import { Injectable } from '@nestjs/common';
import { Button } from './button.interface';

@Injectable()
export class WindowsButton implements Button {
  render(): string {
    return 'Rendering Windows Button';
  }
}
