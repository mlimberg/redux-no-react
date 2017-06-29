const ideas = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      const newState = state.slice()
      newState.push(action.idea)
      state = newState
      return state
    case 'DELETE_IDEA':
      const filteredIdeas = state.filter(idea => idea.id !== action.id)
      state = filteredIdeas
      return state;
    default:
      return state;
  }
}

export default ideas;
