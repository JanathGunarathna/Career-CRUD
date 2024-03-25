import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import careerRoute from "./routes/careerRoute.js";
import sequelize from "../Church App/configs/db.config.js"


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

sequelize.authenticate().then(() => {console.log("tables Created");}).catch((err) => {console.log("Unable to connect to the database:", err)});;

app.use("/api/career", careerRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});