class notesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote){
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {

    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
    this.api.loadNotes(data => {
      this.model.setNotes(data);
      const notes = this.model.getNotes()

      notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
      });
    });
  };
}

module.exports = notesView;