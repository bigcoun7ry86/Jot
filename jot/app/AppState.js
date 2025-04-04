import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /**@type {import('./models/Jot.js').Jot[]} */
  Jots = [

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())