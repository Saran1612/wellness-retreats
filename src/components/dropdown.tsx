import React from 'react';
import Select, { SingleValue } from 'react-select'

interface DropdownProps {
    title: string;
    placeholder: string
    options: { value: string; label: string }[];
    handleTypeChange: (selectedOption: SingleValue<{ value: string; label: string }>) => void;
}


const customStyles = {
    container: (provided: any) => ({
        ...provided,
        width: "100%",
        borderRadius: "6px"
    }),
    control: (provided: any) => ({
        ...provided,
        backgroundColor: '#1B3252',
        color: '#fff',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#fff',
    }),
    menu: (provided: any) => ({
        ...provided,
        backgroundColor: '#1B3252',
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: '#1B3252',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#E0D9CF',
            colors: "#1B3252"
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: '#fff',
    }),
};


const Dropdown = (props: DropdownProps) => {
    const { options, placeholder, handleTypeChange } = props;


    return (
        <Select
            options={options}
            placeholder={placeholder}
            styles={customStyles}
            onChange={handleTypeChange} />
    )
}

export default Dropdown
