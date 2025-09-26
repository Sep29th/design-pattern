import { Injectable } from '@nestjs/common';
import { Button } from '../products/button.interface';
import { Checkbox } from '../products/checkbox.interface';
import { WindowsButton } from '../products/windows-button.service';
import { WindowsCheckbox } from '../products/windows-checkbox.service';
import { GUIFactory } from './gui-factory.interface';

@Injectable()
export class WindowsFactory implements GUIFactory {
  constructor(
    private readonly button: WindowsButton,
    private readonly checkbox: WindowsCheckbox,
  ) {}

  createButton(): Button {
    return this.button;
  }

  createCheckbox(): Checkbox {
    return this.checkbox;
  }
}
