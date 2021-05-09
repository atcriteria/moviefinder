import { FETCHING_DATA_START, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL, SET_DATA, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/index';
// import { mockData } from '../data/mockData';

const initialState = {
    favorites: [
        // {
        //     Poster: "https://m.media-amazon.com/images/M/MV5BY2JmMDJlMmEtYTk4OS00YWQ5LTk2NzMtM2M3NzhkMjI4MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        //     Title: "Cats & Dogs",
        //     Type: "movie",
        //     Year: "2001",
        //     imdbID: "tt0239395"
        // },
    ],
    // Remove mockData when search is reenabled
    data: [],
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
            case(ADD_FAVORITE):
                let working = state.favorites
                working.push(action.payload)
                return({
                    ...state,
                    favorites: working
                });
            case(REMOVE_FAVORITE):
                let spliceFavorites = state.favorites;
                let ind = spliceFavorites.indexOf(action.payload)
                if (ind > -1){
                    spliceFavorites.splice(ind, 1)
                }
                return({
                    ...state,
                    favorites: spliceFavorites
                })
        default:
            return state
    }
}