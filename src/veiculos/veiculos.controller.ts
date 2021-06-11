import { RequisicaoCriacaoVeiculoDTO } from './dtos/requisicao-criacao-veiculo';
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

  @Get('readAll')
  async readAll(): Promise<Veiculo[]> {
    return this.veiculoService.readAll();
  }

  @Get('readById/:id')
  async readById(@Param('id') id: string): Promise<Veiculo> {
    return this.veiculoService.readById(id);
  }

  @Post('create')
  async create(@Body() veiculo: RequisicaoCriacaoVeiculoDTO): Promise<Veiculo> {
    return this.veiculoService.create(veiculo);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() veiculo: RequisicaoCriacaoVeiculoDTO,
  ): Promise<Veiculo> {
    return this.veiculoService.update(id, veiculo);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    this.veiculoService.delete(id);
  }

  @Delete('deleteByPlaca/:placa')
  async deleteByPlaca(@Param('placa') placa: string) {
    this.veiculoService.deleteByPlaca(placa);
  }
}
