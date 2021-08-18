import styled from 'styled-components';

export const Container = styled.footer`
   width: 100%;
   height: 20vh;
   display: flex;
   justify-content: space-around;
   align-items: center;
`;
export const SocialContact = styled.div`
    text-align: center;
    svg{
        color:white;
        &:hover{
            color: #e4cb58;
        }
    }
    p{
        color: #fff
    }
    div{
        display: flex;
        justify-content: space-between;
    }
`;
export const LinksHome = styled.div`
    /* width: px; */
    color:#fff;
    display: flex;
    flex-direction: row;
    @media(max-width: 700px) {
        /* display: ; */
        margin-top: 6em;
        flex-direction: column;
    }
`;
export const LocationCopyRighting = styled.div`

    color: #fff;
`;
export const ButtonLink = styled.button`
    background: none;
    border: 2px solid #e4cb58;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 0.7em 1.3em;
    color: #fff;

    a{
        outline: none;
        text-decoration: none;
    }
    transition: 0.4s;

    &:hover,
    &:focus {
        transition: 0.4s;
        box-shadow: 0 0.5em 0.5em -0.4em #e4cb58;
        transform: translateY(-0.25em);
        }
`;