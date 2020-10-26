export const getNotes = () => {
    const notes = localStorage.getItem('notes')
    if(!notes) {
        localStorage.setItem('notes', '[]')
        return []
    }
    else {
        return JSON.parse(notes)
    }
}