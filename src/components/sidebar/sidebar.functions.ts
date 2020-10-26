import { noteTypes } from "../../redux/types";

export const addLocalNote = (note: noteTypes) => {
    const notes = localStorage.getItem('notes')
    if(notes) {
        const parsedNotes = JSON.parse(notes)
        const newNotes = [note, ...parsedNotes]
        localStorage.setItem('notes', JSON.stringify(newNotes))
    }
}