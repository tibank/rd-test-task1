import notesHeader from './components/notesHeader.js';
import { initDb } from './services/initNotes.js';
import NoteService from './services/notesService.js';
import { renderListNotes } from './components/listNotes.js';

class App {
    static rootElement = document.getElementById('root');

    static async startApp() {
        initDb();
        App.rootElement.appendChild(notesHeader());
        App.rootElement.appendChild(
            renderListNotes(NoteService.getActiveNotes())
        );
    }
}

export default App;
