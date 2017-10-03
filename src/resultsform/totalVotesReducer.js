const initialState = {
  data: null
}

const totalVotesReducer = (state = initialState, action) => {
  if (action.type === 'TOTAL_VOTES')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }
  return state
}

export default totalVotesReducer
