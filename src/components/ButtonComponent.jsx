import React from 'react';
import { Button } from '@mui/material';

function ButtonComonent(props) {
    return (
        <div>
            <Button variant={props.variant} onClick={props.handleChange}>{props.name}</Button>
        </div>
    );
}

export default ButtonComonent;