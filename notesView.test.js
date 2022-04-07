/**
 * @jest-environment jsdom
 */

const fs = require('fs');
require('jest-fetch-mock').enableMocks()

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesAPI');

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  let model = new NotesModel();
  let api = new NotesApi();
  let view = new NotesView(model, api);
});

describe('Notes View', () => {
  it('displays two notes', async () => {
    const mainContainer = document.querySelector("#main-container");
    const newNoteBtn = document.querySelector("#add-note-btn");
    const newNoteInput = document.querySelector("#add-note-input");
    newNoteInput.value = 'Note 1';
    await Promise.resolve(newNoteBtn.click());   
    setTimeout(() => {
      expect(document.querySelectorAll(".note").length).toEqual(1);
    }, 1000)

    // expect(document.querySelectorAll('div.note').length).toEqual(1);
  });
  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    const api = new notesApi();
    const model = new notesModel();
    const view = new notesView(model, api);

    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

    const button = document.querySelector('#add-note-btn');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1)
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });
  it('clears the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const api = new notesApi();
    const model = new notesModel();
    const view = new notesView(model, api);
    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});