import { NestFactory } from '@nestjs/core';
import { AbstractFactoryModule } from './abstract-factory.module';
import { WindowsFactory } from './factories/windows-factory.service';
import { MacFactory } from './factories/mac-factory.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AbstractFactoryModule);

  const windowsFactory = app.get(WindowsFactory);
  const macFactory = app.get(MacFactory);

  console.log('--- NestJS Abstract Factory Example ---');
  console.log(windowsFactory.createButton().render());
  console.log(windowsFactory.createCheckbox().render());
  console.log(macFactory.createButton().render());
  console.log(macFactory.createCheckbox().render());

  await app.close();
}
void bootstrap();
