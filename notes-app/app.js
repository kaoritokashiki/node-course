
const yargs = require('yargs');
const notes = require('./notes.js');
// const notes = require('./notes.json');

yargs.version('1.1.0')

yargs.command({
    command: "add",
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            desctibe: 'Note body',
            demandOotion: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: "Remove a note",
    // builder: {
    //     title: {
    //         describe: 'Note title',
    //         demandOption: true,
    //         type: 'srting'
    //     }
    // },
    handler(argv){
        notes.removeNote(argv.title)
        // console.log('Removing the note', argv)
    }
})
yargs.command({
    command: 'list',
    describe: "List your notes",
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'srting'
        },
    },
    handler(argv){
        notes.readNotes(argv.title)
        console.log('Reading a note')
    }
})



yargs.parse()


// console.log(yargs.argv)



