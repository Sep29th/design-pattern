import { Injectable } from '@nestjs/common';
import { Checkbox } from './checkbox.interface';

@Injectable()
export class MacCheckbox implements Checkbox {
  render(): string {
    return 'Rendering Mac Checkbox';
  }
}
