import { initDb } from './services/initNotes.js';
import { createWrapper } from './components/createWrapper.js';

class App {
  static rootElement = document.getElementById('root');

  static async startApp() {
    initDb();
    App.rootElement.appendChild(createWrapper());
  }
}

export default App;
