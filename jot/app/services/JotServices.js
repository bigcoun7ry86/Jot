import { AppState } from "../AppState.js";
import { JotController } from "../controllers/JotController.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";
import { Pop } from "../utils/Pop.js";


export class JotServices {
  constructor() {

  }
  setActiveJot(jotId) {
    console.log('Jots!')
    const foundJot = AppState.Jots.find(Jot => Jot.Id == jotId)

    console.log('👆', foundJot)

  }
  saveJot(newBody) {
    const activeJot = AppState.activeJot
    activeJot.body = newBody
    activeJot.updatedAt = new Date()
    this.saveJot()
    AppState.emit('activeJot')
  }

  deleteJot(jotId) {
    const activeJot = AppState.activeJot
    const indexToRemove = AppState.Jots.indexOf(activeJot)
    AppState.activeJot = null
    AppState.Jots.splice(indexToRemove, 1)
    console.log('delete jot', activeJot, indexToRemove)
    this.saveJot()

  }
  createJot(jotData) {
    const jot = new Jot(jotData)
    AppState.Jots.push(jotData)
    console.log('new jot',)
    this.saveJot()
  }
  loadJot() {
    const Jots = loadState('jots', [Jot])
    console.log(Jots)
    // if (Jots.length == 0) {
    //   AppState.emit('jots')
    // }
    // else {
    //   AppState.Jots = Jots
    // }
  }
}
export const jotServices = new JotServices()