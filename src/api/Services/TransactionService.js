import axios from 'axios';

import { REWARD_API_BASE_URL as REWARDAPIBASEURL } from '../../assets/AppConstants'
class TransactionService {
    createTransaction(transaction) {
        return axios
            .post(REWARDAPIBASEURL + '/' + 'transactions', transaction);
    }

    getTransactionsByCustomerId(customerId) {
        return axios
            .get(REWARDAPIBASEURL + '/' + 'transactions' + '/' + customerId);
    }
    
    getAllTransactions(customerId) {
        return axios
            .get(REWARDAPIBASEURL + '/' + 'transactions');
    }
}

export default new TransactionService();