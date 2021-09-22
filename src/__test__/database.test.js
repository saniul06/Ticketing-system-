import { getAll } from '../database/database'

describe('Do not get anything because of no axios request', () => {
    it('Should return default state', () => {
        const newState = getAll('tickets')
        expect(newState).toEqual("Data is stored in localStorage. So you get nothing")
    })
})