import { employees, tickets } from './data'

const loadDatabase = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('tickets', JSON.stringify(tickets))
}

export const getAll = name => {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name))
    } else {
        return 'Data is stored in localStorage. So you get nothing'
    }

}

export const createNewTicket = ticket => {
    const tickets = JSON.parse(localStorage.getItem('tickets'))
    tickets.push(ticket)
    localStorage.setItem('tickets', JSON.stringify(tickets))
}

export const ticketStatus = (_id, ticketStatus, employeeId, setSingleTicket) => {
    const tickets = JSON.parse(localStorage.getItem('tickets'))
    const changedArray = tickets.map(item => {
        if (item._id === _id) {
            item.status = ticketStatus
            if (employeeId !== 'none') {
                item.assignedTo = employeeId
            }
            if (ticketStatus === 'rejected') {
                item.assignedTo = null
            }
            setSingleTicket(item)
            return item
        }
        return item
    }
    )

    localStorage.setItem('tickets', JSON.stringify(changedArray))
}

export const assignToEmployee = (employeeId, ticketId, setSingleTicket) => {


    const allTickets = getAll('tickets')
    const ticket = allTickets.find(ticket => ticket._id === ticketId)
    const employees = getAll('employees')
    const changedArray = employees.map(item => {
        if (item._id === employeeId) {
            item.tickets.push(ticket)

            return item
        }
        return item
    })
    ticketStatus(ticketId, 'assigned', employeeId, setSingleTicket)
    localStorage.setItem('employees', JSON.stringify(changedArray))
}

export const allTicketsOfEmployee = employeeId => {
    const allTickets = getAll('tickets')
    const allEmployeeTickets = allTickets.filter(item => item.assignedTo && item.assignedTo.toString() === employeeId.toString())
    return allEmployeeTickets
}

export default loadDatabase