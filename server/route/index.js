

import mealController from '../controller/meal';


module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to book-a-meal Api',
	}));

	app.get('/meals', mealController.getMeal);
} 