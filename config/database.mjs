// import sequelize
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_SERVICES } = process.env;

// create connection
const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_SERVICES
});

// try {
//     await db.authenticate();
//     console.log("Connection has been established successfully.");
// } catch (error) {
//     console.error("Unable to connect to the database:", error);
// }

// export connection
export default db;