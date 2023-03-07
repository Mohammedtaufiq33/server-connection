const express = require('express')
const app = express()
const nodemailer =require('nodemailer')

const transporter =nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:'465',
    sender:'gmail',
    auth:{
        user:'taufiqumar017@gmail.com',
        pass:'hkhhjjnknkkjj'
    }

})

app.get('/sendEmail',(req,res)=>{
var mailoption ={
    from:'taufiqumar017@gmail.com',
    to:'taufiqumar00017@gmail.com',
    subject:'sending mail using nodejs',
    Text:'Color Code Project'
}
transporter.sendMail(mailoption , (err,info)=>{
    if(!err){
        res,json({status : 'ok',data : info})
    }else {
        res.json({status:"error" , data :"something went wrong"})
    }   
})
})
app.listen(3000, (err)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Email sent:" + info.response);
    }
});
    
    
    