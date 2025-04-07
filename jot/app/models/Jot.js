// @ts-nocheck
import { generateId } from "../utils/GenerateId.js";



export class Jot {
  constructor(data) {
    this.Id = data.Id || generateId()
    this.color = data.color
    this.title = data.title
    this.body = data.body || ""
    this.jotNumber = this.title + this.color
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()


  }
  get NotesTemplate() {
    return /*html*/ `
    
    <div class="col">
    <span>Select a Jot</span>
    <div class="btn" role="button" onclick= "app.JotController.setActiveJot('${this.Id}')">
  <li >${this.color}-${this.title}-${this.body}</li></div>
  </div>
  </div>
  
  
            
`

  }
  static get placeHolderActiveJot() {
    return /*html*/``
  }
  get ActiveJotTemplate() {
    return /*html*/ `

      <div class="row d-flex">
      <form class="row" onsubmit="app.JotController.saveJot()">
        <h1>Jot</h1>
        <textarea class="col-md-6 border border-dark" id="active-jot">${this.color}-${this.title}-${this.body}</textarea>
        <button onclick="app.JotController.deleteJot()">Delete</button><button onclick="app.JotController.saveJot()">Save</button>
      </div>
      <div>${this.updatedAt}</div>
    </form>
    `
  }
  get updatedAtDate() {
    // @ts-ignore
    return this.updatedAt.toLocaleTimeString('en-us', { year: 'numeric', month: 'short', day: 'numeric', timeStyle: 'medium' })

  }
}




