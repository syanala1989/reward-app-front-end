import axios from 'axios';
import { REWARD_API_BASE_URL as REWARDAPIBASEURL } from '../../assets/AppConstants'
import ValidationService from '../../utils/ValidationService'

class CustomerService {
    createCustomer(customer) {
        return axios
        .post(REWARDAPIBASEURL + '/' + 'customers', customer);
    }

    getAllCustomers() {
        return axios
        .get(REWARDAPIBASEURL + '/' + 'customers')
        .catch(error => {
            console.log(error)
        })
    }
    getCustomerNameAndId() {
        return axios
        .get(REWARDAPIBASEURL + '/' + 'customerNames')
        .catch(error => {
            console.log(error)
        })
    }
    validateCustomer(customer, setZipError, setphoneError) {

        if (ValidationService.isValidInteger(customer.customerZip)) {
            setZipError(true);
            return;
        }

        if (ValidationService.isValidPhoneNumber(customer.customerPhone)) {
            setphoneError(true);
            return;
        }

        if (customer.customerName == '' || customer.customerLocation == '') {
            return
        }

    }
}

export default new CustomerService();