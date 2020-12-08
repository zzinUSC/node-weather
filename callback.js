// setTimeout(()=>{
//     console.log('two seconds are up')
// },2000);
// const names=['andrew','jessica','tom'];
// const shorts=names.filter((name)=>{
//     return name.length<4;
// })
// console.log(shorts)

function add(m,n,callback){
    const sum=m+n;
    setTimeout(()=>{
        callback(sum);
    },2000)
}

add(1,2,(sum)=>{
    console.log(sum);
})