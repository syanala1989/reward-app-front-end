import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';

function AmountInput(props) {
    return (
        <div>
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
                className='compWidth'
                id={props.id}
                value={props.value}
                onChange={props.handleChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                error = {props.error}
            />
        </div>
    );
}

export default AmountInput;