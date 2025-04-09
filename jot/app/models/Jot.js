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
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
  }

  get NotesTemplate() {
    return /*html*/ `
      <div class="btn" role="button" onclick="app.JotController.setActiveJot('${this.Id}')">
        ${this.color}-${this.title}
      </div>
    `
  }

  static get placeHolderActiveJot() {
    return /*html*/``
  }

  get ActiveJotTemplate() {
    return /*html*/ `

      <div class="row d-flex">
      <form class="row" onsubmit="app.JotController.updateActiveJot()">
        <p>${this.color}-${this.title}-</p>
        <textarea class="col-md-6 border border-dark" name="body">${this.body}</textarea>
        <button type="button" onclick="app.JotController.deleteJot()">Delete</button>
        <button type="submit">Save</button>
        <!-- TODO add the createdAt Date and format it -->
        <div>
          ${this.updatedAtDate}
        </div>
      </form>
    </div>
    `
  }

  get createdJotTemplate() {

    return /*html*/ `
    
    <div class="col-md-8 m-auto">
        <div class="card">
          <div class="card-body">
            <h4 class="text-center"> Jot</h4>
            <div class="input-group">
              <select name="form" name="color" id="color-picker">
                <option value="🟥 Red">🟥 Red</option>
                <option value="🟨 Yellow">🟨 Yellow</option>
                <option value="🟩 Green">🟩 Green</option>
                <option value="🟦 Blue">🟦 Blue</option>
                <option value="🟪 Purple">🟪 Purple</option>
              </select>
            </div>
            <div class="form-floating mb-3">
              
              <input type="text" class="form-control" placeholder="Name" name="name" required minlength="3"
                maxlength="15">
              <label for="name">Title</label>
            </div>
            <button class="btn btn-warning w-100" type="submit">create <i class=" mdi mdi-arrow-right"></i></button>
            <div>${this.createdAt}</div>
          </div>
          </div>
        </div>
    
    
    
    `
  }
  get jotCountElem() {
    return /*html*/ `
  
  
  
  `
  }
  get updatedAtDate() {
    return this.updatedAt.toLocaleString('en-us')
  }
  createdAt() {
    return this.createdAt.toString('en-us')
  }
}




