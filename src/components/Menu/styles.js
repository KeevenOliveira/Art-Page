import styled from "styled-components";
// import background from '../../assets/background.png';
import backgroundBlue from '../../assets/backgroundBlue.png';

export const Container = styled.main`
    height: 80vh;
    background-image: url(${backgroundBlue});
`;
export const Logo = styled.div`
    max-width: 150px;
    /* text-align: center; */
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    height: 15vh;
    align-items: center;
`;

export const Content = styled.main`
    display: flex;
    border: 2px solid #0987;
    width: 80%;
`;

// export const 