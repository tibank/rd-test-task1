import notesHeader from './components/notesHeader.js';
class App {
  static rootElement = document.getElementById('root');

  static async startApp() {
    App.rootElement.appendChild(notesHeader());
  }
}

export default App;
