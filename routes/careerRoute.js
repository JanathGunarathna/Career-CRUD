import * as careerController from "../controllers/careerController.js";
import express from "express";

const router = express.Router();

router.get("/career", careerController.getAllCareer);
router.get("/career/:id", careerController.getCareerById);
router.post("/career", careerController.createCareer);
router.put("/career/:id", careerController.updateCareerByID);
router.delete("/career/:id", careerController.deleteCareerByID);

export default router;