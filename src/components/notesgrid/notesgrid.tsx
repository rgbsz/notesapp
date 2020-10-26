import React from 'react'
import { noteTypes } from '../../redux/types'

import Note from '../note'

import { Wrapper } from './notesgrid.styles'

const NotesGrid: React.FC<{ notes: noteTypes[], filterText: string }> = ({ notes, filterText }) => {
    return (
        <Wrapper>
            {
                notes.map((note: noteTypes, i: number) => note.content.includes(filterText) && <Note data={note} key={i} />)
            }
        </Wrapper>
    )
}

export default NotesGrid