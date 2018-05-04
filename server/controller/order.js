import orders from '../model/order';

class Orders {
  static createOrder(req, res) {
  	const {mealId, quantity, contact, time, total} = req.body;
  	const id = orders[orders.length -1].id + 1;
    const addOrder = {
      id,
      mealId,
      quantity,
      contact,
      time,
      total,
    };
    orders.push(addOrder);
    return res.status(202).json({
      orders,
      message: 'Successful',
    });
  }

 } 

// const order = new Orders();
export default Orders;
