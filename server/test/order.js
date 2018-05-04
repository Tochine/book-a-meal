import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;
const BASE_URL = '/api/v1/orders'

describe ('/GET Orders', () => {
	it('it should get order details', (done) => {
	  chai.request(server)
		.get(`${BASE_URL}/order`)
		.end((err, res) => {
		expect(res).to.have.status(200);
		expect(res.body.message).to.equal('Order details');
		done();
  });
});
});