(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
        setNotes(notes) {
          this.notes = notes;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainer = document.querySelector("#main-container");
          const newNoteBtn = document.querySelector("#add-note-btn");
          const newNoteInput = document.querySelector("#add-note-input");
          const deleteNotesBtn = document.querySelector("#delete-all-btn");
          newNoteBtn.addEventListener("click", () => {
            this.newNote(newNoteInput.value);
            newNoteInput.value = "";
          });
          deleteNotesBtn.addEventListener("click", () => {
            this.api.deleteNotes();
          });
        }
        newNote(note) {
          this.api.createNote({ content: note }, () => {
            view.displayError();
          }).then(this.displayNotes());
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
      };
      module.exports = NotesView2;
    }
  });

  // notesAPI.js
  var require_notesAPI = __commonJS({
    "notesAPI.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback, error) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => callback(data)).catch(() => error());
        }
        async createNote(data = {}, error) {
          const response = await fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).catch(() => error());
          return response.json();
        }
        async deleteNotes() {
          const response = await fetch("http://localhost:3000/notes", {
            method: "DELETE"
          });
          return response.json();
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesAPI();
  var api = new NotesApi();
  var model = new NotesModel();
  var view2 = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view2.displayNotes();
  }, () => {
    view2.displayError();
  });
})();
