import { actionTypes, noteTypes } from './types'

export const setNotes = ( payload: noteTypes[] ): actionTypes => ({
    type: 'SET_NOTES',
    payload
})

export const addNote = ( payload: noteTypes ): actionTypes => ({
    type: 'ADD_NOTE',
    payload
})

export const editNote = ( payload: noteTypes ): actionTypes => ({
    type: 'EDIT_NOTE',
    payload
})

export const removeNote = ( payload: string ): actionTypes => ({
    type: 'REMOVE_NOTE',
    payload
})