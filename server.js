const express = require('express')

const app = express();
app.use(express.json());

//user array

let user = [
    {id: 1, name: 'Abdul Rehman', email: 'arb@nxb.com.pk'},
    {id: 2, name: 'Ali', email: 'ali@nxb.com.pk'}
]

//get all users
app.get("/getUser",(req,res)=>{

    res.status(200).json(user);
});
 
//delete user
app.delete("/deleteUser/:id",(req,res)=>{
    const findUser = user.find(u => u.id === parseInt(req.params.id));
    if(!findUser){
        res.status(404).send({message: "error"});
    } else {
        user.splice(findUser,1);
        res.status(200).send();
    }

})

//add user
app.post("/addUser",(req,res)=>{

    const {name, email} = req.body;
    const newUser =  {
        id: user.length + 1,
        name,
        email
    }
    user.push(newUser);
    res.status(200).json(newUser);
})

//update user
app.put("/updateUser/:id",(req,res)=>{

    const findUser = user.find(u => u.id === parseInt(req.params.id))

    if(!findUser){
        res.status(404).json({message: "Error, user not found"})
    }
    else {
        const {name, email} = req.body;
        findUser.name = name;
        findUser.email = email;
        res.status(200).json(findUser)
    }
})

app.listen(3212,()=>{
    console.log("server connected successfully");
})

