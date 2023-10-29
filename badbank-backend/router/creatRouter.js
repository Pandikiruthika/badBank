// const { create } = require("../model/createScheme")
const createController=require("../controller/createController");
const DepositController=require("../controller/DepositController");
const withdrawController=require("../controller/withdrawController");
const loginController=require("../controller/loginController");
const deleteController=require("../controller/deleteController");
const express=require("express")
const router=express.Router()

// create router for createcontroller
router.post("/signin",createController.register)
router.get("/signin/getall",createController.getAll)
router.delete("/delete/:customer_id",deleteController.Delete)
// create router for DepositController
router.put("/signin/:customer_id",DepositController.UpdateDeposit)

// create router for withdrawController
// router.get("/signin/getdata/:id",withdrawController.getInfo)
router.put("/signin/withdraw/:customer_id",withdrawController.UpdateWithdraw)

// create router for loginController
router.get("/login/:id",loginController.loginpage)
router.post("/login",loginController.loginpage)



module.exports=router