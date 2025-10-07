import { Inject } from '@nestjs/common';
import { AbstractFactoryModuleProvide } from '../abstract-factory.module';

export const InjectGUIFactory = (
  type: keyof typeof AbstractFactoryModuleProvide,
) => Inject(AbstractFactoryModuleProvide[type]);
