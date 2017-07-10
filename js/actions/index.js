const ADD_IDEA = 'ADD_IDEA'
const DELETE_IDEA = 'DELETE_IDEA'
const UPDATE_ALL = 'UPDATE_ALL'

export const addIdea = idea => {
  return {
    type: ADD_IDEA,
    idea
  }
}

export const deleteIdea = id => {
  return {
    type: DELETE_IDEA,
    id
  }
}

export const updateAllIdeas = ideas => {
  return {
    type: UPDATE_ALL,
    ideas
  }
}
