import { Document } from 'mongoose';

export class Veiculo extends Document {
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}
