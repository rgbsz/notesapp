import React from 'react'

import NotesGrid from '../notesgrid'
import Heading from '../heading'
import SearchBar from '../searchbar'

import { Wrapper } from './content.styles'

const Content: React.FC = () => {
    return (
        <Wrapper>
            <SearchBar />
            <Heading />
            <NotesGrid />
        </Wrapper>
    )
}

export default Content