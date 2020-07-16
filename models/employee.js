let mongoose=require('mongoose');

let empSchema=new mongoose.Schema({

    empId:{type:Number},
    empName:{type:String ,required:true,trim:true},
    empEmail:{type:String,required:true,trim:true},
    empDesg:{type:String},
    empDept:{type:String,enum:['Desigining','Development','Support','Marketing','HR'],default:'Development'},
    

},{timestamps:true});


module.exports=mongoose.model('employee',empSchema);