export const REWARD_API_BASE_URL = "http://localhost:8080/api/v1";

export const customerTableColumnHeaders = [
    {
        name: 'Customer Name',
        selector: 'customerName',
        sortable: true,
    },
    {
        name: 'Customer Phone',
        selector: 'customerPhone',
        sortable: true,
    },
    {
        name: 'Customer Location',
        selector: 'customerLocation',
        sortable: true,
    },
    {
        name: 'Cutomer Zip Code',
        selector: 'customerZip',
    },
];

export const productTableColumnHeaders = [
    {
        name: 'Product Name',
        selector: 'productName',
        sortable: true,
    },
    {
        name: 'Product Provider',
        selector: 'productProvider',
        sortable: true,
    },
    {
        name: 'Product Amount',
        selector: 'productAmount',
        sortable: true,
    },
    {
        name: 'Expire Date',
        selector: 'productExpiry',
    },
];

export const transactionTableColumnHeaders = [
    {
        name: 'Product Name',
        selector: 'productName',
        sortable: true,
    },
    {
        name: 'Transaction Card',
        selector: 'transactionCard',
        sortable: true,
    },
    {
        name: 'Transaction Date',
        selector: 'transactionDate',
        sortable: true,
    },
    {
        name: 'Product Amount',
        selector: 'productAmount',
    },
    {
        name: 'Reward',
        selector: 'reward',
        sortable: true,
    },
];

export const transactionByMonthTableColumnHeaders = [
    {
        name: 'Month',
        selector: 'month',
        sortable: true,
    },
    {
        name: 'Reward',
        selector: 'reward',
        sortable: true,
    },
];

export const allTransactionTableColumnHeaders = [
    {
        name: 'Customer Name',
        selector: 'customerName',
        sortable: true,
    },
    {
        name: 'Product Name',
        selector: 'productName',
        sortable: true,
    },
    {
        name: 'Transaction Card',
        selector: 'transactionCard',
        sortable: true,
    },
    {
        name: 'Transaction Date',
        selector: 'transactionDate',
    },
    {
        name: 'Product Amount',
        selector: 'productAmount',
        sortable: true,
    },
];
