import {
    ALL_EMPLOYEES_REQUEST,
    ALL_EMPLOYEES_SUCCESS,
    ALL_EMPLOYEES_FAIL
} from './actionTypes'

export const getAllEmployees = () => async dispatch => {
    try {
        dispatch({ type: ALL_EMPLOYEES_REQUEST })

        const result = JSON.parse(localStorage.getItem('employees'))
        dispatch({ type: ALL_EMPLOYEES_SUCCESS, payload: result })

    } catch (err) {
        dispatch({ type: ALL_EMPLOYEES_FAIL, payload: err.message })
    }
}