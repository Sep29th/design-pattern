import { Module } from '@nestjs/common';
import { WoodenHouseBuilder } from './builders/wooden-house-builder.service';
import { StoneHouseBuilder } from './builders/stone-house-builder.service';
import { Director } from './director.service';

@Module({
  providers: [WoodenHouseBuilder, StoneHouseBuilder, Director],
  exports: [WoodenHouseBuilder, StoneHouseBuilder, Director],
})
export class BuilderModule {}
