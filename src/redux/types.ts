export interface noteTypes {
    id: number,
    content: string
}

export type stateTypes = noteTypes[]

export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

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
    payload: number
}

export type actionTypes = addNoteAction | editNoteAction | removeNoteAction