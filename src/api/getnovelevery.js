import axios from 'axios';
import qs from 'qs';
import apiajax from './promise'
import { baseurl, chapterurl } from './config.js';
let GetEveryNavel = (keyword) => {
    return axios.get(`${baseurl}/mix-atoc/${keyword}?view=chapters`);
}
let GetCopyRightNavel = (bookid) => {
    return axios.get(`${baseurl}/btoc?view=summary&book=${bookid}`);
}
let GetSourceAddress = (sourceid) => {
    return axios.get(`${baseurl}/atoc/${sourceid}?view=chapters`);
}
let GetNovelContent = (novelsrc) => {
    return axios.get(`${chapterurl}/chapter/${novelsrc}`);
}
let ByCategories = (gender, type, major, start, limit) => {
    return axios.get(`${baseurl}/book/by-categories?gender=${gender}&type=${type}&major=${major}&minor=&start=${start}&limit=${limit}`);
}
export { GetEveryNavel, GetCopyRightNavel, GetSourceAddress, GetNovelContent, ByCategories }