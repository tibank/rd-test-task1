export class StatCategories {
  constructor(name, active = 0, archived = 0) {
    this.name = name;
    this.active = active;
    this.archived = archived;
  }

  addNoteToStat(note) {
    if (note.archived) {
      this.archived++;
    } else {
      this.active++;
    }
  }
}
