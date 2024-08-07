import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    min-width: 250px;
    max-width: 400px;
    width: 100%;
`

export const TagArea = styled.div`
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    max-width: 50%;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    margin-right: 5px;
`

export const SearchArea = styled.div`
    flex: 2;
    align-items: center;
    display: flex;
`

export const Input = styled.input`
    padding: 0;
    border: none;
    outline: none;
    width: 100%;
`

export const ClearButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 3px;
`

