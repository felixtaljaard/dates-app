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
  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const model = new notesModel();
    const view = new notesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

    const button = document.querySelector('#add-note-btn');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1)
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });
  it('clears the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new notesModel();
    const view = new notesView(model);
    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});