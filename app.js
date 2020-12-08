const yargs=require('yargs');
const fs=require('fs');
const node=require('./note.js')
console.log('start');
yargs.command({
    command: 'add',
    description:'add a new node',
    builder:{
        title:{
            description:'the titile',
            demandOption: true,
            type:'string'
        },
        body:{
            description:'the body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        node.addNote(argv.title, argv.body)
    }
});
yargs.command({
    command: 'remove',
    description:'remove a node',
    builder:{
        title:{
            description:'the titile',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        node.removeNote(argv.title)
    }
});
yargs.command({
    command: 'list',
    description:'list nodes',
    handler(){
        console.log('listing');
        node.listNote()
    }
});
yargs.command({
    command: 'read',
    description:'read a node',
    builder:{
        title:{
            description:'the titile',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        console.log('reading');
        node.readNote(argv.title);
    }
});

yargs.parse();
 
console.log('end');
