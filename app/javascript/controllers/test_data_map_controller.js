import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  initialize(){
    console.log("initialize called")
  }

  connect() {
    console.log(this)
    console.log("this.data.get(\"check\"): " + this.data.get("check"))
    console.log("this.data.get(\"checkAgain\"): " + this.data.get("checkAgain"))
    console.log("this.data.get(\"attr\"): " + this.data.get("attr"))
  }

  disconnect() {
    console.log("initialize called")
  }
}
