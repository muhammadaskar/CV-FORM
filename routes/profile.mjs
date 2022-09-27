import express from "express";
import ProfileController from "../controllers/ProfileController.mjs"

const app = express.Router();

app.get('/:user_profile_code', ProfileController.index);
app.post('/', ProfileController.create);
app.put('/:user_profile_code', ProfileController.update);

export default app;
