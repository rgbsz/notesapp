import React from 'react'
import { useSelector } from 'react-redux'
import { noteTypes, stateTypes } from '../../redux/types'

import { Wrapper, Note } from './notesgrid.styles'

const NotesGrid: React.FC<{ notes: noteTypes[], filterText: string }> = ({ notes, filterText }) => {
    return (
        <Wrapper>
            {
                notes.map((note: noteTypes) => note.content.includes(filterText) && <Note><p key={note.id}>{note.content}</p></Note>)
            }
        </Wrapper>
    )
}

export default NotesGrid