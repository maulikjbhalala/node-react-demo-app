let empModel=require('../models/employee');



async function addEmployee(req,res){
    let bodyData=req.body;
    await empModel.create(bodyData,async(err,result)=>
    {
            if(err)
            {
                return res.json({status:false,msg:err.toString(),data:{},dataArray:[]});
            }
            else if(result!==null)
            {
                return res.json({status:true,msg:"",data:result,dataArray:[]});
            }
            else
            {
                return res.json({status:false,msg:"No Data",data:{},dataArray:[]});
            }
    });
};


async function getAllEmployees(req,res){
   await empModel.find({},async(err,result)=>
    {
            if(err)
            {
                return res.json({status:false,msg:err.toString(),data:{},dataArray:[]});
            }
            else if(result!==null)
            {
                return res.json({status:true,msg:"",data:{},dataArray:result});
            }
            else
            {
                return res.json({status:false,msg:"No Data",data:{},dataArray:[]});
            }
    });
};

async function removeEmployee(req,res){

    await empModel.findOneAndDelete({},async(err,result)=>
    {
            if(err)
            {
                return res.json({status:false,msg:err.toString(),data:{},dataArray:[]});
            }
            else if(result!==null)
            {
                return res.json({status:true,msg:'Employee deleted',data:{},dataArray:[]});
            }
            else
            {
                return res.json({status:false,msg:'No Data',data:{},dataArray:[]});
            }
    });


};

async function updateEmployee(req,res){

    let id=req.params.id;
    await empModel.findOneAndUpdate(bodyData,async(err,result)=>
    {
            if(err)
            {
                return res.json({status:false,msg:err.toString(),data:{},dataArray:[]});
            }
            else if(result!==null)
            {
                return res.json({status:true,msg:'',data:result,dataArray:[]});
            }
            else
            {
                return res.json({status:false,msg:'No Data',data:{},dataArray:[]});
            }
    });

};

module.exports={
    removeEmployee,
    addEmployee,
    updateEmployee,
    getAllEmployees
};


