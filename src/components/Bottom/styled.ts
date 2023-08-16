import styled, { keyframes } from 'styled-components'

const slideDown = keyframes`
    0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    min-width: 250px;
    max-width: 400px;
    width: 100%;

    animation: ${slideDown} 0.3s ease-in-out;
`
