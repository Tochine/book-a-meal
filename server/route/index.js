

import mealController from '../controller/meal';
import orderController from '../controller/order';


module.exports = (app) => {
	app.get('/', (req, res) => res.status(200).send({
import menuController from '../controller/menu';


export default (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to book-a-meal Api',
	}));

	console.log('orders')
	app.get('/meals', mealController.getMeal);
	app.post('/meals', mealController.createMeal);
	app.put('/meals/:mealId', mealController.updateMeal);
	app.delete('/meals/:mealId', mealController.deleteMeal);
   app.post('/orders', orderController.createOrder);
}

	app.get('/menu', menuController.getMenu);
} 
