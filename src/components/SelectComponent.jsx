import React from 'react';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { width } from '@mui/system';


function SelectComponent(props) {
    const selectOptions = props.items;

    return (
        <div>
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                name={props.name}
                className='compWidth'
                id={props.id}
                value={props.value}
                label={props.label}
                onChange={props.handleChange}
                error = {props.error}
            >
                {typeof selectOptions !== 'undefined' && selectOptions.map(option => <MenuItem value={option.value}>{option.text}</MenuItem>)}
            </Select>
        </div>
    );
}

export default SelectComponent;