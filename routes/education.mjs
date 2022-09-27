import express from "express";
import EducationController from "../controllers/EducationController.mjs"

const app = express.Router();

app.get('/:user_profile_code', EducationController.index)
app.post('/:user_profile_code', EducationController.create)
app.delete('/:user_profile_code/:id', EducationController.delete)

export default app;
