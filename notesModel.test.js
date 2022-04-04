const notesModel = require('./notesModel')

describe('Notes', () => {
  it('can get notes', () => {
    const sut = new notesModel();
    expect(sut.getNotes()).toEqual([]);
  });
  it('can add notes', () => {
    const sut = new notesModel();
    sut.addNote('Buy milk');
    expect(sut.getNotes()).toEqual(['Buy milk']);
  });
  it('can reset the list of notes', () => {
    const sut = new notesModel();
    sut.addNote('Buy milk');
    sut.reset();
    expect(sut.getNotes()).toEqual([]);
  });
});