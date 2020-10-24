export interface todoTypes {
    id: number,
    content: string
}

export type stateTypes = todoTypes[]

export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

export interface addNoteAction {
    type: typeof ADD_NOTE,
    payload: todoTypes
}

export interface editNoteAction {
    type: typeof EDIT_NOTE,
    payload: todoTypes
}

export interface removeNoteAction {
    type: typeof REMOVE_NOTE,
    payload: number
}

export type actionTypes = addNoteAction | editNoteAction | removeNoteAction