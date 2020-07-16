let express=require('express');
let router=express.Router();
let empControll=require('../controllers/empController');



//add employee 
router.post('/',empControll.addEmployee);


//get all employees 
router.get('/',empControll.getAllEmployees);

//delete employee
router.delete('/',empControll.removeEmployee);

//update emlpoyee
router.put('/',empControll.updateEmployee);


module.exports=router;