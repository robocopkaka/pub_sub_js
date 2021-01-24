import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('subscriptions creation', () => {
  describe('when valid params are passed', () => {
    beforeEach(async () => {
      await chai.request(app)
        .post('/topics')
        .send({
          name: 'test_kachi'
        })
    })
    it('creates the subscription', (done) => {
      chai.request(app)
        .post('/subscribe/test_kachi')
        .send({
          url: 'http://localhost:9000/tests'
        })
        .end((err, res) => {
          expect(res.body.url).to.eq('http://localhost:9000/tests');
          done();
        })
    });
  });
  
  describe('when invalid uri is passed', () => {
    it('returns an error', (done) => {
      chai.request(app)
        .post('/subscribe/test_kachi')
        .send({
          url: 'http'
        })
        .end((err, res) => {
          expect(res.body.message).to.eq('The url entered is invalid. Please retry.');
          done();
        })
    });
  });
  
  describe('when topic does not exist', () => {
    it('returns an error', (done) => {
      chai.request(app)
        .post('/subscribe/not_exist')
        .send({
          url: 'http://localhost:9000/tests'
        })
        .end((err, res) => {
          expect(res.body.message).to.eq('Topic not found');
          done();
        });
    });
  });
  
  describe('when url is already subscribed to the topic', () => {
    before(async () => {
      await chai.request(app)
        .post('/topics')
        .send({
          name: 'already_subscribed'
        })
      await chai.request(app)
        .post('/subscribe/already_subscribed')
        .send({
          url: 'http://localhost:9000/tests'
        })
    })
    it('returns an error', (done) => {
      chai.request(app)
        .post('/subscribe/already_subscribed')
        .send({
          url: 'http://localhost:9000/tests'
        })
        .end((err, res) => {
          expect(res.body.message).to.eq("You've already subscribed to this topic");
          done();
        });
    });
  });
});
