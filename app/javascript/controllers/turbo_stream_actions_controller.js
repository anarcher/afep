import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Register custom Turbo Stream actions
    if (window.Turbo && window.Turbo.StreamActions) {
      window.Turbo.StreamActions.highlight = function() {
        const target = this.getAttribute("target")
        const element = document.getElementById(target)
        if (element) {
          element.classList.add("highlight")
          setTimeout(() => {
            element.classList.remove("highlight")
          }, 2000)
        }
      }
    }
  }
}