class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainer = document.querySelector("#main-container");
    const newNoteBtn = document.querySelector("#add-note-btn");
    const newNoteInput = document.querySelector("#add-note-input");

    newNoteBtn.addEventListener("click", () => {
      this.newNote(newNoteInput.value);
      newNoteInput.value = "";
    });
  }

  newNote(note) {
    this.api
    .createNote({ content: note })
    .then(this.displayNotes());
  }

  displayNotes() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });

    this.api.loadNotes((data) => {
      this.model.setNotes(data);
      const notes = this.model.getNotes();

      notes.forEach((note) => {
        const noteEl = document.createElement("div");
        noteEl.innerText = note;
        noteEl.className = "note";
        this.mainContainer.append(noteEl);
      });
    });
  }
}

module.exports = NotesView;
