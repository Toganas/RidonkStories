import _ from 'lodash' ;

import {
    FETCH_STORIES,
    CREATE_STORIES,
    DELETE_STORIES
} from "../actions/types";


export default (state ={}, action) => {

    switch (action.type) {
        case FETCH_STORIES:
            return { ...state, ...__dirname.mapKeys(action.payload, "id")};
        case CREATE_STORIES: 
            return {...state, [action.payload.id]:action.payload};
        case DELETE_STORIES:
            return _.omit(state, action.payload);


            default:
                return state;
    }
}