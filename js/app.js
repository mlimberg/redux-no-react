import '../css/reset.scss'
import '../css/app.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'waypoints';
import 'scrollTo';

const addIdeaButton = document.getElementById('add-idea-btn')
const ideaInput = document.getElementById('idea-input')
let ideas = [];

addIdeaButton.addEventListener('click', () => {
  handleSubmit()
})

window.addEventListener('keydown', (e) => {
  if (ideaInput.value && e.keyCode === 13) {
    handleSubmit()
  }
})

ideaInput.addEventListener('keyup', () => {
  ideaInput.value ? enableButton() : disableButton()
})

function enableButton() {
  addIdeaButton.removeAttribute('disabled')
}

function disableButton() {
  addIdeaButton.setAttribute('disabled', true)
}

function handleSubmit() {
  const idea = ideaInput.value

  addIdea(idea)
  clearInput(ideaInput)
}

function clearInput(element) {
  element.value = '';
}

function Idea(idea) {
  this.title = idea;
  this.id = Date.now()
  this.delete = function() {
    removeIdea(this.id)
  }
}

function removeIdea(id) {
  const updatedIdeas = ideas.filter(idea => idea.id !== id)

  ideas = updatedIdeas;

  updateIdeas()
}

function addIdea(val) {
  const idea = new Idea(val)
  ideas.push(idea)
  updateIdeas()
}

function clearIdeas() {
  const ideaList = document.getElementById('idea-list')
  ideaList.innerHTML = ''
}

function updateIdeas() {
  clearIdeas()
  ideas.forEach(idea => prependIdea(idea))
}

function buildIdeaNode(idea) {
  const newDiv = document.createElement('div')
  const newTitle = document.createElement('h3', { contenteditable: true })
  const newButton = document.createElement('button')
  newTitle.append(idea.title)
  newTitle.contenteditable = true;
  newButton.append('X')
  newButton.id = `delete ${idea.id}`
  newButton.className = 'delete-btn'
  newDiv.appendChild(newTitle)
  newDiv.appendChild(newButton)
  newDiv.id = idea.id
  newDiv.className = 'idea-card'

  return newDiv
}

function addDeleteEvent(idea) {
  const deleteID = document.getElementById(`delete ${idea.id}`)

  deleteID.addEventListener('click', (e) => {
    idea.delete()
  })
}

function prependIdea(idea) {
  const ideaList = document.getElementById('idea-list')
  const ideaNode = buildIdeaNode(idea)

  ideaList.prepend(ideaNode)
  addDeleteEvent(idea)
}
