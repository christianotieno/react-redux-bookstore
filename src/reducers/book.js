import React from 'react';
import {CREATE_BOOK, REMOVE_BOOK} from '../actions';


const initialState = {
    books: []
}

function books(state = initialState, action){

    switch(action.type){
        case CREATE_BOOK:
            return Object.assign({}, state,{
                books: [
                    ...state.books
                ]
            })
        case REMOVE_BOOK:
            return Object.assign({}, state,{
                books: [
                    ...state.books
                ]
            })
        default:
            return state
    }
}