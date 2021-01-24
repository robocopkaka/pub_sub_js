import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('test topic creation', () => {
  it('should create a topic', (done) => {
    chai.request(app)
      .post('/topics')
      .send({
        name: 'kachi'
      })
      .end((err, res) => {
        expect(res.body.topic.name).to.eq('kachi')
        done();
      })
  })
  
  describe('when name already exists', () => {
    before(() => {
      chai.request(app)
        .post('/topics')
        .send({
          name: 'kachi'
        })
    })
    it('returns an error', (done) => {
      chai.request(app)
        .post('/topics')
        .send({
          name: 'kachi'
        })
        .end((err, res) => {
          expect(res.body.message).to.eq('Topic name already exists');
          done();
        });
    });
  });
  
  describe('when invalid name is passed', () => {
    it('returns an error', (done) => {
      chai.request(app)
        .post('/topics')
        .send({
          name: '1-k'
        })
        .end((err, res) => {
          expect(res.body.message).to.eq('Please pass a valid name');
          done();
        });
    })
  })
});
