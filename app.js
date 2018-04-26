import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const router = express.Router();

const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.use((req, res, next) => {
	console.log('Welcome to Book-A-Meal');
	next();
});

require('./server/route')(router);

app.use(router);

app.listen(port, () => {
	console.log(`Connect to port ${port}`);
});

export default app;