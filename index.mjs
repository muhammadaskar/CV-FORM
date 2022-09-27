import express from 'express';
import routes from './routes/routes.mjs'
import dotenv from "dotenv";
import bodyParser from 'body-parser'

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use("/api", routes);
app.use(express.static("./app/upload/photo"))

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log('listening on port ' + port)
})
