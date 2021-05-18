var nodeMailer=require('nodemailer');
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'shrutiamrutkar177@gmail.com',
        password:'Pra@14Shr',

    }
});

var mailOptions={
    from:'shrutiamrutkar177@gmail.com',
    to:'shrutiamrutkar177@gmail.com',
    sub:'node prrogram',
    text:'hello world',
}

transport.sendMail(mailOptions,function(err,info){
    if(err){
    console.log("mail send")
    }
    else{
        console.log(info);
    }
})