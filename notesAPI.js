class NotesApi {
  loadNotes(callback){
    fetch('https://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        callback(data)
    });
  }
}
  
module.exports = NotesApi
