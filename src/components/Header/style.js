import styled from 'styled-components';

export const Container = styled.div`
    max-width: 97%;
    height: 9vh;
    margin-left: 30px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    justify-content: space-between;
`;
export const Logo = styled.div`
    max-width: 7em;
    margin-right: 1em;
`;
export const ContentHeader = styled.div`
    a{
        & + a{
            margin-left: 15px;
        }

    }
`;