import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, actionTypes, stateTypes, todoTypes } from './types'

export const storeReducer = (state: stateTypes = [], action: actionTypes) => {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, action.payload]
        case EDIT_NOTE:
            return state.map((note: todoTypes) => note.id === action.payload.id ? action.payload : note)
        case REMOVE_NOTE:
            return state.filter((note: todoTypes) => note.id !== action.payload)
    }
}