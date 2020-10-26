import React, { useState } from 'react'

import NotesGrid from '../notesgrid'
import Heading from '../heading'
import SearchBar from '../searchbar'

import { Wrapper } from './content.styles'
import { noteTypes } from '../../redux/types'

const Content: React.FC<{ notes: noteTypes[] }> = ({ notes }) => {
    const [filterText, setFilterText] = useState<string>('')
    return (
        <Wrapper>
            <SearchBar setFilterText={(e: string) => setFilterText(e)}/>
            <Heading />
            <NotesGrid notes={notes} filterText={filterText}/>
        </Wrapper>
    )
}

export default Content