import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import Sidebar from '../components/Sidebar'
import MobileSidebar from '../components/MobileSidebar'
import MetaData from '../components/MetaData'
import SingleTicket from '../components/cards/SingleTicket'
import { getAllEmployees } from '../actions/employeeActions'
import { getAllTickets, changeTicketStatus, assignTicketToEmployee } from '../actions/ticketActions'
import { ALL_EMPLOYEES_RESET, ALL_TICKETS_RESET, TICKET_RESET } from '../actions/actionTypes'

const initialState = {
    name: '',
    email: '',
    productOrServiceName: '',
    details: ''
};


const EmployeeList = () => {

    const dispatch = useDispatch()
    const alert = useAlert()

    const ticketFunction = useRef()

    const { loading: employeesLoading, employees, error: employeesError } = useSelector(state => state.allEmployees)
    const { loading: ticketsLoading, tickets, error: ticketsError } = useSelector(state => state.allTickets)
    const { loading: ticketStatusLoading, message, error: ticketStatusError } = useSelector(state => state.ticket)

    const [allTickets, setAllTickets] = useState()

    const [ticketdetails, setTicketDetails] = useState(initialState)

    const setTicketInfo = useCallback((ticket) => {
        setTicketDetails({
            name: ticket.customer.name,
            email: ticket.customer.email,
            productOrServiceName: ticket.productOrServiceName,
            details: ticket.details
        })
    }, [])

    useEffect(() => {
        dispatch(getAllEmployees())
        dispatch(getAllTickets())
    }, [])

    console.log(tickets)

    // useEffect(() => {
    //     if (tickets) {
    //         setAllTickets(tickets)
    //     }
    // }, [tickets])

    useEffect(() => {
        if (employeesError) {
            alert.error(employeesError)
            dispatch({ type: ALL_EMPLOYEES_RESET })
        }

        if (ticketsError) {
            alert.error(ticketsError)
            dispatch({ type: ALL_TICKETS_RESET })
        }

        if (ticketStatusError) {
            alert.error(ticketStatusError)
            dispatch({ type: TICKET_RESET })
        }

        if (message) {
            alert.success(message)
            dispatch({ type: TICKET_RESET })
        }

    }, [employeesError, ticketsError, ticketStatusError, message, alert, dispatch])


    return (
        <>
            <MetaData title="Tickets-List" />

            <div className="container-fluid">

                <div className="row" style={{ position: 'relative' }}>

                    <MobileSidebar ticketsList={true} />

                    <div className="p-0 col-sm-3 col-md-2 pt-3 sidebar">
                        <Sidebar ticketsList={true} />
                    </div>

                    <div className="col-sm-9 col-md-10 pt-3">
                        <div className="dashboard">
                            <h2 className='mb-4'>All Tickets </h2>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <td>id</td>
                                            <td>type</td>
                                            <td>status</td>
                                            <td>assignedTo</td>
                                            <td>createdAt</td>
                                            <td>Actions</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {

                                            tickets && tickets.map(ticket => (
                                                <SingleTicket
                                                    key={ticket._id}
                                                    ticket={ticket}
                                                    setTicketInfo={setTicketInfo}
                                                    changeTicketStatus={changeTicketStatus}
                                                    list={true}
                                                    employees={employees}
                                                />
                                            ))

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
