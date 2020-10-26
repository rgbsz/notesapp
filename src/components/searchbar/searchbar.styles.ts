import styled from 'styled-components'

export const Input = styled.input`
    margin: 1.2rem 2rem 2rem;
    background: transparent;
    font-size: 1rem;
    box-sizing: border-box;
    width: calc(100% - 4rem);
    border: none;
    padding: 1rem 0;
    &:focus {
        outline: none;
    }
`