(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var notesModel = class {
        constructor() {
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
          this.notesarray = notes;
        }
      };
      module.exports = notesModel;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var notesView = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
          });
        }
        addNewNote(newNote) {
          this.api.createNote((data) => {
            this.model.addNote(newNote);
            this.displayNotes();
          });
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
              this.mainContainerEl.append(noteEl);
            });
          });
        }
      };
      module.exports = notesView;
    }
  });

  // notesAPI.js
  var require_notesAPI = __commonJS({
    "notesAPI.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("https://localhost:8080/").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createNote(callback) {
          fetch("http://localhost:8080/", {
            method: "POST",
            header: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(callback)
          }).then((response) => response.json()).then((data) => callback(data));
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
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
})();
