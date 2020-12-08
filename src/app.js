const express=require('express');
const path=require('path')
const app=express();
const hbs = require('hbs')
const geocoding=require('./geocoding.js')
const weather=require('./weather.js')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>{
    res.render('index',{
        title: 'weather app',
        name:'Robert'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'it is a help',
        title: 'help',
        name:'Robert'
    })
})
app.get('/about',(req,res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Robert'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
            error:'you must provide address'
        });
        return;
    }
    const {address}=req.query;
    geocoding(address,(error,data)=>{
        if(error){
            res.send({
                error
            })
            return;
        }
        const lat_lon=data;
        weather(data.lat,data.lon,(error,data)=>{
            if(error){
                res.send({
                    error
                })
                return;
            }
            res.send({
                forecast: 'It is snowing',
                location: address,
                weather:data,
                lat_lon:lat_lon
            })
        })
        
    })
    
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        res.send({error: 'no search'});
        return;
    }
    console.log(req.query);
    res.send({products:[]});
})
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Robert',
        errorMessage: 'Help article not found.'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Robert',
        errorMessage: 'Page not found.'
    })
})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log('listening on '+port);
});

console.log('done')
