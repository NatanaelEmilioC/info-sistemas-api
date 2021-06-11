import { IsNotEmpty, IsNumber } from 'class-validator';

export class RequisicaoCriacaoVeiculoDTO {
  @IsNotEmpty()
  placa: string;

  @IsNotEmpty()
  modelo: string;

  @IsNotEmpty()
  chassi: string;

  @IsNotEmpty()
  renavam: string;

  @IsNotEmpty()
  marca: string;

  @IsNumber()
  ano: number;
}