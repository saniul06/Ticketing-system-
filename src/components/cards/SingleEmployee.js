import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const SingleEmployee = ({ employee }) => {
    return (
        <tr>
            <td>{employee._id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.isAdmin ? 'Yes' : 'No'}</td>
            <td className='text-center'>{employee.tickets.length}</td>
            <td className='text-center'><Link to={`/employee/${employee._id}`} className='btn btn-sm btn-primary'>View tickets</Link></td>
        </tr>
    )
}

export default memo(SingleEmployee)
