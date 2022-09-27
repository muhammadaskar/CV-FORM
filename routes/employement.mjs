import express from "express";
import EmployementController from "../controllers/EmployementController.mjs"

const app = express.Router();

app.get('/:user_profile_code', EmployementController.index);
app.post('/:user_profile_code', EmployementController.create);
app.delete('/:user_profile_code/:id', EmployementController.delete);

export default app;
