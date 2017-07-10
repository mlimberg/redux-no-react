import Idea from './Idea';
import { addIdea, updateAllIdeas } from '../actions';
import IdeaList from './IdeaList';

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
    const { ideaInput } = this
    const val = ideaInput.value
    const idea = new Idea(val)

    this.addIdea(idea)
    this.clearInput(ideaInput)
  }

  clearInput(element) {
    element.value = ''
  }

  addIdea(idea) {
    return this.store.dispatch(addIdea(idea))
  }

  toggleButton() {
    if (this.ideaInput.value) {
      this.addIdeaButton.removeAttribute('disabled')
    } else {
      this.addIdeaButton.setAttribute('disabled', true)
    }
  }

  getIdeasFromStorage() {
    const ideas = JSON.parse(localStorage.getItem('ideaBox-ideas'))

    this.store.dispatch(updateAllIdeas(ideas))
  }
}
