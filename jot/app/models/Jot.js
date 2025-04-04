import { generateId } from "../utils/GenerateId.js";



export class Jot {
  constructor(data) {
    this.Id = generateId()
    this.color = data.color
    this.title = data.title
    this.body = data.body
    this.createdAt = data.createdAt
    this.updatedAt = data.createdAt


  }
  get NotesTemplate() {
    return /*html*/ `
<div class="col-md-6">
          <h1>${this.title}</h1>
          <p> ${this.body}</p>
          <label for="jumble-body"></label>
          <div>
          <textarea class="form-control" name="body" id=""></textarea>
          </div>
          <button onclick="" class="btn btn-info w-100">Submit</button>
            </div>
`

  }
}




