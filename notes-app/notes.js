const fs = require('fs')
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    console.log(duplicateNote);
    console.log(title);

    if (!duplicateNote) {
        console.log(chalk.green.inverse('New note added'))
        notes.push({
            title: title,
            body: body
        })
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
    
    saveNotes(notes)
}

const removeNote = (title) => {
    console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note)=> {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
        // console.log(notesToRead);
    } else {
        console.log(chalk.red.inverse('Note not found'))

    }

    // console.log(notesToRead.title + notesToRead.body);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}




module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
}