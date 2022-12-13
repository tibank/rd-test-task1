import { showModalNote } from '../modal/showModalNote';
import { Note } from '../../models/note';

export function createNote() {
  const note = new Note();
  showModalNote(note);
}
