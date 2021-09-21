import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getAllEMPLOYEESReducer } from './reducers/employeeReducers'
import { ticketReducer, getAllTicketsReducer } from './reducers/ticketReducers'


const reducers = combineReducers({
    allEmployees: getAllEMPLOYEESReducer,
    ticket: ticketReducer,
    allTickets: getAllTicketsReducer,

})

const initialState = {

}

const middlewares = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store