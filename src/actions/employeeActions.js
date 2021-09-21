import {
    ALL_EMPLOYEES_REQUEST,
    ALL_EMPLOYEES_SUCCESS,
    ALL_EMPLOYEES_FAIL
} from './actionTypes'

import {getAll} from '../database/database'

export const getAllEmployees = () => async dispatch => {
    try {
        dispatch({ type: ALL_EMPLOYEES_REQUEST })

        const result = getAll('employees')
        dispatch({ type: ALL_EMPLOYEES_SUCCESS, payload: result })

    } catch (err) {
        dispatch({ type: ALL_EMPLOYEES_FAIL, payload: err.message })
    }
}