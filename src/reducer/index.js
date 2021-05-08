import { FETCHING_DATA_START, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL } from '../actions/index';

const initialState = {
    favorites: [],
    data: {},
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
        default:
            return state
    }
}