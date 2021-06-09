import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Veiculo } from './veiculo';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectModel('Veiculo') private readonly veiculoModel: Model<Veiculo>,
  ) {}

  async getAll() {
    return await this.veiculoModel.find().exec();
  }

  async getById(id: string) {
    return await this.veiculoModel.findById(id).exec();
  }

  async create(veiculo: Veiculo) {
    const createdVeiculo = new this.veiculoModel(veiculo);
    return createdVeiculo.save();
  }

  async update(id: string, veiculo: Veiculo) {
    await this.veiculoModel.updateOne({ _id: id }, veiculo).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.veiculoModel.deleteOne({ _id: id }).exec();
  }
}
