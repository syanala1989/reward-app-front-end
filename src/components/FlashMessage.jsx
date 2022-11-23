import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

function FlashMessage(props) {
    return (
        <div>
            <Snackbar
                open={props.open}
                autoHideDuration={6000}
                onClose={props.handleClose}
            >
                <Alert
                    onClose={props.handleClose}
                    severity={props.severity}
                >
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default FlashMessage;