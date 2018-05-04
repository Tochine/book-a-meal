import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../app';

chai.use(chaiHttp);
const { expect } = chai;
const BASE_URL = '/api/v1/meals'

describe ('/GET Meals', () => {
	it('it should get all meals', (done) => {
	  chai.request(server)
			.get(`${BASE_URL}/meals`)
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.message).to.equal('List of all meals');
				done();
		});
	});
});