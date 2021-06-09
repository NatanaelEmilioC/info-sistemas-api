import { VeiculoService } from './shared/veiculo.service';
import { VeiculosController } from './veiculos.controller';
import { Module } from '@nestjs/common';

import { VeiculoSchema } from './schemas/veiculo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Veiculo', schema: VeiculoSchema }]),
  ],
  controllers: [VeiculosController],
  providers: [VeiculoService],
})
export class VeiculosModule {}
