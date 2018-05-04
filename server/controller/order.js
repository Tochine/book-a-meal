
import orders from '../model/order';

class Order {
  static getOrder(req, res) {
	return res.status(200).json({
	orders,
	message:'Order details',
	status: 'successful',
	});
  }
}

export default Order;