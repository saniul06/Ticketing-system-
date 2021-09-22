import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import SingleEmployee from '../components/cards/SingleEmployee'
import Sidebar from '../components/Sidebar'
import MobileSidebar from '../components/MobileSidebar'
import MetaData from '../components/MetaData'
import { getAllEmployees } from '../actions/employeeActions'
import { ALL_EMPLOYEES_RESET } from '../actions/actionTypes'

const EmployeeList = () => {

    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, employees, error } = useSelector(state => state.allEmployees)

    useEffect(() => {
        dispatch(getAllEmployees())
    }, [])

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: ALL_EMPLOYEES_RESET })
        }
    }, [error, alert, dispatch])

    return (
        <>
            <MetaData title="Employees-List" />

            <div className="container-fluid">

                <div className="row" style={{ position: 'relative' }}>

                    <MobileSidebar employeesList={true} />

                    <div className="p-0 col-sm-3 col-md-2 pt-3 sidebar">
                        <Sidebar employeesList={true} />
                    </div>

                    <div className="col-sm-9 col-md-10 pt-3">
                        <div className="dashboard">
                            <h2 className='mb-4'>All Employees </h2>
                            <div className="table-responsive">
                                <table className="table table-hover">

                                    <thead className="table-dark">
                                        <tr>
                                            <td>_id</td>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td>isAdmin</td>
                                            <td>Tickets</td>
                                            <td>View tickets</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            loading ? <span>loading</span> : (
                                                employees && employees.map(employee => (
                                                    <SingleEmployee
                                                        key={employee._id}
                                                        employee={employee}
                                                    />
                                                ))
                                            )
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EmployeeList
