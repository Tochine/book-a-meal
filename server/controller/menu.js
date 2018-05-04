import menu from '../model/menu';

class Menu {
  static createMenu(req, res) {
	const {
	  date,
	  description,
	  avlMeal,
	} = req.body;
	const id = menu[menu.length - 1].id + 1;
	const menuSetup = {
	  id, date, description
	};
     menu.push(menuSetup); 
     return res.status(200).json({
     	message: 'Menu Available'
     	message: 'Menu Saved'
     });
    }
    static getMenu(req, res){
     return res.status(200).json({
       menu,
       message: 'Todays Menu',
     });
    }
}

export default Menu;
