// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "target1" ]

  initialize(){
    console.log("initialize called")
    console.log(this.hasTarget1Target)
  }

  connect() {
    console.log(this)
    console.log(this.hasTarget1Target)
    this.target1Targets.forEach((el, i) => {
      el.textContent = 'Hello, Stimulus!'
      console.log(i)
    })
  }

  disconnect() {
    console.log("initialize called")
    console.log(this.hasTarget1Target)
  }

  action1() {
    console.log(this.element)
    this.target1Target.style.display = "none"
  }
}
