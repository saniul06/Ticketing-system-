import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ dashboard, employeesList, createTicket, ticketsList }) => {
    return (
        <ul className="nav flex-column text-center text-sm-start">
            <li className="nav-item">
                <Link to='/' className={dashboard ? "nav-link sidebar-active" : "nav-link"} aria-current="page">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link to='/employees-list' className={employeesList ? "nav-link sidebar-active" : "nav-link"} href="#">Employees List</Link>
            </li>
            <li className="nav-item">
                <Link to='/tickets-list' className={ticketsList ? "nav-link sidebar-active" : "nav-link"} href="#">Tickets List</Link>
            </li>
            <li className="nav-item">
                <Link to='/create-ticket' className={createTicket ? "nav-link sidebar-active" : "nav-link"} href="#">Create Ticket</Link>
            </li>
        </ul>
    )
}

export default Sidebar
