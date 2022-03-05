const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB_NAME,
    MONGO_NAME
} = require('./config_env_util')

module.exports = {
    db: {
        mongodb: {
            enabled: true,
            host: MONGO_HOST,
            port: MONGO_PORT,
            database: MONGO_DB_NAME,
            nameconnection: MONGO_NAME
        }
    }
}