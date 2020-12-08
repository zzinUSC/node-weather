const express=require('express');
const app=express();
const content=[{id:1,con:'lala'},{id:2,con:'gay'}];

app.use(express.json());
app.get('/',(req,res)=>{
    console.log('new connection');
    res.send('hello world');
});
app.get('/:id',(req,res)=>{
    console.log('new connection with id');
    const con=content.find(c=>c.id===parseInt(req.params.id));
    if(!con){
        res.send('nono');
        return;
    }
    res.send(con);
});

app.post('/',(req,res)=>{
    if(!req.body.name){
        res.status(400);
        res.send('no name');
        return;
    }
    const con={id:content.length+1, con:req.body.name};
    content.push(con);
    res.send(con);
})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})

console.log('start');