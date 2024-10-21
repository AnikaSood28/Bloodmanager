const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require('mongoose');
const cors = require("cors");
const connectDB = require("./config/db");
const path=require('path');
const inventoryModel = require("./models/inventoryModel");
//dot config
require('dotenv').config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


const PORT=process.env.PORT
app.use('/api/v1/test',require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRouter'));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use(express.static(path.join(__dirname,'./client/build')))
const petSchema = new mongoose.Schema({
    dogName: String,
    medicalHistory: String,
    vaccinationRecords: String,
  });
  
  const Pet = mongoose.model('Pet', petSchema);
  
  // API Endpoint to save pet health data
  app.post('/api/pets', async (req, res) => {
    const { dogName, medicalHistory, vaccinationRecords } = req.body;
    const newPet = new Pet({ dogName, medicalHistory, vaccinationRecords });
  
    try {
      await newPet.save();
      res.status(201).json({ message: 'Pet health data saved successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data.' });
    }
  });
const __dirname1=path.resolve()
if(process.env.DEV_MODE==="development"){
    app.use(express.static(path.join(__dirname1,"./client/build")))
    app.get("*",function(req,res){
        res.sendFile(path.resolve(__dirname1,"client","build","index.html"))
    })
}


app.listen(PORT,()=>{
    console.log(`Node server running on port ${PORT}`)
   

})