import {
    ALL_EMPLOYEES_REQUEST,
    ALL_EMPLOYEES_SUCCESS,
    ALL_EMPLOYEES_FAIL,
    ALL_EMPLOYEES_RESET
} from '../actions//actionTypes'

export const getAllEMPLOYEESReducer = (state = [], action) => {
    switch (action.type) {
        case ALL_EMPLOYEES_REQUEST:
            return {
                loading: true
            }

        case ALL_EMPLOYEES_SUCCESS:
            return {
                loading: false,
                employees: action.payload
            }

        case ALL_EMPLOYEES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ALL_EMPLOYEES_RESET:
            return {
                ...state,
                error: false
            }

        default: return state
    }
}