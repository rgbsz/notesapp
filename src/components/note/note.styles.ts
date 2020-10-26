import styled from 'styled-components'

export const NoteComponent = styled.div<{ color: string }>`
    background: ${({ color }) => color};
    width: 100%;
    padding-top: 100%;
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    textarea {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 2rem;
        box-sizing: border-box;
        overflow: hidden;
        border: none;
        background: transparent;
    }
`

export const BottomPanel = styled.div<{ color: string, display: string }>`
    width: 100%;
    background: ${({ color }) => color};
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    height: 4.3rem;
    justify-content: ${({ display }) => display};
    align-items: center;
    p {
        margin-right: .5rem;
        font-size: .9rem;
        margin-left: 2rem;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        background: black;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: .3rem;
        &:disabled {
            display: none;
        }
        &:last-child {
            margin-right: 1rem;
        }
        svg {
            fill: white;
            width: 1rem;
        }
    }
`