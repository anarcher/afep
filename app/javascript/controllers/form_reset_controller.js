import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]

  connect() {
    this.element.addEventListener("turbo:submit-end", this.reset.bind(this))
  }

  reset(event) {
    if (event.detail.success) {
      this.inputTargets.forEach(input => {
        input.value = ""
        input.focus()
      })
    }
  }
}