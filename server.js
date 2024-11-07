const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("public"));

//get array from the frontend (portia's GitHub)
const housePlans = [];

app.get("/",()=>{
  console.log("getting me");
  response.sendFile(_dirname + "/index.html");
});

app.get("/api/house_plans", (req,res)=>{
  res.json(housePlans);
});


app.listen(3001, () => {
  console.log("Listening...");
});