import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('publish endpoint', () => {
  describe('when they are subscribers', () => {
    before(async () => {
      await chai.request(app)
        .post('/topics')
        .send({
          name: 'subscribers_check'
        })
      await chai.request(app)
        .post('/subscribe/subscribers_check')
        .send({
          url: 'http://localhost:9000/tests'
        })
    });
    
    it('returns a successful message', (done) => {
      chai.request(app)
        .post('/publish/subscribers_check')
        .send({ name: 'test' })
        .end((err, res) => {
          expect(res.body.message).to.eq('Published successfully to 1 subscribers')
          done();
        })
    });
  });
  
  describe('when there are no subscribers', () => {
    before(async () => {
      await chai.request(app)
        .post('/topics')
        .send({
          name: 'no_subscribers'
        })
    });
    it('notifies the user', (done) => {
      chai.request(app)
        .post('/publish/no_subscribers')
        .send({ name: 'test' })
        .end((err, res) => {
          expect(res.body.message).to.eq('No subscribers yet')
          done();
        })
    });
  });
});