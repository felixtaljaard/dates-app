const notesModel = require('./notesModel');
const notesView = require('./notesview');


const model = new notesModel();
model.addNote('This is an example note');

const view = new notesView(model);

view.displayNotes();
