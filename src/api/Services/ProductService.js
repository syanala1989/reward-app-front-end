import axios from 'axios';

import { REWARD_API_BASE_URL as REWARDAPIBASEURL } from '../../assets/AppConstants'
class ProductService {
    createProduct(product) {
        return axios
            .post(REWARDAPIBASEURL + '/' + 'products', product);
    }

    getAllProducts() {
        return axios
            .get(REWARDAPIBASEURL + '/' + 'products')
            .catch(error => {
                console.log(error)
            })
    }

    getProductNameAndId() {
        return axios
            .get(REWARDAPIBASEURL + '/' + 'productNames')
            .catch(error => {
                console.log(error)
            })
    }
}

export default new ProductService();