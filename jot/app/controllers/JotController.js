import { Jot } from "../models/Jot.js";
import { AppState } from "../AppState.js";
import { jotServices, JotServices } from "../services/JotServices.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";


export class JotController {
  constructor() {
    this.drawJot()
    jotServices.loadJot()
    // AppState.on('Jot', this.drawJot)
    AppState.on('activeJot', this.drawActiveJot)
  }
  drawJot() {
    console.log('Jot')
    const Jot = AppState.Jots
    let jotList = ''
    Jot.forEach(jot => jotList += jot.NotesTemplate)
    const jotListElem = document.getElementById('jot-list')
    const countElem = document.getElementById('jot-count')
    jotListElem.innerHTML = jotList
    countElem.innerText = Jot.length.toString()
  }
  setActiveJot(jotId) {
    console.log('Jots!', jotId)
    const selectedJots = AppState.Jots.find(Jot => Jot.Id == jotId)
    AppState.activeJot = selectedJots
    jotServices.setActiveJot(jotId)
    console.log()


  }
  drawActiveJot() {
    console.log('✏, active jot')
    const activeJot = AppState.activeJot
    const activeElem = document.getElementById('active-jot')
    if (activeJot) {
      const activeContent = activeJot.ActiveJotTemplate
      activeElem.innerHTML = activeContent
    }
    else
      activeElem.innerHTML = ''
  }

  createJot(jotData) {
    const jot = new Jot(jotData)
    AppState.Jots.push(jotData)


  }
  deleteJot(jotID) {
    const confirmed = confirm('Are you sure?')
    console.log("deleted", confirmed)
    if (confirmed == false) return
    jotServices.deleteJot(jotID)
    jotServices.deleteJot()

  }
  saveJot() {
    event.preventDefault()
    console.log('save jot')
    const form = event.target
    const newBody = form.body.value
    console.log('new jot', newBody)
    // @ts-ignore
    jotServices.saveJot(newBody)

  }
}