const ideas = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      console.log('add!');
    case 'DELETE_IDEA':
      console.log('delete!');
    default:
      return state;
  }
}

export default ideas;
