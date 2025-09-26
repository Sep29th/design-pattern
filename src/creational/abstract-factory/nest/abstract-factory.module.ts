import { Module } from '@nestjs/common';
import { WindowsButton } from './products/windows-button.service';
import { WindowsCheckbox } from './products/windows-checkbox.service';
import { MacButton } from './products/mac-button.service';
import { MacCheckbox } from './products/mac-checkbox.service';
import { WindowsFactory } from './factories/windows-factory.service';
import { MacFactory } from './factories/mac-factory.service';

@Module({
  providers: [
    WindowsButton,
    WindowsCheckbox,
    MacButton,
    MacCheckbox,
    WindowsFactory,
    MacFactory,
  ],
  exports: [WindowsFactory, MacFactory],
})
export class AbstractFactoryModule {}
