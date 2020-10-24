import { actionTypes, todoTypes } from './types'

export const addNote = ( payload: todoTypes ): actionTypes => ({
    type: 'ADD_NOTE',
    payload
})

export const editNote = ( payload: todoTypes ): actionTypes => ({
    type: 'EDIT_NOTE',
    payload
})

export const removeNote = ( payload: number ): actionTypes => ({
    type: 'REMOVE_NOTE',
    payload
})