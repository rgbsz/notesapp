import React from 'react'

import { Input } from './searchbar.styles'

const SearchBar: React.FC = () => {
    return (
        <Input type='text' placeholder={'Search...'}/>
    )
}

export default SearchBar