import { getIdeas } from '../store';
import { deleteIdea, updateAllIdeas } from '../actions';
import { buildIdeaNode } from './helpers'

export default class IdeaList {
  constructor(store) {
    this.store = store;
    this.ideaList = document.getElementById('idea-list');
    this.activeIdea = null;
  }

  updateIdeas() {
    const ideas = getIdeas(this.store)

    this.updateStorage(JSON.stringify(ideas))
    this.clearIdeas()

    if(ideas.length) {
      ideas.forEach(idea => this.prependIdea(idea))
    }
  }

  updateStorage(ideas) {
    localStorage.setItem('ideaBox-ideas', ideas)
  }

  editIdea(update) {
    const ideas = getIdeas(this.store)

    const updatedIdeas = ideas.map(idea => {
      if (update.id === idea.id) {
        idea.title = update.val
      }
      return idea
    })

    this.store.dispatch(updateAllIdeas(updatedIdeas))
  }

  clearIdeas() {
    this.ideaList.innerHTML = ''
  }

  prependIdea(idea) {
    const ideaNode = buildIdeaNode(idea)

    this.ideaList.prepend(ideaNode)
    this.addDeleteEvent(idea)
    this.addEditEvent(idea)
  }

  addEditEvent(idea) {
    const title = document.getElementById(idea.id).children[0]

    title.addEventListener('click', (e) => {
      this.activeIdea = idea.id

    })

    title.addEventListener('blur', (e) => {
      this.saveUpdate(e)
    })

    title.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.saveUpdate(e)
      }
    })
  }

  saveUpdate(e) {
    const val = e.target.innerText

    this.editIdea({ id: this.activeIdea, val })
    this.activeIdea = null
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
