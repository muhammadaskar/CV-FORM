import express from "express";
import PhotoUserController from "../controllers/PhotoUserController.mjs"

const app = express.Router();

app.get('/:user_profile_code', PhotoUserController.index)
app.put('/:user_profile_code', PhotoUserController.update)
app.delete('/:user_profile_code', PhotoUserController.delete)

export default app;
