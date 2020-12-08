const fs=require('fs');
const chalk=require('chalk');
const { SSL_OP_ALL } = require('constants');
const getNotes=function(){
    return 'geti';
};
const removeNote=(title)=>{
    let nodes=loadNote();
    const len=nodes.length;
    nodes=nodes.filter((ele)=>{
       return  ele.title!==title;
    });
    if(nodes.length===len){
        console.log(chalk.red.inverse('not found'));
        return;
    }
    saveNote(nodes);
    console.log(chalk.green.inverse('note removed'));
}
const addNote=(title,body)=>{
    const node=loadNote();
    
    const newone={title:title,body:body};
    const dup=node.filter((ele)=>{
        return ele.title===newone.title;
    })
    if(dup.length!=0){
        console.log('duplicate!');
        return;
    }
    node.push(newone);
    saveNote(node);
    console.log('new one added');
}
const saveNote=(node)=>{
    fs.writeFileSync('notes.json',JSON.stringify(node));
}
const loadNote=()=>{
    try{
        const buffer=fs.readFileSync('notes.json')
        return JSON.parse(buffer.toString())
    }catch(e){
        return []
    }
};
function listNode(){
    let notes=loadNote()
    
    notes.forEach(element => {
        console.log(element)
    })
}
const readNote=(title)=>{
    const node=loadNote();
    const dup=node.find((ele)=>{
        return ele.title===title;
    })
    if(dup===undefined){
        console.log('not found');
        return;
    }
    console.log(dup);
}
module.exports={addNote:addNote,removeNote:removeNote,listNote:listNode,readNote:readNote}