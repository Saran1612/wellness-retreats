import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';


interface DateProps {
    title: string;
    value: Dayjs | null;
    onChangeValue: (date: Dayjs | null) => void;
}


const DateComponent = (props: DateProps) => {
    const { title, onChangeValue, value } = props;


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
                label={title}
                value={value}
                onChange={onChangeValue}
            // disableFuture
            />
        </LocalizationProvider>
    );
};

export default DateComponent;