import { noteTypes } from "../../redux/types";

export const removeLocalNote = (id: string) => {
    const notes = localStorage.getItem('notes')
    if(notes) {
        const parsedNotes = JSON.parse(notes)
        const newNotes = parsedNotes.filter((note: noteTypes) => note.id !== id)
        localStorage.setItem('notes', JSON.stringify(newNotes))
    }
}

export const saveLocalNote = (newNote: noteTypes) => {
    const notes = localStorage.getItem('notes')
    if(notes) {
        const parsedNotes = JSON.parse(notes)
        const newNotes = parsedNotes.map((note: noteTypes) => note.id === newNote.id ? newNote : note)
        localStorage.setItem('notes', JSON.stringify(newNotes))
    }
}

