import { getIdeas } from '../store';
import { deleteIdea } from '../actions';
import { buildIdeaNode } from './helpers'

export default class IdeaList {
  constructor(store) {
    this.store = store;
    this.ideaList = document.getElementById('idea-list')
  }

  updateIdeas() {
    this.clearIdeas()
    const ideas = getIdeas(this.store)

    if(ideas.length) {
      ideas.forEach(idea => this.prependIdea(idea))
    }
  }

  clearIdeas() {
    this.ideaList.innerHTML = ''
  }

  prependIdea(idea) {
    const ideaNode = buildIdeaNode(idea)

    this.ideaList.prepend(ideaNode)
    this.addDeleteEvent(idea)
  }

  addDeleteEvent(idea) {
    const nodeToDelete = document.getElementById(`delete ${idea.id}`)

    nodeToDelete.addEventListener('click', () => {
      this.store.dispatch(deleteIdea(idea.id))
    })
  }

  init() {
    this.store.subscribe(this.updateIdeas.bind(this))
  }
}
