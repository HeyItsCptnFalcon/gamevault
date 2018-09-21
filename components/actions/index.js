import { FETCH_INFO, RECEIVED_INFO, FETCH_NEWS, RECEIVED_NEWS } from '../constants';
import axios from 'axios';
import API_KEY from './../../config'


export const titleSearch = (searchTerm) => dispatch => {
    dispatch({ type: FETCH_INFO });

    axios.get(`https://api-endpoint.igdb.com/games/?search=${searchTerm}&fields=*`, {
        headers: {
            "user-key":API_KEY,
            Accept:"application/json"
        }
    })
    .then(res => {
        console.log(res.data);
        dispatch({ type: RECEIVED_INFO, data: res.data})
    });
}

export const currentNews = () => dispatch => {
    dispatch({ type: FETCH_NEWS });

    axios.get(`https://api-endpoint.igdb.com/pulses/?fields=*&order=created_at:desc&limit=50&scroll=1`, {
        headers: {
            "user-key":API_KEY,
            Accept:"application/json"
        }
    })
    .then(res => {
        console.log(res.data);
        dispatch({ type: RECEIVED_NEWS, data: res.data})
    });
}