import React from 'react';
import { TextField } from '@mui/material';

function TextBox(props) {
    return (
        <div>
            <TextField className='compWidth'
                required
                inputProps={{ maxLength: props.maxLength }}
                id={props.id} label={props.label}
                onChange={props.handleChange}
                error={props.error}
                helperText={props.error ? 'Invalid Input' : ''}
                variant={props.variant} />

        </div>
    );
}

export default TextBox;