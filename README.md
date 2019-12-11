nodemailer email sending test app

Integration : 

gmail : soon
mailtrap : OK


Instruction

mailtrap

You need to create an account on mailtrap and change the credentials in the create transport section : 

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'User_Info',
        pass: 'User_Pass'
    }
});


If you want to add an attachment file to your mail, create a new folder '/picture' and add this to your message parameters :

attachments: [{
    filename: 'yourFile.png',
    path: __dirname + '/views/pictures/yourFile.png',
    cid: 'logo'
]}

If you want to use it in your html :

<img src="cid:logo">