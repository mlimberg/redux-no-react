export const buildIdeaNode = (idea) => {
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
