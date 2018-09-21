import { FETCH_INFO, RECEIVED_INFO, RECEIVED_NEWS, FETCH_NEWS } from '../constants';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    gameData: {},
    news: {}



}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_INFO:
            return { ...state, gameData: action.data, isLoading: false };
        case FETCH_INFO:
        case FETCH_NEWS:
            return { ...state, isLoading: true }
        case RECEIVED_NEWS:
            return { ...state, news: action.data, isLoading: false };
        default:
            return state;
    }
}


export default rootReducer;