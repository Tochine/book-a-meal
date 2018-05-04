
//initializing express
import express from 'express';
//initializing bodyparser for extraction of request
import bodyParser from 'body-parser';

//declaring your app to use express
const app = express();
//decalring express router
const router = express.Router();
//initializing my port
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.use((req, res, next) => {
	console.log('Welcome to Book-A-Meal');
	next();
});


// declaring my route path
require('./server/route')(router);


app.use('/api/v1', router);

// listen to the port
app.listen(port, () => {
	console.log(`Connect to port ${port}`);
});

export default app;