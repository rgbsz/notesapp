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

export const Note = styled.div`
    background: blue;
    width: 100%;
    padding-top: 100%;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    p {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`