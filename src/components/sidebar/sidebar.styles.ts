import styled from 'styled-components'

export const Wrapper = styled.div`
    background: white;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid #E7EBF7;
`

export const Heading = styled.h2`
    font-size: 1.2rem;
`

export const Button = styled.button`
    margin: 3rem 0 2rem;
    border: none;
    border-radius: 50%;
    background: black;
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    &::after {
        color: white;
        content: '+';
        position: absolute;
        font-size: 1.5rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Option = styled.button<{ background: string }>`
    border: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: ${({ background }) => background};
    margin-bottom: 1rem;
`

export const Options = styled.div<{ display: string }>`
    display: ${({ display }) => display};
    flex-direction: column;
    align-items: center;
`