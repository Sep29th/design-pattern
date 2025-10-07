import { NestFactory } from '@nestjs/core';
import { BuilderModule } from './builder.module';
import { WoodenHouseBuilder } from './builders/wooden-house-builder.service';
import { StoneHouseBuilder } from './builders/stone-house-builder.service';
import { Director } from './director.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(BuilderModule);

  const director = app.get(Director);
  const woodenBuilder = app.get(WoodenHouseBuilder);
  const stoneBuilder = app.get(StoneHouseBuilder);

  director.constructBasicHouse(woodenBuilder);
  const woodenHouse = woodenBuilder.getResult();
  console.log(woodenHouse.showParts());

  director.constructBasicHouse(stoneBuilder);
  const stoneHouse = stoneBuilder.getResult();
  console.log(stoneHouse.showParts());

  await app.close();
}
bootstrap();
