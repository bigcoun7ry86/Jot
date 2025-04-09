import { Jot } from "../models/Jot.js";
import { AppState } from "../AppState.js";
import { jotServices, JotServices } from "../services/JotServices.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";


export class JotController {
  constructor() {
    AppState.on('Jots', this.drawJots)
    AppState.on('activeJot', this.drawActiveJot)
    this.drawJots()
    this.drawActiveJot()
    jotServices.loadJots()

  }

  drawJots() {
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
    jotServices.setActiveJot(jotId)
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
      activeElem.innerHTML = '<div>SELECT A JOT</div>'
  }

  createJot() {
    event.preventDefault()
    console.log('the form is working?')
    // TODO get the formData
    /** @type {HTMLFormElement} */
    const form = event.target
    console.log(form)
    const jotData = getFormData(form)
    console.log('created', form, jotData)
    jotServices.createJot(jotData)
    form.reset()

    console.log('the new jot?')
    // FIXME move this to the service
    // const jot = new Jot(jotData)
    // AppState.Jots.push(jotData)
  }

  deleteJot(jotID) {
    const confirmed = confirm('Are you sure?')
    console.log("deleted", confirmed)
    if (confirmed == false) return
    jotServices.deleteJot(jotID)
  }

  updateActiveJot() {
    event.preventDefault()
    console.log('save jot')
    const form = event.target
    // @ts-ignore
    const newBody = form.body.value
    console.log('new jot', newBody)
    jotServices.updateActiveJot(newBody)
  }
}