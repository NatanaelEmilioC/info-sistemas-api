import { Test, TestingModule } from '@nestjs/testing';
import { VeiculoService } from './veiculo.service';

describe('VeiculoService', () => {
  let provider: VeiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeiculoService],
    }).compile();

    provider = module.get<VeiculoService>(VeiculoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
