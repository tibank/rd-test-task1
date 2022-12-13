export class LocalStorageService {
  static getNotesFromLocalStorage() {
    let notes = [];
    const listNotes = localStorage.getItem('ListNotes');
    if (!listNotes) {
      throw new Error('There is no data in LocalStorage');
    }

    try {
      notes = JSON.parse(listNotes, (key, value) => {
        if (key === 'created') {
          return new Date(value);
        } else {
          return value;
        }
      });
    } catch (error) {
      throw error;
    }

    return notes;
  }

  static saveNotesToLocalStorage(data) {
    localStorage.setItem('ListNotes', JSON.stringify(data));
  }
}
