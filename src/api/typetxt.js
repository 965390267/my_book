import axios from 'axios';
import qs from 'qs';
import apiajax from './promise'
import { baseurl } from './config.js';
let getAllType = () => {
    return axios.get(`${baseurl}/cats/lv2/statistics`);
}

export { getAllType }