import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;
const BASE_URL = '/api/v1/orders'

describe ('/POST Orders', () => {
	it('it should return successful', (done) => {
	  chai.request(server)
			.get(`${BASE_URL}/orders`)
			.send(order)
			.end((err, res) => {
				expect(res).to.have.status(202);
				expect(res.body.message).to.equal('Successful');
				done();
			});
	});
});