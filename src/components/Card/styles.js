import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 300px;
    min-height: 300px;
    margin: 10px;
    background-color: grey;
`;

export const Title = styled.h1`
    font-size: 24px;
    line-height: 40px;
`;

export const Component = styled.div`
    margin-top: 30px;
    padding: 10px;
    border: 2px solid green;
    border-radius: 10px;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        height: 40px;
        width: 100px;
        border-style: none;
    }
`;