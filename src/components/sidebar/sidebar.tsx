import React from 'react'

import { Wrapper, Heading, Button, Option } from './sidebar.styles'

const Sidebar: React.FC = () => {
    return (
        <Wrapper>
            <Heading>Docket</Heading>
            <Button />
            <Option background={'red'}/>
            <Option background={'yellow'}/>
            <Option background={'blue'}/>
        </Wrapper>
    )
}

export default Sidebar