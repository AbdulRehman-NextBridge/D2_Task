const express = require('express')

const app = express();

//user array

let user = [
    {id: 1, name: 'Abdul Rehman', email: 'arb@nxb.com.pk'},
    {id: 2, name: 'Ali', email: 'ali@nxb.com.pk'}
]

//get all users
app.get("/getUser",(req,res)=>{

    if(user)
        res.send(user)
});

//delete user
app.delete("/deleteUser",(req,res)=>{

})

//add user
app.post("/addUser",(req,rest)=>{
    res.send("User Added");
})

//update user
app.put("/updateUser:id",(req,res)=>{

})

app.listen(3212,()=>{
    console.log("server connected successfully");
})

