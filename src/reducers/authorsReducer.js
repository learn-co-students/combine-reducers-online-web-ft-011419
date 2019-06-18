import uuid from 'uuid';

function authorsReducer(state= [], action){
    let idx;
    switch (action.type) {
      case "ADD_AUTHOR":
        return [...state, action.author];
        
  
      case "REMOVE_AUTHOR":
        idx = state.indexOf(action.id);
        return [
            ...state.authors.slice(0, idx),
            ...state.authors.slice(idx + 1)
          ];
  
      default:
        return state;
      }
  };

  export default authorsReducer;