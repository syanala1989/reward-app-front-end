import { useState, React } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';

function DatePickerComponent(props) {

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    className='compWidth'
                    label={props.label}
                    inputFormat="MM/DD/YYYY"
                    value={props.dateValue}
                    onChange={props.handleChange}
                    renderInput={(params) => <TextField {...params} error={props.error } helperText={props.error ? 'Invalid Date' : ''} />}
                    minDate={props.minDate} 
                    onError
                />
            </LocalizationProvider>
        </div>
    );
}

export default DatePickerComponent;