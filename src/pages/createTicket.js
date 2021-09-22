import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { nanoid } from 'nanoid';
import Sidebar from '../components/Sidebar'
import MobileSidebar from '../components/MobileSidebar'
import MetaData from '../components/MetaData'
import { createTicket } from '../actions/ticketActions'
import { TICKET_RESET } from '../actions/actionTypes'

const CreateTicket = () => {

    const dispatch = useDispatch()
    const alert = useAlert()

    const { message, error } = useSelector(state => state.ticket)

    const [ticket, setTicket] = useState({
        type: '',
        productOrServiceName: '',
        details: ''
    })

    const [customer, setCustomer] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        if (message) {
            alert.success(message)
            dispatch({ type: TICKET_RESET })
        }
        if (error) {
            alert.error(error)
            dispatch({ type: TICKET_RESET })
        }

    }, [message, error, alert, dispatch])

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }

    const handleChange = e => {
        if (e.target.name === 'name' || e.target.name === 'email') {
            setCustomer(prev => ({ ...prev, [e.target.name]: e.target.value }))
        } else {
            setTicket(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!ticket.type || !ticket.productOrServiceName || !ticket.details || !customer.name || !customer.email) {
            alert.error('Please fill all the fields')
            return
        }

        const isValid = validateEmail(customer.email)
        if (!isValid) {
            alert.error('Invalid email')
            return
        }

        ticket._id = nanoid(6)
        ticket.customer = customer
        ticket.status = 'issued'
        ticket.assignedTo = null
        ticket.createdAt = Date.now()

        dispatch(createTicket(ticket))
    }

    return (
        <>
            <MetaData title="Create-Ticket" />

            <div className="container-fluid">
                <div className="row">

                    <MobileSidebar createTicket={true} />

                    <div className="p-0 col-sm-3 col-md-2 pt-3 sidebar">
                        <Sidebar createTicket={true} />
                    </div>

                    <div className="col-sm-9 col-md-10 pt-3">

                        <div className='dashboard'>

                            <h2 className='mb-4'>Create new ticket </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="col-sm-4 mb-4">
                                    <label htmlFor="inputPassword" className="col-form-label">Your name</label>
                                    <input type="text" className="form-control" id="inputPassword" name='name' onChange={handleChange} value={customer.name} />

                                </div>

                                <div className="col-sm-4 mb-4">
                                    <label htmlFor="inputPassword" className="col-form-label">Your email</label>
                                    <input type="text" className="form-control" id="inputPassword" name='email' onChange={handleChange} value={customer.email} />

                                </div>

                                <div className="col-sm-4 mb-4">
                                    <label htmlFor="inputPassword" className="col-form-label">Type</label>
                                    <select className="form-select " aria-label=".form-select-sm example" name="type" onChange={handleChange}>
                                        <option value=''>Select</option>
                                        <option value="product">Product</option>
                                        <option value="service">Service</option>
                                    </select>
                                </div>

                                <div className="col-sm-4 mb-4">
                                    <label htmlFor="inputPassword" className="col-form-label">Product or Service name</label>
                                    <input type="text" className="form-control" id="inputPassword" name='productOrServiceName' onChange={handleChange} value={ticket.productOrServiceName} />

                                </div>

                                <div className="col-sm-4 ">
                                    <label htmlFor="inputPassword" className="col-form-label">Details</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='details' onChange={handleChange} value={ticket.details}></textarea>

                                </div>

                                <button className='btn btn-lg btn-primary mt-4'>Create</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTicket


