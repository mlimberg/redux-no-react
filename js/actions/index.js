const ADD_IDEA = 'ADD_IDEA'

export function addIdea(idea) {
  return {
    type: ADD_IDEA,
    idea
  }
}
