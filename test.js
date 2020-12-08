function test(){
    console.log(this.name);
}
const obj={name:'zhao'};
obj.fun=test;
obj.fun()
const lll=obj.fun;
lll()
