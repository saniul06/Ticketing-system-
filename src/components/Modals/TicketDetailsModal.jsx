import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TicketDetailsModal = ({ ticketdetails, ticketDetailsModal, ticketDetailsModalclose }) => {

    return (
        <div>
            <Modal
                open={ticketDetailsModal}
                onClose={ticketDetailsModalclose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ul className="list-group list-group-flush overflow">
                            <li className="list-group-item"> <span className='font-weight-bold text-success'>Name</span>: {ticketdetails.name} </li>
                            <li className="list-group-item"> <span className='font-weight-bold text-success'>Email</span>: {ticketdetails.email} </li>
                            <li className="list-group-item"> <span className='font-weight-bold text-success'>Product Or Service Name</span>: {ticketdetails.productOrServiceName} </li>
                            <li className="list-group-item"> <span className='font-weight-bold text-success'>Details</span>: {ticketdetails.details} </li>
                        </ul>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default TicketDetailsModal