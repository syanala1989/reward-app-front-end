const DataFormatService =  require('../../../utils/DataFormatService.js');
import '@testing-library/jest-dom'

//test 1
describe(
    'get Reward Calculation', () => {
        test('should retun the reward', () => {
            expect(DataFormatService.calulateCustomerRewardByTransaction(150).toBe(150))
        })
    }
);

//test 2
describe(
    'get Reward Calculation 2', () => {
        test('should retun the reward 2', () => {
            expect(DataFormatService.calulateCustomerRewardByTransaction(200).toBe(250))
        })
    }
);