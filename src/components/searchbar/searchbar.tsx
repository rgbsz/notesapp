import React, { FormEvent } from 'react'

import { Input } from './searchbar.styles'

const SearchBar: React.FC<{ setFilterText: (e: string) => void }> = ({ setFilterText  }) => {
    return (
        <Input type='text' placeholder={'Search...'} onInput={(e: FormEvent<HTMLInputElement>) => setFilterText(e.currentTarget.value)}/>
    )
}

export default SearchBar