
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
 
var options = {
    auth: {
        api_user: 'venkatasashi',
        api_key: 'icyshake19$'
    }
}
    
var mailer = nodemailer.createTransport(sgTransport(options));



router.get('/', function(req,res){
    var email = {
    to: [ 'sashi.kodi@gmail.com'],
    from: 'staff@localhost.com',
    subject: 'Hi there',
    text: 'Awesome Sendgrid',
    html: '<b>Awesome Sendgrid</b>'
};
 
mailer.sendMail(email, function(err, res) {
    if (err) { 
        console.log(err) 
    }
    console.log(res);
});
    
});

module.exports=router;