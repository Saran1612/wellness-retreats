import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Buttons from './button';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
    const { currentPage, totalPages, onPageChange } = props;

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <>
            <Buttons
                label="previous"
                text="Previous"
                style={{ color: "#fff" }}
                startIcon={<ArrowLeftIcon />}
                className=""
                disabled={currentPage === 1}
                onClick={handlePrevious}
            />
            <Buttons
                label="next"
                text="Next"
                size="medium"
                style={{ color: "#fff" }}
                onClick={handleNext}
                endIcon={<ArrowRightIcon />}
                className=""
                disabled={currentPage === totalPages}
            />
        </>
    );
};

export default Pagination;
