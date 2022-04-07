class NotesApi {
  loadNotes(callback, error) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch(() => error())
  };

  async createNote(data = {}) {
    const response = await fetch("http://localhost:3000/notes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}


module.exports = NotesApi;
