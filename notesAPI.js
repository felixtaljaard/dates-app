class NotesApi {
  loadNotes(callback) {
    fetch("https://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }

  createNote(callback) {
    fetch("http://localhost:8080/", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(callback)
    })
      .then((response) => response.json())
      .then((data) => callback(data));
  }
}

module.exports = NotesApi;
