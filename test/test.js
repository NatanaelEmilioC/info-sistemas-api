/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

// Suite de teste relacionada a veiculos
describe('Veiculos', () => {
  describe('/GET Veiculos', () => {
    it('Testando GET todos os Veiculos', (done) => {
      chai
        .request('http://localhost:3000')
        .get('/veiculos/readAll')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  describe('/GET/:id Veiculo', () => {
    it('GET em Veiculo por ID', (done) => {
      let id = '60c166ccdf5fa12460d967ec';
      chai
        .request('http://localhost:3000')
        .get('/veiculos/readById/' + id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('_id').eql(id); // Verifica se existe a propriedade id_, e se ela e igual a id_ criada
          res.body.should.have.property('placa');
          res.body.should.have.property('chassi');
          res.body.should.have.property('renavam');
          res.body.should.have.property('modelo');
          res.body.should.have.property('marca');
          res.body.should.have.property('ano');

          done();
        });
    });
  });

  describe('/POST Veiculo', () => {
    it('Verificar o cadastro de Veiculo', (done) => {
      let veiculo = {
        // Definindo o veiculo a ser inserido
        placa: 'ASM-2541',
        chassi: '31r tU1xDM 1a 0l21525',
        renavam: '71246088001',
        modelo: 'Focus',
        marca: 'Ford',
        ano: 2020,
      };
      chai
        .request('http://localhost:3000')
        .post('/veiculos/create')
        .type('form')
        .send(veiculo) // Enviar esse arquivo
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe('/PUT Veiculo', () => {
    it('Verificar o alteração de Veiculo', (done) => {
      let id = '60c166ccdf5fa12460d967ec';
      // Vamos deinir o veiculo que vamos inserir
      let veiculo = {
        placa: 'ASM-2001',
        chassi: '51r tU1xDM 1a 0l21525',
        renavam: '21246088001',
        modelo: 'Civic',
        marca: 'Honda',
        ano: 2018,
      };
      chai
        .request('http://localhost:3000')
        .put('/veiculos/update/' + id)
        .type('form')
        .send(veiculo) // Enviar esse arquivo para trocar os dados do existente
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('/DELETE Veiculo', () => {
    it('Verificar a remoção de Veiculo pelo número da placa', (done) => {
      let placa = 'ASM-2541';
      chai
        .request('http://localhost:3000')
        .delete('/veiculos/deleteByPlaca/' + placa)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
