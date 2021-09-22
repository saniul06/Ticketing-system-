import { getAllEMPLOYEESReducer } from '../reducers/employeeReducers'
import { ALL_EMPLOYEES_SUCCESS } from '../actions/actionTypes'
import { employees } from '../database/data'

describe('employee reducer', () => {
    it('Should return default state', () => {
        const newState = getAllEMPLOYEESReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it('should return all employees', () => {
        const newState = getAllEMPLOYEESReducer(undefined, { type: ALL_EMPLOYEES_SUCCESS, payload: employees })
        expect(newState).toEqual({
            loading: false,
            employees: employees
        })
    })
})