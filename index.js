const notesModel = require('./notesModel');

const model = new notesModel();
console.log(model.getNotes());
console.log('The notes app is running');