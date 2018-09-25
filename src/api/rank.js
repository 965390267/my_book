import axios from 'axios';
import qs from 'qs';
import apiajax from './promise'
import { baseurl } from './config.js';
let Rank = () => {
    return axios.get(`${baseurl}/ranking/gender`);
}

export { Rank }