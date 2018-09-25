import axios from 'axios';
import qs from 'qs';
import apiajax from './promise';
import { baseurl } from './config.js';
let AutoComplete = (keyword) => {
    return axios.get(`${baseurl}/book/auto-complete?query=${keyword}`);
}
let FuzzySearch = (keyword) => {
    return axios.get(`${baseurl}/book/fuzzy-search?query=${keyword}`);
}

let HotWords = () => {
    return axios.get(`${baseurl}/book/search-hotwords`);
}


export { AutoComplete, FuzzySearch, HotWords }