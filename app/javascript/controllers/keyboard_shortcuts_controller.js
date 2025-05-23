import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.addEventListener("keydown", this.handleKeydown.bind(this))
  }

  disconnect() {
    document.removeEventListener("keydown", this.handleKeydown.bind(this))
  }

  handleKeydown(event) {
    // Focus on task input when pressing 'n' (new task)
    if (event.key === "n" && !this.isInputFocused()) {
      event.preventDefault()
      const input = document.querySelector("#new_task_form input[type='text']")
      if (input) {
        input.focus()
      }
    }
    
    // Submit form with Cmd/Ctrl + Enter
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      const input = document.querySelector("#new_task_form input[type='text']")
      if (input && input === document.activeElement && input.value.trim()) {
        const form = input.closest("form")
        if (form) {
          form.requestSubmit()
        }
      }
    }
  }

  isInputFocused() {
    const activeElement = document.activeElement
    return activeElement && (
      activeElement.tagName === "INPUT" || 
      activeElement.tagName === "TEXTAREA" ||
      activeElement.contentEditable === "true"
    )
  }
}