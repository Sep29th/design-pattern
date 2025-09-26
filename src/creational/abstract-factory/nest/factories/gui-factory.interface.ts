import { Button } from '../products/button.interface';
import { Checkbox } from '../products/checkbox.interface';

export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
