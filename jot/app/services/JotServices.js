import { AppState } from "../AppState.js";
import { JotController } from "../controllers/JotController.js";
import { Jot } from "../models/Jot.js";
import { Pop } from "../utils/Pop.js";
import { loadState } from "../utils/Store.js";


export class JotServices {

  setActiveJot(jotId) {
    console.log('Jots!')
    const foundJot = AppState.Jots.find(Jot => Jot.Id == jotId)
    AppState.activeJot = foundJot
    console.log('👆', foundJot)
  }

  updateActiveJot(newBody) {
    const activeJot = AppState.activeJot
    activeJot.body = newBody
    activeJot.updatedAt = new Date()
    AppState.emit('activeJot')
    this.saveJots()
  }

  deleteJot(jotId) {
    const activeJot = AppState.activeJot
    const indexToRemove = AppState.Jots.indexOf(activeJot)
    AppState.activeJot = null
    AppState.Jots.splice(indexToRemove, 1)
    console.log('delete jot', activeJot, indexToRemove)
    this.saveJots()

  }
  createJot(jotData) {
    const jot = new Jot(jotData)
    AppState.Jots.push(jotData)
    console.log('new jot', jot)
    AppState.Jots.unshift(jot)
    this.saveJots()
  }

  saveJots() {
    // TODO
    // save all of your appstate jots to localstorageF 
    const jot = AppState.Jots
    const jotString = JSON.stringify(jot)
    console.log('jot string', jotString)
    localStorage.setItem('jot_list', jotString)
    console.log('saveState', jot)
  }

  loadJots() {
    // const Jots = loadState('jots', [Jot])
    console.log(Jot)
    const jotString = localStorage.getItem('jot_list')
    const jotData = JSON.parse(jotString)
    if (jotData == null) return
    const Jots = jotData.map(jotData => new Jot(jotData))
    AppState.Jots = Jots



    // if (Jots.length == 0) {
    //   AppState.emit('jots')
    // }
    // else {
    // }
  }
}
export const jotServices = new JotServices()