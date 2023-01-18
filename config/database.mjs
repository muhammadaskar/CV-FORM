// import sequelize
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

let db

// create connection
// if (process.env.NODE_ENV === 'production') {
const { RDS_DB_NAME, RDS_USERNAME, RDS_PASSWORD, RDS_HOSTNAME, RDS_DB_SERVICES } = process.env
db = new Sequelize(RDS_DB_NAME, RDS_USERNAME, RDS_PASSWORD, {
    host: RDS_HOSTNAME,
    dialect: RDS_DB_SERVICES
});
// } else {
//     const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_SERVICES } = process.env;
//     db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//         host: DB_HOST,
//         dialect: DB_SERVICES
//     });
// }

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

// export connection
export default db;