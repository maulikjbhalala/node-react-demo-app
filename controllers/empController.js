let empModel=require('../models/employee');



async function addEmployee(req,res){
    let bodyData=req.body;
    if(bodyData.empId===null || bodyData.empId===undefined || bodyData.empId=='undefined')
    {
        bodyData.empId=Date.now();
    }
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
    let id=req.params.id;
    await empModel.findOneAndDelete({_id:id},async(err,result)=>
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
    let bodyData=req.body;
    let set={
        $set:
        {
            empName:bodyData.empName,
            empDesg:bodyData.empDesg,
            empDept:bodyData.empDept,
            empId:bodyData.empId,
            empEmail:bodyData.empEmail
        }
    };

    await empModel.findOneAndUpdate({_id:id},set,{new:true},async(err,result)=>
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

async function getEmployeeById(req,res)
{
    let id=req.params.id;
    await empModel.findOne({_id:id},async(err,result)=>
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
   return res.json('okk')
};

module.exports={
    removeEmployee,
    addEmployee,
    updateEmployee,
    getAllEmployees,
    getEmployeeById
};


