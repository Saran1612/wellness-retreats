import { Box } from '@mui/material';
import React, { useState } from 'react';
import Modals from './modal';

interface CardProps {
    image: string;
    title: string;
    description: string;
    location: string;
    price: string;
    date: string;
    cardDetails: any;
}

const Cards = (props: CardProps) => {
    const { image, title, description, location, price, date, cardDetails } = props;

    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div className="bg-[#E0D9CF] rounded-md p-[1rem] h-[325px] shadow-lg cursor-pointer"
                onClick={() => setOpen(true)}
            >
                <Box sx={{ '& img': { width: { xs: "100%", sm: "170px" } } }}>
                    <img src={image} loading="eager" alt={title} className="w-[170px] h-[120px] rounded-xl bg-cover object-cover object-center bg-center" />
                </Box>
                <div className="mt-[1rem] card_content">
                    <h2 className="text-[1rem] font-semibold text-start">{title}</h2>
                    <p className="text-[0.8rem] mt-[0.6rem] text-start description">{description}</p>
                    <p className="text-[0.8rem] mt-[0.3rem] text-start">Date : {date}</p>
                    <p className="text-[0.8rem] mt-[0.3rem] text-start">Location : {location}</p>
                    <p className="text-[0.8rem] mt-[0.3rem] text-start">Price : {price}</p>
                </div>
            </div>

            {open && <Modals cardDetails={cardDetails} open={open} handleClose={handleClose} />}
        </>
    )
}

export default Cards
