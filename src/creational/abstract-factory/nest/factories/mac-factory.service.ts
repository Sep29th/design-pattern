import { Injectable } from '@nestjs/common';
import { Button } from '../products/button.interface';
import { Checkbox } from '../products/checkbox.interface';
import { MacButton } from '../products/mac-button.service';
import { MacCheckbox } from '../products/mac-checkbox.service';
import { GUIFactory } from './gui-factory.interface';

@Injectable()
export class MacFactory implements GUIFactory {
  constructor(
    private readonly button: MacButton,
    private readonly checkbox: MacCheckbox,
  ) {}

  createButton(): Button {
    return this.button;
  }

  createCheckbox(): Checkbox {
    return this.checkbox;
  }
}
