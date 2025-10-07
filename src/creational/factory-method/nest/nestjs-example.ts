import { NestFactory } from '@nestjs/core';
import { FactoryMethodModule } from './factory-method.module';
import { RoadLogistics } from './logistics/road-logistics.service';
import { SeaLogistics } from './logistics/sea-logistics.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(FactoryMethodModule);

  const road = app.get(RoadLogistics);
  const sea = app.get(SeaLogistics);

  console.log('--- NestJS Factory Method Example ---');
  console.log(road.createTransport().deliver());
  console.log(sea.createTransport().deliver());

  await app.close();
}
bootstrap();
