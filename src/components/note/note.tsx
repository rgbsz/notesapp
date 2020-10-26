import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editNote, removeNote } from '../../redux/actions'
import { noteTypes } from '../../redux/types'
import { removeLocalNote, saveLocalNote } from './note.functions'

import DeleteIcon from '../../images/delete'
import SaveIcon from '../../images/save'

import { BottomPanel, NoteComponent } from './note.styles'

const Note: React.FC<{ data: noteTypes }> = ({ data }) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState<string>(data.content)
    const handleRemoveNote = () => {
        removeLocalNote(data.id)
        dispatch(removeNote(data.id))
    }
    const handleSaveNote = () => {
        saveLocalNote({ id: data.id, content, color: data.color })
        dispatch(editNote({ id: data.id, content, color: data.color }))
    }
    return (
        <NoteComponent key={data.id} color={data.color}>
            <textarea maxLength={200} onInput={(e: any) => setContent(e.target.value)}>{content}</textarea>
            <BottomPanel color={data.color} display={data.content !== content ? 'space-between' : 'flex-end'}>
                {
                    data.content !== content && <p>Unsaved changes</p>
                }
                <div>
                    <button onClick={() => handleSaveNote()} disabled={data.content === content ? true : false}>
                        <SaveIcon />
                    </button>
                    <button onClick={() => handleRemoveNote()}>
                        <DeleteIcon />
                    </button>
                </div>
            </BottomPanel>
        </NoteComponent>
    )
}

export default Note