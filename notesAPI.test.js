const NotesApi = require('./notesAPI');
require('jest-fetch-mock').enableMocks()

describe('Notes api class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: "This note is coming from the server"
    }));

    api.loadNotes((note) => {
      expect(note.note).toBe("This note is coming from the server");
    });
  });
});