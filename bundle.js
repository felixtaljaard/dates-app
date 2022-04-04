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

  // index.js
  var notesModel = require_notesModel();
  var model = new notesModel();
  console.log(model.getNotes());
  console.log("The notes app is running");
})();
