import Idea from './Idea';

export default class Form {
  constructor(store) {
    this.store = store
    this.addIdeaButton = document.getElementById('add-idea-btn')
    this.ideaInput = document.getElementById('idea-input')
  }

  addEvents() {
    this.ideaInput.addEventListener('keydown', (e) => {
      if (this.ideaInput.value && e.keyCode === 13) {
        this.handleSubmit()
      }
    })

    this.addIdeaButton.addEventListener('click', this.handleSubmit.bind(this))

    this.ideaInput.addEventListener('keyup', this.toggleButton.bind(this))
  }

  handleSubmit() {
    const { ideaInput, addIdea, clearInput } = this
    const idea = ideaInput.value

    addIdea(idea)
    clearInput(ideaInput)
  }

  clearInput(element) {
    element.value = ''
  }

  addIdea(val) {
    const idea = new Idea(val)
    console.log(idea);
    // ideas.push(idea)
    // updateIdeas()
  }

  toggleButton() {
    if (this.ideaInput.value) {
      this.addIdeaButton.removeAttribute('disabled')
    } else {
      this.addIdeaButton.setAttribute('disabled', true)
    }
  }


}
