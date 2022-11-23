import React from 'react';
import customerLogo from '../assets/images/customer.jpg';
import productLogo from '../assets/images/product.png';
import rewardLogo from '../assets/images/reward.png';
import transactionLogo from '../assets/images/transaction.png';
import '../App.css';
import CategoryContainer from '../components/CategoryContainer';
import { Grid } from '@mui/material';


function Header(props) {
    const updateLayout = (layout1) => {
        props.setLayout(layout1);
    }
    return (
        <div>
            <header className="App-header">
                <Grid container spacing={5}>
                    <Grid onClick={() => updateLayout(0)} item xs={3}>
                        <CategoryContainer imageUrl={customerLogo} mainHeader="Customers" caption="Add and view Customers" />
                    </Grid>
                    <Grid onClick={() => updateLayout(1)} item xs={3}>
                        <CategoryContainer imageUrl={productLogo} mainHeader="Products" caption="Add and view Products" />
                    </Grid>
                    <Grid onClick={() => updateLayout(2)} item xs={3}>
                        <CategoryContainer imageUrl={transactionLogo} mainHeader="Transactions" caption="Add and view Transactions" />
                    </Grid>
                    <Grid onClick={() => updateLayout(3)} item xs={3}>
                        <CategoryContainer imageUrl={rewardLogo} mainHeader="Reward Dashboard" caption="Customer Rewards by month" />
                    </Grid>
                </Grid>

            </header>
        </div>
    );
}

export default Header;