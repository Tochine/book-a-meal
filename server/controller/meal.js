
import meals from '../model/meal';

class Meal {
    static getMeal(req, res) {
		return res.status(200).json({
			meals,
			message:'List of all meals',
			error:false
		});
	}


	static createMeal(req, res) {
		//destructuring
		const {
			name,
			amount,
			quantity,
			image,
			description,
		} = req.body;

		if(!name){
			return res.status(400).json({
				message: 'Required field',
				error: true
			});
		}

		meals.push({
			id:  meals.length + 1,
		    name: req.body.name,
			amount: req.body.amount,
			quantity: req.body.quantity,
			image: req.body.image,
			description: req.body.description
			
		});
		return res.status(200).json({
			meals,
			message: 'Meal successfully added',
			error:false
		});
	}

	static updateMeal(req, res) {

		for (let i = 0; i < meals.length; i +=1){
			if (meals[i].id === parseInt(req.params.mealId, 10)){
				
				meals[i].name = req.body.name;
				meals[i].amount = req.body.amount;
				meals[i].quantity = req.body.quantity;
				meals[i].image = req.body.image;
				meals[i].description = req.body.description;

				const newMeal = meals[i];
		
				return res.json({
					newMeal,
					message: 'Meals updated successfully'
				});
			}
		}

		return res.status(404).json({
			message: 'Meal not found',
			error:true
		});
	}

	static deleteMeal(req, res) {
		for (let i = 0; i < meals.length; i += 1) {
			if(meals[i].id === parseInt(req.params.mealId)) {
				meals.splice(i, 1);

				return res.status(200).json({
					meals,
					message: 'Meal Successfully deleted',
					error: false
				});
			}
		}

		return res.status(404).json({
			message: 'Meal not found',
			error: true
		});
	}
}

export default Meal;