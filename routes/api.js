const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");;
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Headers", "X-Token");
    }
    next();
});

router.get("/",(req,res)=>{
    res.setHeader("X-Timestamp", Date.now());
    let message = req.query.message;
    const lang = req.headers["x-lang"];

    if (message === "") {
        res.status(400);
        if (lang === "en") {
            message = "message is empty";
        } else {
            message ="messageが空です";
        }
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

// const res = await fetch("http://localhost:3000/api/?message=", {
//     headers: {"X-lang": "en"},
// });
// await res.json()

// await fetch("http://site.example:3000/api", {
//     headers: {"X-Token": "asdfbafas3242dv"}
// })

// await fetch("http://site.example:3000/api", {
//     method: "GET",
//     headers: {"X-Token": "asdfbafas3242dv"}
// })