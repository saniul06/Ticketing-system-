import React from 'react';
import ReactDom from 'react-dom'
import EmployeeList from '../pages/employeesList'
import { BrowserRouter } from 'react-router-dom'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import store from '../store'


it('render', () => {
    const div = document.createElement('div')
    ReactDom.render(<Provider store={store}>
        <AlertProvider template={AlertTemplate} >
            <BrowserRouter>
                <EmployeeList />
            </BrowserRouter>
        </AlertProvider>
    </Provider >, div)
})