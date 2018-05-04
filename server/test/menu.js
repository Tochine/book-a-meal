import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;
const BASE_URL = '/api/v1/menu'

describe ('/GET Menu', () => {
	it('it should get all menu', (done) => {
	  chai.request(server)
			.get(`${BASE_URL}/menu`)
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.message).to.equal('Menu Available');
				done();
			});
	});
});