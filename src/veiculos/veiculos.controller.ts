import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Veiculo } from './shared/veiculo';
import { VeiculoService } from './shared/veiculo.service';

@Controller('veiculos')
export class VeiculosController {
  constructor(private veiculoService: VeiculoService) {}

  @Get('getAll')
  async getAll(): Promise<Veiculo[]> {
    return this.veiculoService.getAll();
  }

  @Get('getById/:id')
  async getById(@Param('id') id: string): Promise<Veiculo> {
    return this.veiculoService.getById(id);
  }

  @Post('create')
  async create(@Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculoService.create(veiculo);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() veiculo: Veiculo,
  ): Promise<Veiculo> {
    return this.veiculoService.update(id, veiculo);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    this.veiculoService.delete(id);
  }
}
