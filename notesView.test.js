/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const notesView = require('./notesView');
const notesModel = require('./notesModel');

describe('Notes View', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new notesModel();
    const view = new notesView(model);
    model.addNote('Buy milk');
    model.addNote('Get ripped');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});