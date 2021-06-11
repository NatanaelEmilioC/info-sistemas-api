import { RequisicaoCriacaoVeiculoDTO } from './../dtos/requisicao-criacao-veiculo';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Veiculo } from './veiculo';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectModel('Veiculo') private readonly veiculoModel: Model<Veiculo>,
  ) {}

  async readAll() {
    return await this.veiculoModel.find().exec();
  }

  async readById(id: string) {
    return await this.veiculoModel.findById(id).exec();
  }

  async create(veiculo: RequisicaoCriacaoVeiculoDTO) {
    const createdVeiculo = new this.veiculoModel(veiculo);
    return createdVeiculo.save();
  }

  async update(id: string, veiculo: RequisicaoCriacaoVeiculoDTO) {
    await this.veiculoModel.updateOne({ _id: id }, veiculo).exec();
    return this.readById(id);
  }

  async delete(id: string) {
    return await this.veiculoModel.deleteOne({ _id: id }).exec();
  }
  /*Remove elemento da base recuperando pelo número da placa*/
  async deleteByPlaca(placa: string) {
    return await this.veiculoModel.deleteOne({ placa: placa }).exec();
  }
}
