import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 2rem;
    background: white;
    overflow-y: scroll;
    box-sizing: border-box;
`