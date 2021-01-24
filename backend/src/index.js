const app= require('./app');

app.listen( process.env.PORT ,function (){
    console.log(`running in http://localhost:${process.env.PORT}`)
});