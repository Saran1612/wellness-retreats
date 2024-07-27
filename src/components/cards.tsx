import { Box } from '@mui/material';
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
    location: string;
    price: string;
    date: string;
}

const Cards = (props: CardProps) => {
    const { image, title, description, location, price, date } = props;
    return (
        <div className="bg-[#E0D9CF] rounded-md p-[1rem] h-[325px] shadow-lg cursor-pointer"
        // onClick={ }
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
    )
}

export default Cards
