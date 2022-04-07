class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainer = document.querySelector("#main-container");
    const newNoteBtn = document.querySelector("#add-note-btn");
    const newNoteInput = document.querySelector("#add-note-input");
    const deleteNotesBtn = document.querySelector("#delete-all-btn");
    newNoteBtn.addEventListener("click", () => {
      this.newNote(newNoteInput.value);
      newNoteInput.value = "";
    });
    deleteNotesBtn.addEventListener("click", () => {
      this.api.deleteNotes()
    });
  }

  newNote(note) {
    this.api
      .createNote({ content: note }, () => {
        view.displayError();
      })
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
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";
        noteEl.prepend(deleteBtn);
        deleteBtn.addEventListener("click", () => {
          noteEl.remove();
        });
      });
    });
  }

  displayError() {
    console.log("Error is here");
    this.mainContainer.append("Oops sorry");
  }
}

module.exports = NotesView;
