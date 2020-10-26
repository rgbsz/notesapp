export interface noteTypes {
    id: string,
    content: string,
    color: string
}

export type stateTypes = noteTypes[]

export const SET_NOTES = 'SET_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

export interface setNotesAction {
    type: typeof SET_NOTES,
    payload: noteTypes[]
}

export interface addNoteAction {
    type: typeof ADD_NOTE,
    payload: noteTypes
}

export interface editNoteAction {
    type: typeof EDIT_NOTE,
    payload: noteTypes
}

export interface removeNoteAction {
    type: typeof REMOVE_NOTE,
    payload: string
}

export type actionTypes = setNotesAction | addNoteAction | editNoteAction | removeNoteAction