import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addNote } from '../../redux/actions'
import { addLocalNote } from './sidebar.functions'

import { Wrapper, Heading, Button, Options, Option } from './sidebar.styles'

const Sidebar: React.FC = () => {
    const dispatch = useDispatch()
    const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false)
    const handleAddNote = (color: string) => {
        const note = {
            id: uuid(),
            content: `New note. `,
            color
        }
        addLocalNote(note)
        dispatch(addNote(note))
        setOptionsVisibility((prev: boolean) => !prev)
    }
    return (
        <Wrapper>
            <Heading>Docket</Heading>
            <Button onClick={() => setOptionsVisibility((prev: boolean) => !prev)}/>
            <Options display={optionsVisibility}>
                <Option background={'#FBC871'} onClick={() => handleAddNote('#FBC871')}/>
                <Option background={'#F29972'} onClick={() => handleAddNote('#F29972')}/>
                <Option background={'#B792FD'} onClick={() => handleAddNote('#B792FD')}/>
                <Option background={'#55D3FD'} onClick={() => handleAddNote('#55D3FD')}/>
                <Option background={'#E4EE90'} onClick={() => handleAddNote('#E4EE90')}/>
            </Options>
        </Wrapper>
    )
}

export default Sidebar