const notes = [
  {
    id: 1,
    title: "one",
    body: "hello! hello! hello! hello! hello! hello! hello!",
    updated: "2022-08-05T15:06:49.670Z",
  },
  {
    id: 2,
    title: "two",
    body: "hello!",
    updated: "2022-08-06T15:06:49.670Z",
  },
  {
    id: 3,
    title: "three",
    body: "hello!",
    updated: "2022-08-07T15:06:49.670Z",
  },
];
export default class NotesApi {
  static getAllNotes() {
    const saveNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
    return saveNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  static saveNote(noteToSave) {
    const notes = NotesApi.getAllNotes();
    const existedNotes = notes.find((n) => n.id == noteToSave.id);
    if (existedNotes) {
      existedNotes.title = noteToSave.title;
      existedNotes.body = noteToSave.body;
      existedNotes.updated = new Date().toISOString();
    } else {
      noteToSave.id = new Date().getTime();
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }
  static deleteNote(id) {
    const notes = NotesApi.getAllNotes();
    const filteredNotes = notes.filter((n) => n.id != id);
    localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
  }
}
