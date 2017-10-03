import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import totalVotesReducer from './resultsform/totalVotesReducer'
import web3Reducer from './util/web3/web3Reducer'

const reducer = combineReducers({
    routing: routerReducer,
    user: userReducer,
    totalVotes: totalVotesReducer,
    web3: web3Reducer
})

export default reducer
