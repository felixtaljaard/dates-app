class notesModel {
  constructor(){
    this.notesarray = [];
  }

  getNotes() {
    return this.notesarray;
  }

  addNote(note) {
    this.notesarray.push(note);
  }

  reset() {
    this.notesarray = [];
  }

  setNotes(notes) {
    this.notesarray = notes
  }
}


module.exports = notesModel;