const dotenv = require('dotenv')

dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    db: process.env.DB_CONNECT
}

module.exports = config