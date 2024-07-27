
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#E0D9CF',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
};

interface ModalProps {
    cardDetails: any,
    open: boolean
    handleClose: () => void;
}

const Modals = (props: ModalProps) => {
    const { open, cardDetails, handleClose } = props
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ width: "100%", '& img': { width: { xs: "100%", sm: "300px" } } }}>
                    <img src={cardDetails.image} loading="eager" alt={cardDetails.title} className="h-[180px] rounded-xl bg-cover object-cover object-center bg-center" />
                </Box>
                <div className="mt-[1rem] w-full">
                    <h2 className="text-[1rem] font-semibold text-start">{cardDetails.title}</h2>
                    <p className="text-[0.8rem] mt-[0.6rem] text-start">{cardDetails.description}</p>
                    <p className="text-[0.8rem] mt-[0.3rem] text-start">Date : {cardDetails.date}</p>
                    <p className="text-[0.8rem] mt-[0.3rem] text-start">Location : {cardDetails.location}</p>
                    <p className="text-[0.8rem] mt-[0.3rem] text-start">Price : {cardDetails.price}</p>
                </div>
            </Box>
        </Modal>
    )
}

export default Modals
