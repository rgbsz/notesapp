import React from 'react'
import { noteTypes } from '../../redux/types'

import Note from '../note'

import { Wrapper } from './notesgrid.styles'

const NotesGrid: React.FC<{ notes: noteTypes[], filterText: string }> = ({ notes, filterText }) => {
    return (
        <Wrapper>
            {
                notes.map((note: noteTypes) => note.content.includes(filterText) && <Note data={note} />)
            }
        </Wrapper>
    )
}

export default NotesGrid