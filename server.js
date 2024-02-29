const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res,next)=>{
    res.end("top page");
});

// サーバーを起動する
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
});