import axios from 'axios';
import qs from 'qs';
import apiajax from './promise';
import { baseurl } from './config.js';
let GetContent = (keyword) => { //获取小说章节的内容
    return axios.get(`${baseurl}/mix-atoc/${keyword}?view=chapters`);
}
let GetPaiHangList = (rankid) => { //获取排行榜小说列表
    return axios.get(`${baseurl}/ranking/${rankid}`);
}

export { GetContent, GetPaiHangList }