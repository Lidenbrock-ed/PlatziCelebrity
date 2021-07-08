const dotenv = require('dotenv').config();
const config = {
    PORT:process.env.PORT,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    HOSTDB: process.env.PORT.HOSTDB,
    PORTDB: process.env.PORTDB,
    DATABASE: process.env.DATABASE,

    USER_DEV: process.env.USER_DEV,
    HOST_DEV: process.env.HOST_DEV,
    DATABASE_DEV: process.env.DATABASE_DEV,
    PASSWORD_DEV: process.env.PASSWORD_DEV, 

    EMAIL: process.env.EMAIL,
    PASSWORD_EMAIL: process.env.PASSWORD_EMAIL,
    SECRET: process.env.SECRET
}
module.exports = config;