import { NestFactory } from '@nestjs/core';
import { AbstractFactoryModule } from './abstract-factory.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AbstractFactoryModule);

  const windowsFactory = app.get('WIN');
  const macFactory = app.get('MAC');

  console.log('--- NestJS Abstract Factory Example ---');
  console.log(windowsFactory.createButton().render());
  console.log(windowsFactory.createCheckbox().render());
  console.log(macFactory.createButton().render());
  console.log(macFactory.createCheckbox().render());

  await app.close();
}
void bootstrap();
