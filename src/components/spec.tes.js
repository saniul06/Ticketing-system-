import React from 'react'
import { shallow } from 'enzyme'
import EmployeeList from '../pages/employeesList'

import { BrowserRouter } from 'react-router-dom'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import store from '../store'
import TTT from './ttt'

// const layout = () => (
//     <Provider store={store}>
//         <AlertProvider template={AlertTemplate} >
//             <BrowserRouter>
//                 <EmployeeList />
//             </BrowserRouter>
//         </AlertProvider>
//     </Provider >
// )


// describe('Employees Component', () => {
//     it('should be rendered', () => {
//         const c = shallow(
//             <Provider store={store}>
//                 <AlertProvider template={AlertTemplate} >
//                     <BrowserRouter>
//                         <EmployeeList />
//                     </BrowserRouter>
//                 </AlertProvider>
//             </Provider >
//         )
//         const aa = shallow(<Provider store={store}><EmployeeList /></Provider>)
//         // console.log(aa.debug())
//         const d = shallow(<TTT />)
//         console.log(d.debug())
//         const wrapper = aa.find('.asd')
//         expect(wrapper.length).toBe(1)
//         // expect(wrapper.length).toBe(1)
//     })
// })