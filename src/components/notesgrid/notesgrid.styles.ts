import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
    padding: 2rem;
`

export const Note = styled.div`
    background: blue;
    width: 100%;
    padding-top: 100%;
    position: relative;
    p {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`