function validatorEmail(req){
    const nodemailer = require('nodemailer');
    const {EMAIL, PASSWORD_EMAIL} = process.env;
    let transporter = nodemailer.createTransport({
        service:'gmail',
        secure:false,
        auth:{
            user:EMAIL,
            pass:PASSWORD_EMAIL
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        from: EMAIL,
        to: req.email,
        subject:'Confirmación de registro en People News',
        html: ` <h1>Confirma tu correo electrónico.</h1>
                <div>
                    <h3>Bienvenido a People News ${req.name}. <br> ¡Estás muy proximo a terminar tu registro!</h3>
                    <p> Para confirmar tu correo debes dar clic en el siguiente botón.</p>  
                    <a href="http://localhost:3000/api/register/${req.token}">
                        <button>Confirmar mi email</button>
                    </a>
                </div>
                <div>
                    <p>Para mayor información comunícate al correo peoplenewsauth@gmail.com.</p>
                    <p>People News CO.<br> 
                        Bogotá, Colombia.<br>
                    </p>
                </div>`
    }
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.error('We had a error to send the email', error);
        } else{
            console.log('Send email to confirmation');
        }    
    });
}
module.exports = validatorEmail;
