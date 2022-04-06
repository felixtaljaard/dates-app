const notesModel = require('./notesModel');
const notesView = require('./notesview');
const NotesApi = require('./notesAPI');


const api = new NotesApi();
const model = new notesModel();
const view = new notesView(model, api);

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});
