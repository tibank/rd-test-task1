import { initDb } from './services/initNotes';
import { createWrapper } from './components/list/createWrapper';

class App {
  static rootElement = document.getElementById('root');

  static async startApp() {
    initDb();
    App.rootElement.append(createWrapper());
  }
}

export default App;
