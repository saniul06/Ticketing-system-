import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import {
    assignTicketToEmployee,
    changeTicketStatus
} from '../../actions/ticketActions';
import TicketDetailsModal from '../Modals/TicketDetailsModal';
import TicketAssignModal from '../Modals/TticketAssignModal';

const SingleTicket = ({ ticket, setTicketInfo, list, employees }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => {
        setTicketId(id);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
        setEmployeeId()
    };

    const [ticketDetailsModal, setTicketDetailsModal] = useState(false);
    const ticketDetailsModalOpen = () => setTicketDetailsModal(true);
    const ticketDetailsModalclose = () => setTicketDetailsModal(false);

    const dispatch = useDispatch();

    const [singleTicket, setSingleTicket] = useState({});

    const [ticketId, setTicketId] = useState();

    const [employeeId, setEmployeeId] = useState();

    useEffect(() => {
        setSingleTicket(ticket);
    }, [ticket]);

    return (
        <>
            <tr>
                <td>{singleTicket._id}</td>

                <td>{singleTicket.type}</td>

                <td
                    className={
                        singleTicket && singleTicket.status === 'assigned'
                            ? 'text-info'
                            : singleTicket.status === 'rejected'
                                ? 'text-danger'
                                : singleTicket.status === 'resolved'
                                    ? 'text-success'
                                    : 'text-dark'
                    }>
                    {singleTicket && singleTicket.status}
                </td>

                <td>
                    {singleTicket && singleTicket.assignedTo
                        ? singleTicket.assignedTo
                        : 'Not assigned'}
                </td>

                <td>{new Date(singleTicket.createdAt).toDateString()}</td>

                <td>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={ticketDetailsModalOpen}>
                        Details
                    </button>

                    {list && (
                        <button
                            disabled={
                                singleTicket.status === 'resolved' ||
                                    singleTicket.status === 'assigned'
                                    ? true
                                    : false
                            }
                            className="btn btn-sm btn-secondary"
                            onClick={() => handleOpen(ticket._id)}>
                            Assign
                        </button>
                    )}

                    <button
                        disabled={singleTicket.status === 'resolved' ? true : false}
                        className="btn btn-sm btn-success"
                        onClick={() => dispatch(
                            changeTicketStatus(singleTicket._id, 'resolved', setSingleTicket)
                        )}>
                        Resolve
                    </button>

                    {list && (
                        <button
                            disabled={
                                singleTicket.status === 'assigned' ||
                                    singleTicket.status === 'resolved'
                                    ? true
                                    : false
                            }
                            className="btn btn-sm btn-danger"
                            onClick={() =>
                                dispatch(changeTicketStatus(singleTicket._id, 'rejected', setSingleTicket))
                            }>
                            Reject
                        </button>
                    )}

                </td>
            </tr>


            <TicketAssignModal
                open={open}
                handleClose={handleClose}
                setEmployeeId={setEmployeeId}
                employees={employees}
                employeeId={employeeId}
                ticketId={ticketId}
                setSingleTicket={setSingleTicket}
                dispatch={dispatch}
                assignTicketToEmployee={assignTicketToEmployee}
            />

            <TicketDetailsModal
                ticketDetailsModal={ticketDetailsModal}
                ticketDetailsModalclose={ticketDetailsModalclose}
                ticketdetails={{
                    name: ticket.customer.name,
                    email: ticket.customer.email,
                    productOrServiceName: ticket.productOrServiceName,
                    details: ticket.details
                }}
            />
        </>
    );
};

export default SingleTicket;
