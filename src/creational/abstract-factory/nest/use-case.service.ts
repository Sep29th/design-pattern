import { Injectable } from '@nestjs/common';
import { InjectGUIFactory } from './decorators/inject-gui-factory.decorator';
import { type GUIFactory } from './factories/gui-factory.interface';

@Injectable()
export class UseCaseService {
  constructor(
    @InjectGUIFactory('WIN') private readonly guiFactory: GUIFactory,
  ) {}
}
