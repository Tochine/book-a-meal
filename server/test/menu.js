import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;
const BASE_URL = '/api/v1/menu'

describe ('/POST Menu', () => {
  it('it should add menu', (done) => {
  chai.request(server)
  .post('/api/v1/menu')
  .end((err, res) => {
  expect(res).to.have.status(200);
  expect(res.body.message).to.equal('Menu Saved');
  done();
  });
 });
});

describe ('/Get Menu', () => {
  it('it should get todays menu', (done) => {
  	chai.request(server)
  	.get(`${BASE_URL}/menu`)
  	.end((err, res) => {
  	expect(res).to.be.an('object');
  	done();
  	});
  });
});