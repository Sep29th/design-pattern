import { Injectable } from '@nestjs/common';
import { Checkbox } from './checkbox.interface';

@Injectable()
export class WindowsCheckbox implements Checkbox {
  render(): string {
    return 'Rendering Windows Checkbox';
  }
}
