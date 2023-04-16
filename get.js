const calculator=require('./operation')
const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.t1);
    var a = Number(q.t1);
    console.log(q.t2);
    var b = Number(q.t2);
    console.log(q.t3);
    if(q.t3=="+")
    {
        res.write("<p>Addition of "+a+" and "+b+" is "+ calculator.add(a, b)+"</p>");
    }else if(q.t3=="-")
    {
        res.write("<p>Subtraction of "+a+" and "+b+" is "+ calculator.sub(a, b)+"</p>");
    }else if(q.t3=="*")
    {
        res.write("<p>Multiplication of "+a+" and "+b+" is "+ calculator.mult(a, b)+"</p>");
    }else if(q.t3=="/")
    {
        res.write("<p>Division of "+a+" and "+b+" is "+ calculator.div(a, b)+"</p>");
    }

    res.end();
    
}).listen(2015);
console.log("Server started...");