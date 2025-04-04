import { JotController } from './controllers/JotController.js';

class App {

  JotController = new JotController() // ☑️ you can remove this - example only

}

window['app'] = new App()


