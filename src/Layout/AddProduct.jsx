import { React, useState, useEffect } from 'react';
import TextBox from '../components/TextBox';
import ButtonComponent from '../components/ButtonComponent';
import Grid from '@mui/material/Grid';
import AmountInput from '../components/AmountInput';
import DatePickerComponent from '../components/DatePickerComponent';
import ProductService from '../api/Services/ProductService';
import { productTableColumnHeaders } from '../assets/AppConstants';
import Table from '../components/Table';
import DataFormatService from '../utils/DataFormatService';
import FlashMessage from '../components/FlashMessage';


function AddProduct(props) {
    const [product, setProduct] = useState({ productName: '', productAmount: '', productProvider: '', productExpiry: new Date() })
    const [productDetais, setProductDetails] = useState([]);
    const [reloadGrid, setReloadGrid] = useState(false);
    const [openFlash, setOpenFlash] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [providerError, setProviderError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handleDateChange = (newValue) => {
        if (dateError == true) setDateError(false);
        setProduct({ ...product, productExpiry: newValue });
    };

    const handleFlashClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenFlash(false);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        resetError();
        switch (event.target.id) {
            case "productName":
                setProduct({ ...product, productName: value }); break;
            case "productAmount":
                setProduct({ ...product, productAmount: value }); break;
            case "productProvider":
                setProduct({ ...product, productProvider: value }); break;
            default: break
        }
    };

    const resetError = () => {
        if (nameError == true) setNameError(false);
        if (providerError == true) setProviderError(false);
        if (amountError == true) setAmountError(false);
    }

    useEffect(
        () => {
            ProductService.getAllProducts().then(
                (response) => setProductDetails(response.data)
            );
            setProduct({ ...product, productExpiry: null });
        }, []);

    const addProduct = () => {
        setReloadGrid(false);

        let error = false;
        if (product.productName == '') { setNameError(true); error = true }
        if (product.productProvider == '') { setProviderError(true); error = true }
        if (product.productAmount == '') { setAmountError(true); error = true }
        if (product.productExpiry == '' || product.productExpiry == null) { setDateError(true); error = true; }

        if (error) { return }


        ProductService.createProduct(product).then((response) => {
            setProductDetails([...productDetais, response.data]);
            setOpenFlash(true);
            setReloadGrid(true);
        });
    }

    return (
        <div >
            <Grid container direction='row' >
                <Grid item xs={4}>
                    <Grid container spacing={3} direction='column' alignItems='center' reloadGrid={reloadGrid}>
                        <Grid item><h1>Product Module</h1></Grid>
                        <Grid item><TextBox id='productName' handleChange={handleChange} error={nameError} label='Product Name' /></Grid>
                        <Grid item><TextBox id='productProvider' handleChange={handleChange} error={providerError} label='Product Provider' /></Grid>
                        <Grid item><AmountInput id='productAmount' handleChange={handleChange} error={amountError} label='Product Price' /></Grid>
                        <Grid item><DatePickerComponent error={dateError} label='Expire Date' dateValue={product.productExpiry} handleChange={handleDateChange}></DatePickerComponent></Grid>
                        <Grid item><ButtonComponent variant='contained' handleChange={addProduct} name='Add Product' /></Grid>
                        <Grid item><FlashMessage open={openFlash} handleClose={handleFlashClose} severity="success" message="Product Added!"> </FlashMessage></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Table title='Product List' columns={productTableColumnHeaders} data={productDetais}>
                    </Table>
                </Grid>
            </Grid>
        </div>
    );
}

export default AddProduct;