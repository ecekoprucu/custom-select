import styled from "styled-components";

export const TagWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eeeffb;
    padding: 3px;
    margin: 1.5px;
    border-radius: 5px;
`;

export const TagText = styled.p`
    margin: 0;
    padding: 0;
    color: black;
    font-size: 9px;
    font-weight: 500;
`;

export const TagClose = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 3px;
    padding: 0;
    color: black;
    font-size: 8px;
`;