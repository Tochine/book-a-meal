

import mealController from '../controller/meal';


export default (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to book-a-meal Api',
	}));


	app.get('/meals', mealController.getMeal);
	app.post('/meals', mealController.createMeal);
	app.put('/meals/:mealId', mealController.updateMeal);
	app.delete('/meals/:mealId', mealController.deleteMeal);
} 