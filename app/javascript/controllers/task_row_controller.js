import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.style.opacity = "0"
    this.element.style.transform = "translateX(-10px)"
    
    // Animate in
    requestAnimationFrame(() => {
      this.element.style.transition = "all 0.3s ease-out"
      this.element.style.opacity = "1"
      this.element.style.transform = "translateX(0)"
    })
  }

  highlight() {
    this.element.classList.add("highlight")
    setTimeout(() => {
      this.element.classList.remove("highlight")
    }, 2000)
  }
}