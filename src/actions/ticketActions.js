import {
    CREATE_TICKET_REQUEST,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAIL,
    ALL_TICKETS_REQUEST,
    ALL_TICKETS_SUCCESS,
    ALL_TICKETS_FAIL,
    TICKET_STATUS_REQUEST,
    TICKET_STATUS_SUCCESS,
    TICKET_STATUS_FAIL,
    ASSIGN_TICKET_REQUEST,
    ASSIGN_TICKET_SUCCESS,
    ASSIGN_TICKET_FAIL,
    EMPLOYEE_TICKET_REQUEST,
    EMPLOYEE_TICKET_SUCCESS,
    EMPLOYEE_TICKET_FAIL,

} from './actionTypes'

import { getAll, createNewTicket, ticketStatus, assignToEmployee, allTicketsOfEmployee } from '../database/database'

export const createTicket = ticket => async dispatch => {
    try {
        dispatch({ type: CREATE_TICKET_REQUEST })

        createNewTicket(ticket)
        dispatch({ type: CREATE_TICKET_SUCCESS, payload: "Ticked created successfully" })

    } catch (err) {
        dispatch({ type: CREATE_TICKET_FAIL, payload: err.message })
    }
}

export const getAllTickets = () => async dispatch => {
    try {
        dispatch({ type: ALL_TICKETS_REQUEST })

        const result = getAll('tickets')
        dispatch({ type: ALL_TICKETS_SUCCESS, payload: result })

    } catch (err) {
        dispatch({ type: ALL_TICKETS_FAIL, payload: err.message })
    }
}

export const changeTicketStatus = (_id, status, setSingleTicket) => async dispatch => {
    try {
        dispatch({ type: TICKET_STATUS_REQUEST })

        ticketStatus(_id, status, 'none', setSingleTicket)
        dispatch({ type: TICKET_STATUS_SUCCESS, payload: 'Status Changed successfully' })
        // dispatch(getAllTickets())

    } catch (err) {
        dispatch({ type: TICKET_STATUS_FAIL, payload: err.message })
    }
}

export const assignTicketToEmployee = (employeeId, ticketId, setSingleTicket) => async dispatch => {
    try {

        dispatch({ type: ASSIGN_TICKET_REQUEST })
        assignToEmployee(employeeId, ticketId, setSingleTicket)
        dispatch({ type: ASSIGN_TICKET_SUCCESS, payload: 'Assignment successfully' })
        // dispatch(getAllTickets())

    } catch (err) {
        console.log(err.message)
        dispatch({ type: ASSIGN_TICKET_FAIL, payload: err.message })
    }
}

export const getAllTicketsOfEmployee = employeeId => async dispatch => {
    try {
        dispatch({ type: EMPLOYEE_TICKET_REQUEST })

        const tickets = allTicketsOfEmployee(employeeId)

        dispatch({ type: EMPLOYEE_TICKET_SUCCESS, payload: tickets })

    } catch (err) {
        console.log(err.message)
        dispatch({ type: EMPLOYEE_TICKET_FAIL, payload: err.message })
    }
}