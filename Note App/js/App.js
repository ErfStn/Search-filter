import NotesView from "./NotesView.js";
import NotesApi from "./NotesApi.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
    this._refreshNote();
  }
  _refreshNote() {
    const notes = NotesApi.getAllNotes();
    //set notes
    this._setNotes(notes);
    //set active notes
    if (notes.length > 0) {
      this._setActiveNotes(notes[0]);
    }
  }
  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNoteList(notes);
    this.view.updateNotePreviewVisibility(notes.length > 0);
  }
  _setActiveNotes(note) {
    this.activeNote = note;
    this.view.updateActiveNotes(note);
  }
  _handlers() {
    return {
      onNoteAdd: () => {
        const newNote = {
          title: "New Note",
          body: "Take Some Note",
        };
        NotesApi.saveNote(newNote);
        this._refreshNote();
      },
      onNoteEdit: (newTitle, newBody) => {
        NotesApi.saveNote({
          id: this.activeNote.id,
          title: newTitle,
          body: newBody,
        });
        this._refreshNote();
      },
      onNoteSelect: (noteId) => {
        const selectedNote = this.notes.find((n) => n.id == noteId);
        this._setActiveNotes(selectedNote)
      },
      onNoteDelete: (noteId) => {
        NotesApi.deleteNote(noteId);
        this._refreshNote();
      },
    };
  }
}
