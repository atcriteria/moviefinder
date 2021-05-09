import axios from 'axios';
import { Key } from '../Key';
export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAIL = "FETCHING_DATA_FAIL";
export const SET_DATA = "SET_DATA";
export const ADD_FAVORITE = "ADD_FAVORITE"

export const getData = (searchCriteria) => dispatch => {
    dispatch({type: FETCHING_DATA_START})
    axios
        // Reenable to implement searches
        .get(`http://www.omdbapi.com/?s=${searchCriteria.search}&apikey=${Key}`)
        .then(res => {
            dispatch({type: FETCHING_DATA_SUCCESS})
            dispatch({ type: SET_DATA, payload: res.data.Search })
        })
        .catch(err => {
            dispatch({type: FETCHING_DATA_FAIL, payload: err})
        })
}

export const addFavorite = (favorite) => dispatch => {
    dispatch({type: ADD_FAVORITE, payload: favorite})
}