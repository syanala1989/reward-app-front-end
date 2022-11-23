import { React, useState, useEffect, useContext } from 'react';
import TextBox from '../components/TextBox';
import Grid from '@mui/material/Grid';
import Select from '../components/SelectComponent';
import ButtonComponent from '../components/ButtonComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import ProductService from '../api/Services/ProductService';
import CustomerService from '../api/Services/CustomerService';
import TransactionService from '../api/Services/TransactionService';
import { allTransactionTableColumnHeaders } from '../assets/AppConstants';
import Table from '../components/Table';
import FlashMessage from '../components/FlashMessage';
import dayjs from "dayjs";

function AddTransaction(props) {

    const [transaction, setTransaction] = useState({ customerId: '', productId: '', transactionCard: '', transactionDate: null })
    const [customerNames, setCustomerNames] = useState([]);
    const [productNames, setProductNames] = useState([]);
    const [allTransaction, setAllTransaction] = useState([]);
    const [openFlash, setOpenFlash] = useState(false);
    const [customerError, setCustomerError] = useState(false);
    const [productError, setProductError] = useState(false);
    const [cardError, setCardError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handleDateChange = (newValue) => {
        if (dateError == true) setDateError(false);
        setTransaction({ ...transaction, transactionDate: newValue.format('MM/DD/YYYY') });
    };

    const resetError = () => {
        if (productError == true) setProductError(false);
        if (customerError == true) setCustomerError(false);
        if (cardError == true) setCardError(false);
    }

    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenFlash(false);
    }

    const handleChange = (event) => {
        resetError();
        const value = event.target.value;
        setTransaction({ ...transaction, transactionCard: value });
    };

    const handleSelectChange = (event) => {

        const value = event.target.value;
        resetError();
        switch (event.target.name) {
            case "customerId": setTransaction({ ...transaction, customerId: value }); break;
            case "productId": setTransaction({ ...transaction, productId: value }); break;
            default: break
        }
    };

    const addTransaction = () => {

        let error = false;
        
        if (transaction.customerId == '') { setCustomerError(true); error = true; }
        if (transaction.productId == '') { setProductError(true); error = true; }
        if (transaction.transactionCard == '') { setCardError(true); error = true; }
        if (transaction.transactionDate == '' || transaction.transactionDate == null) { setDateError(true); error = true; }
        if (error) { return; }

        TransactionService.createTransaction(transaction).then((response) => {
            setOpenFlash(true);
        });
    }

    useEffect(
        () => {
            ProductService.getProductNameAndId().then((response) => {
                const productNamesTemp = response.data.map(function (item) {
                    return { value: item[0], text: item[1] };
                });

                setProductNames(productNamesTemp);

            });

            CustomerService.getCustomerNameAndId().then((response) => {
                const customerNamesTemp = response.data.map(function (item) {
                    return { value: item[0], text: item[1] };
                });

                setCustomerNames(customerNamesTemp);
            });

            TransactionService.getAllTransactions()
                .then((response) => {
                    const allTransTemp = response.data.map(function (item) {
                        return {
                            customerName: item[0],
                            productName: item[1],
                            transactionCard: item[2],
                            transactionDate: item[3],
                            productAmount: item[4],
                        };
                    });
                    setAllTransaction(allTransTemp);
                });
            setTransaction({ ...transaction, transactionDate: null });
        }, []);

    useEffect(
        () => {
            TransactionService.getAllTransactions()
                .then((response) => {
                    const allTransTemp = response.data.map(function (item) {
                        return {
                            customerName: item[0],
                            productName: item[1],
                            transactionCard: item[2],
                            transactionDate: item[3],
                            productAmount: item[4],
                        };
                    });
                    setAllTransaction(allTransTemp);
                });
        }, []);

    return (
        <div >
            <Grid container spacing={3} direction='row' justifyContent='center'>
                <Grid item xs={4}>
                    <Grid container spacing={3} direction='column' alignItems='center'>
                        <Grid item><h1>Transaction Module</h1></Grid>
                        <Grid item><Select name='customerId' label='Customer' error={customerError} items={customerNames} handleChange={handleSelectChange} > </Select></Grid>
                        <Grid item><Select name='productId' label='Product' error={productError} items={productNames} handleChange={handleSelectChange} > </Select></Grid>
                        <Grid item><TextBox id='transactionCard' error={cardError} label='Card Provider' handleChange={handleChange} /></Grid>
                        <Grid item><DatePickerComponent minDate={dayjs('2022-09-01')} error={dateError} label='TransactionDate' dateValue={transaction.transactionDate} handleChange={handleDateChange}></DatePickerComponent></Grid>
                        <Grid item><ButtonComponent handleChange={addTransaction} variant='contained' name='Add Transaction' /></Grid>
                        <Grid item><FlashMessage open={openFlash} handleClose={handleFlashClose} severity="success" message="Transaction Added!"> </FlashMessage></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Table title='Customer Reward By Transaction' columns={allTransactionTableColumnHeaders} data={allTransaction}></Table>
                </Grid>
            </Grid>
        </div>
    );
}

export default AddTransaction;