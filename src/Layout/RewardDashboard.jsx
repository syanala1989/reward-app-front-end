import { React, useEffect, useState } from 'react';
import TextBox from '../components/TextBox';
import Grid from '@mui/material/Grid';
import Select from '../components/SelectComponent';
import CustomerService from '../api/Services/CustomerService';
import TransactionService from '../api/Services/TransactionService';
import { transactionTableColumnHeaders, transactionByMonthTableColumnHeaders } from '../assets/AppConstants';
import Table from '../components/Table';
import DataFormatService from '../utils/DataFormatService';

function RewardDashboard(props) {

    const [customerNames, setCustomerNames] = useState([]);
    const [customerTransactions, setCustomerTransactions] = useState([]);
    const [rewardByMonth, setRewardByMonth] = useState([]);
    const [totalRewards, setTotalRewards] = useState(0);
    const handleSelectChange = (event) => {
        const customerId = event.target.value;
        TransactionService.getTransactionsByCustomerId(customerId)
            .then((resoponse) => {
                const custTransTemp = resoponse.data.map(function (item) {
                    return {
                        productName: item[0],
                        transactionCard: item[1],
                        transactionDate: item[2],
                        productAmount: item[3],
                        reward: DataFormatService.calulateCustomerRewardByTransaction(item[3])
                    };
                });
                const rewardByMonth = DataFormatService.calculateCustomerRewardByMonth(custTransTemp);
                setRewardByMonth(rewardByMonth.montly);
                setTotalRewards(rewardByMonth.total)
                setCustomerTransactions(custTransTemp);
            });
    }

    useEffect(
        () => {
            CustomerService.getCustomerNameAndId().then((resoponse) => {
                const customerNamesTemp = resoponse.data.map(function (item) {
                    return { value: item[0], text: item[1] };
                });

                setCustomerNames(customerNamesTemp);
            });
        }, []);

    return (
        <div >
            <Grid container spacing={3} direction='row' justifyContent='center'>
                <Grid item xs={6}>
                    <Select name='customerId' label='Customer' items={customerNames} handleChange={handleSelectChange} > </Select>
                </Grid>
                <Grid color='red' item xs={6}>
                    <h2>Total Rewards : {totalRewards}</h2>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction='row' justifyContent='center'>
                <Grid item xs={6}>
                    <Table title='Customer Reward By Transaction' columns={transactionTableColumnHeaders} data={customerTransactions}></Table>
                </Grid>
                <Grid item xs={6}>
                    <Table title='Customer Transactions By Month' columns={transactionByMonthTableColumnHeaders} data={rewardByMonth}></Table>
                </Grid>
            </Grid>
        </div>
    );
}

export default RewardDashboard;