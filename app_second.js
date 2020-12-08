
const request=require('request');
const geocoding=require('./geocoding.js');
const weather=require('./weather.js');
// const url='http://api.weatherstack.com/current';
// //const para='?access_key=ee29521d92b5b678af3ddea42a38d7e0&query=37.8267,-122.4233&units=f';
// const para='?access_key=ee29521d92b5b678af3ddea42a38d7e0&query=&units=f';

const target=process.argv[2];
geocoding(target,(error,{lat,lon}={})=>{
    if(error===undefined){
        weather(lat,lon,(error,data)=>{
            if(error){
                console.log('Error',error);
            }else{
                console.log('Data',data);
            }
        });
    }else{
        console.log('Error',error);
    }
});
