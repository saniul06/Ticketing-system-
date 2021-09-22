import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from 'react-testing-library';
import employee from '../pages/employeesList'

afterEach(cleanup)

const startingState = {}

function reducer(state = {}, action) {

}

function renderWithRedux(
    component,
    { initialState, store = createStore(render, initialState) } = {}
) {
    return { ...render(<Provider store={store}>{component}</Provider>) }
}