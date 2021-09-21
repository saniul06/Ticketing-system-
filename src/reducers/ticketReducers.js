import {
    CREATE_TICKET_REQUEST,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAIL,
    TICKET_RESET,
    ALL_TICKETS_REQUEST,
    ALL_TICKETS_SUCCESS,
    ALL_TICKETS_FAIL,
    ALL_TICKETS_RESET,
    TICKET_STATUS_REQUEST,
    TICKET_STATUS_SUCCESS,
    TICKET_STATUS_FAIL,
    ASSIGN_TICKET_REQUEST,
    ASSIGN_TICKET_SUCCESS,
    ASSIGN_TICKET_FAIL,
    EMPLOYEE_TICKET_REQUEST,
    EMPLOYEE_TICKET_SUCCESS,
    EMPLOYEE_TICKET_FAIL,
    EMPLOYEE_TICKET_RESET,
} from '../actions//actionTypes'

export const ticketReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TICKET_REQUEST:
        case TICKET_STATUS_REQUEST:
        case ASSIGN_TICKET_REQUEST:
            return {
                loading: true
            }

        case CREATE_TICKET_SUCCESS:
        case TICKET_STATUS_SUCCESS:
        case ASSIGN_TICKET_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }

        case CREATE_TICKET_FAIL:
        case TICKET_STATUS_FAIL:
        case ASSIGN_TICKET_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case TICKET_RESET:
            return {
                ...state,
                message: false,
                error: false
            }

        default: return state
    }
}

export const getAllTicketsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ALL_TICKETS_REQUEST:
        case EMPLOYEE_TICKET_REQUEST:
            return {
                loading: true
            }

        case ALL_TICKETS_SUCCESS:
        case EMPLOYEE_TICKET_SUCCESS:
            return {
                loading: false,
                tickets: action.payload
            }

        case ALL_TICKETS_FAIL:
        case EMPLOYEE_TICKET_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ALL_TICKETS_RESET:
        case EMPLOYEE_TICKET_RESET:
            return {
                ...state,
                error: false
            }

        default: return state
    }
}