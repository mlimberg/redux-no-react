const ideas = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      const newState = state.slice()
      newState.push(action.idea)
      state = newState
      return state
    case 'DELETE_IDEA':
      console.log('delete!');
    default:
      return state;
  }
}

export default ideas;
