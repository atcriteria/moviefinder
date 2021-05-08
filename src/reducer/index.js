import { FETCHING_DATA_START, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL, SET_DATA } from '../actions/index';
import { mockData } from '../data/mockData';

const initialState = {
    favorites: [],
    // Remove mockData when search is reenabled
    data: mockData.data,
    isFetching: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case(FETCHING_DATA_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
            case(FETCHING_DATA_SUCCESS):
                return({
                    ...state,
                    isFetching: false
                });
            case(FETCHING_DATA_FAIL):
                return({
                    ...state,
                    isFetching: false,
                    error: action.payload
                });
            case(SET_DATA):
                return({
                    ...state,
                    data: action.payload
                });
        default:
            return state
    }
}