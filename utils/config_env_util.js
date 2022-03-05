require("dotenv").config();

const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB_NAME,
    MONGO_NAME,
} = process.env;

module.exports = {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB_NAME,
    MONGO_NAME
}