import express from "express";
import SkillController from "../controllers/SkillController.mjs"

const app = express.Router();

app.get('/:user_profile_code', SkillController.index)
app.post('/:user_profile_code', SkillController.create)
app.delete('/:user_profile_code/:id', SkillController.delete)

export default app;
