const nodemailer = require('nodemailer');
var path = require('path');
var hbs = require('nodemailer-express-handlebars');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'User_Info',
        pass: 'User_Pass'
    }
});
transport.use('compile', hbs(
    {
        viewEngine: {
            extName: '.hbs',
            partialsDir: __dirname + '/view/',
            layoutsDir: __dirname + '/view/',
            defaultLayout: '',
          },
        viewPath : './views/'
    }
));

const message = {
    from: 'me@from.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Subject', // Subject line
    template: 'mail',
    text: 'Hy', // Plain text body
    context: { //Param
        name: 'BLOB',
    }
};

transport.sendMail(message, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
}, (error, info) => {
    if (error) {

        console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
