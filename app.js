// const validator = require('validator');
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')



// console.log(yargs.argv)
// Create yargs command

yargs.command({
    command: 'add',
    describe: 'Command for adding note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
}).command({
    command: 'remove',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {
        notes.removeNote(argv.title)
    }
}).command({
    command: 'list',
    handler() {
        notes.listNotes()
    }
}).command({
    command: 'read',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)  {
        notes.readNote(argv.title)
    }
}).argv


