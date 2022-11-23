class DataFormatService {
    formatDate(date) {
        return [
            date.$M + 1,
            date.$D,
            date.$y,
        ].join('/');
    }

    calulateCustomerRewardByTransaction(productPrice) {
        let customerReward = 0;
        let amountOver100 = 0;
        if (productPrice > 100) {
            amountOver100 = productPrice - 100;
            customerReward = amountOver100 * 2;
        }
        if (productPrice > 50) {
            customerReward = customerReward + (productPrice - 50 - amountOver100);
        }
        return customerReward;
    }

    calculateCustomerRewardByMonth(customerTransactions) {
        let novemberRewards = 0;
        let octoberRewards = 0;
        let septemberRewards = 0;
        let totalRewards = 0;

        for (var i = 0; i < customerTransactions.length; i++) {
            let trans = customerTransactions[i];
            let month = new Date(trans.transactionDate);
            let validMonth = month.getMonth() + 1;
            totalRewards += trans.reward;
            switch (validMonth) {
                case 11:
                    novemberRewards += trans.reward;
                    break;
                case 10:
                    octoberRewards += trans.reward;
                    break;
                case 9:
                    septemberRewards += trans.reward;
                    break;
                default:
                    break
            }
        }

        return {
            montly: [
                { month: "November", reward: novemberRewards },
                { month: "October", reward: octoberRewards },
                { month: "September", reward: septemberRewards }
            ], total: totalRewards
        };
    }
}

export default new DataFormatService();