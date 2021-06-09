import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeiculosModule } from './veiculos/veiculos.module';

@Module({
  imports: [
    VeiculosModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:KG77RtihXmtXDZJ@cluster0.8yzsm.mongodb.net/info_sistemas?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
