
import meals from '../model/meal';

class Meal {
    static getMeal(req, res) {
		return res.status(200).json({
			meals,
			message:'List of all meals',
			error:false
		});
	}
}

export default Meal;