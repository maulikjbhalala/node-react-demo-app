let express=require('express');
let router=express.Router();
let empControll=require('../controllers/empController');



//add employee 
router.post('/',empControll.addEmployee);


//get all employees 
router.get('/',empControll.getAllEmployees);

//delete employee
router.delete('/:id',empControll.removeEmployee);

//update emlpoyee
router.put('/:id',empControll.updateEmployee);

//get employee by id
router.get('/:id',empControll.getEmployeeById);
module.exports=router;