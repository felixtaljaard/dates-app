(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var notesModel2 = class {
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
      };
      module.exports = notesModel2;
    }
  });

  // notesview.js
  var require_notesview = __commonJS({
    "notesview.js"(exports, module) {
      var notesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = notesView2;
    }
  });

  // index.js
  var notesModel = require_notesModel();
  var notesView = require_notesview();
  var model = new notesModel();
  model.addNote("This is an example note");
  var view = new notesView(model);
  view.displayNotes();
})();
