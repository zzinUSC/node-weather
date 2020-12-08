const request=require('request');

function geocoding(address, callback){
    const url_lat='https://api.mapbox.com/geocoding/v5/mapbox.places';
    const url_lat2=`/${encodeURIComponent(address)}.json`;
    const para_lat='?access_token=pk.eyJ1Ijoienpmb3JsYXRsb25nIiwiYSI6ImNraTJjdmh5MTFpeTcycW9kd25lbnBlcTUifQ.x8ge8EncVAmQBdyLZ7eQNQ';
    request({
        url:url_lat+url_lat2+para_lat,
        json:true
    },(error,{body}={})=>{
        if(error){
            callback('something really wrong',undefined);
        }else if (body.features.length===0){
            callback('can not find the location',undefined);
        }else{
            const lon=body.features[0].center[0];
            const lat=body.features[0].center[1];
            const name=body.features[0].place_name;
            callback(undefined,{lat:lat,lon:lon,name:name});
        }
    })
}
module.exports=geocoding;
