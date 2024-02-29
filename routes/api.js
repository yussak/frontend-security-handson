const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    let message = req.query.message;

    if (message === "") {
        res.status(400);
        message ="messageが空です";
    }

    res.send({mesage: message});
    // res.send({mesage:"Hello"});
});

router.post("/",(req,res)=>{
    const body = req.body;
    console.log(body);
    res.end();
});

module.exports = router;

// await fetch("http://localhost:3000/api/",{
//     method: "POST",
//     body:JSON.stringify({message:"こんにちは"}),
//     headers: {"Content-type": "applciation/json"}
// });