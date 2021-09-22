import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    p: 4
};

const TicketAssignModal = ({
    open,
    handleClose,
    setEmployeeId,
    employees,
    employeeId,
    ticketId,
    setSingleTicket,
    dispatch,
    assignTicketToEmployee
}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>

                <Typography id="transition-modal-description">

                    <div className="mb-4">
                        <label
                            htmlFor="inputPassword"
                            className="col-form-label">
                            Select employee
                        </label>
                        <select className="form-select " onChange={(e) => setEmployeeId(e.target.value)}>
                            <option value="">Select</option>
                            {employees && employees.map((employee) => (
                                <option key={employee._id} value={employee._id}> {employee.name} </option>
                            )
                            )}
                        </select>
                    </div>

                </Typography>

                <Button
                    variant="contained"
                    size="small"
                    disabled={employeeId ? false : true}
                    onClick={() => {
                        dispatch(assignTicketToEmployee(employeeId, ticketId, setSingleTicket));
                        handleClose();
                    }}>
                    Assign
                </Button>
            </Box>
        </Modal>
    );
};

export default TicketAssignModal;