import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_SERVICES } = process.env;

const config = {
  development: {
    // username: DB_USERNAME,
    // password: DB_PASSWORD,
    // database: DB_NAME,
    // host: DB_HOST,
    // dialect: DB_SERVICES,
    host: process.env.RDS_HOSTNAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    host: process.env.RDS_HOSTNAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME,
    dialect: "mysql",
  },
};

export default config;
