let initialState = {
  counter: 0,
  showResult: false
};
const reducer = (state = initialState, action) => {
  if (action.type === 'POST_NUMBER') {
    return {
      ...state,
      counter: action.val
    };
  } else if (action.type === 'RECEIVE_RESULT') {
    return {
      ...state,
      showResult: true
    };
  }
  return state;
};

export default reducer;
