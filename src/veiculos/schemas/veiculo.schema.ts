/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const VeiculoSchema = new mongoose.Schema({
  placa: String,
  chassi: String,
  renavam: String,
  modelo: String,
  marca: String,
  ano: Number,
});
