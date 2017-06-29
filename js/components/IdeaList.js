import { getIdeas } from '../store';
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

  addDeleteEvent() {
    console.log('delete event added!');
  }

  init() {
    this.store.subscribe(this.updateIdeas.bind(this))
  }
}
