const app= require('./app');
const config = require('./config/config');

app.listen( config.PORT ,function (){
    console.log(`running in http://localhost:${process.env.PORT}`)
});