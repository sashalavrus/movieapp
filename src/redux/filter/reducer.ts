//types
import { initialFilterStateTypes } from '../../interfaces/redux/initialFilterStateTypes';

import { CURRENT_PAGE, GET_NEXT_PAGE, GET_PREV_PAGE } from './types';

const initialState: initialFilterStateTypes = {
    getNextPage: false,
    getPrevPage: false,
    currentPage: 1,
};

export default function filterReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_NEXT_PAGE: {
            return { ...state, getNextPage: action.payload };
        }
        case GET_PREV_PAGE: {
            return { ...state, getPrevPage: action.payload };
        }
        case CURRENT_PAGE: {
            return { ...state, currentPage: action.payload };
        }
        default:
            return state;
    }
}
