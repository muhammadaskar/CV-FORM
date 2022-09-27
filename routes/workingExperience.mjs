import express from "express";
import WorkingExperienceController from "../controllers/WorkingExperienceController.mjs"

const app = express.Router();

app.get('/:user_profile_code', WorkingExperienceController.index)
app.put('/:user_profile_code', WorkingExperienceController.update)

export default app;
