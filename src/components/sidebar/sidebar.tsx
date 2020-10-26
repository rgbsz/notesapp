import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addNote } from '../../redux/actions'
import { addLocalNote } from './sidebar.functions'

import { Wrapper, Heading, Button, Option } from './sidebar.styles'

const Sidebar: React.FC = () => {
    const dispatch = useDispatch()
    const handleAddNote = () => {
        const note = {
            id: uuid(),
            content: 'New note...'
        }
        addLocalNote(note)
        dispatch(addNote(note))
    }
    return (
        <Wrapper>
            <Heading>Docket</Heading>
            <Button />
            <Option background={'red'} onClick={() => handleAddNote()}/>
            <Option background={'yellow'}/>
            <Option background={'blue'}/>
        </Wrapper>
    )
}

export default Sidebar