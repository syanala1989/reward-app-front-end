import { React, useState, useEffect } from 'react';
import TextBox from '../components/TextBox';
import ButtonComponent from '../components/ButtonComponent';
import Grid from '@mui/material/Grid';
import CustomerService from '../api/Services/CustomerService';
import Table from '../components/Table';
import { customerTableColumnHeaders } from '../assets/AppConstants';
import ValidationService from '../utils/ValidationService';
import FlashMessage from '../components/FlashMessage';

function AddCustomer(props) {
    const [customer, setCustomer] = useState({ customerName: '', customerLocation: '', customerPhone: '', customerZip: '' })
    const [customerDetais, setCustomerDetails] = useState([]);
    const [phoneError, setphoneError] = useState(false);
    const [zipError, setZipError] = useState(false);
    const [openFlash, setOpenFlash] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [locationError, setLocationError] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        resetError();

        switch (event.target.id) {
            case "customerName":
                setCustomer({ ...customer, customerName: value });
                break;
            case "customerLocation":
                setCustomer({ ...customer, customerLocation: value });
                break;
            case "customerPhone":
                setCustomer({ ...customer, customerPhone: value });
                break;
            case "customerZip":
                setCustomer({ ...customer, customerZip: value });
                break;
        }
    }

    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenFlash(false);
    }

    const resetError = () => {
        if (phoneError == true) setphoneError(false);
        if (zipError == true) setZipError(false);
        if (nameError == true) setNameError(false);
        if (locationError == true) setLocationError(false);
    }

    const addCustomer = () => {
        let error = false;
        if (customer.customerName == '') { setNameError(true); error = true }
        if (customer.customerLocation == '') { setLocationError(true); error = true }
        if (ValidationService.isValidPhoneNumber(customer.customerPhone)) { setphoneError(true); error = true; }
        if (ValidationService.isValidInteger(customer.customerZip)) { setZipError(true); error = true; }
        if (error) return;

        CustomerService.createCustomer(customer).then((response) => {
            setCustomerDetails([...customerDetais, response.data]);
            setOpenFlash(true);
        });
    }

    useEffect(
        () => {
            CustomerService.getAllCustomers().then(
                (response) => setCustomerDetails(response.data)
            );
        }, []);

    return (
        <div >
            <Grid container direction='row'>
                <Grid item xs={4}>
                    <Grid container spacing={3} direction='column' alignItems='center'>
                        <Grid item><h1>Customer Module</h1></Grid>
                        <Grid item><TextBox id='customerName' label='Customer Name' handleChange={handleChange} error={nameError} /></Grid>
                        <Grid item><TextBox id='customerLocation' label='Customer Location' handleChange={handleChange} error={locationError} /></Grid>
                        <Grid item><TextBox id='customerPhone' label='Customer Phone' handleChange={handleChange} error={phoneError} maxLength='10' /></Grid>
                        <Grid item><TextBox id='customerZip' label='Customer Zipcode' handleChange={handleChange} error={zipError} maxLength='5' /></Grid>
                        <Grid item><ButtonComponent variant='contained' name='Add Customer' handleChange={addCustomer} /></Grid>
                        <Grid item><FlashMessage open={openFlash} handleClose={handleFlashClose} severity="success" message="Customer Added!"> </FlashMessage></Grid>

                        <Grid item>  </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Table title='Customer List' columns={customerTableColumnHeaders} data={customerDetais}>
                    </Table>
                </Grid>
            </Grid>
        </div>
    );
}

export default AddCustomer;