import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from "./models/Jot.js";

/**@type {import('./models/Jot.js').Jot[]} */
class ObservableAppState extends EventEmitter {
  Jots = [
    new Jot({ color: "🟨", title: ' CSS notes', body: 'This helps to reduce browser inconsistenciesby resetting default browser styles.' }),
    // new Jot({ color: "🟥", title: 'HTML looks', body: 'HTML can be tricky but with practice comes better looking pages.' }),
  ]
  /**@type {Jot}*/
  activeJot = null
}


export const AppState = createObservableProxy(new ObservableAppState())