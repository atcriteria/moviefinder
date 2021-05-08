import axios from 'axios';
import { Key } from '../Key';
export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAIL = "FETCHING_DATA_FAIL";
export const SET_DATA = "SET_DATA";

export const getData = (searchCriteria) => dispatch => {
    console.log(`getData called with ${searchCriteria} and ${Key}`)
    dispatch({type: FETCHING_DATA_START})
    axios
        .get(`http://www.omdbapi.com/?s=${searchCriteria.search}&apikey=${Key}`)
        .then(res => {
            console.log("actions line 12 result: ", res);
            dispatch({type: FETCHING_DATA_SUCCESS})
            dispatch({ type: SET_DATA, payload: res.data })
        })
        .catch(err => {
            console.log("actions line 16 catch: ", err)
            dispatch({type: FETCHING_DATA_FAIL, payload: err.response.message})
        })
}