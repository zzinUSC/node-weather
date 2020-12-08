console.log('the client starts');


function get_forcast(address){
    mes2.textContent='loading';
    fetch('/weather?address='+address).then((res)=>{
    res.json().then((data)=>{
        if(data.error){
            console.log(data.error);
            mes2.textContent=data.error;
        }else{
            console.log(data.weather);
            mes2.textContent=data.weather.temperature;
        }
    })
})

}

const the_form=document.querySelector('form');
const search=document.querySelector('input');
const mes1=document.querySelector('#mes1')
const mes2=document.querySelector('#mes2')
the_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(search.value)
    get_forcast(search.value)
    
})