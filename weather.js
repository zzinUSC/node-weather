const request=require('request');

function weather(lat,lon, callback){
    const url='http://api.weatherstack.com/current';
    const para=`?access_key=ee29521d92b5b678af3ddea42a38d7e0&query=${lat},${lon}&units=f`;
    request({
        url:url+para,
        json:true
    },(error,{body}={})=>{
        if(error){
            callback('something really wrong',undefined);
        }else if (body.error){
            callback('can not find the location',undefined);
        }else{
            const data=body.current;
            callback(undefined,data);
        }
    })
}
module.exports=weather;