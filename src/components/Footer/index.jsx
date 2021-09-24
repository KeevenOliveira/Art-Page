import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai'

import { Container, SocialContact, LinksHome, LocationCopyRighting, ButtonLink } from './styles';

const Footer = () => {
    return (
        <Container>
            {/* <h3>Art Footer</h3> */}
            <LinksHome>
                <ButtonLink>
                    <a href>Home</a>
                </ButtonLink>
                <ButtonLink>
                    <a href>Portifólio</a>
                </ButtonLink>
                <ButtonLink>
                    <a href>Sobre</a>
                </ButtonLink>
                <ButtonLink>
                    <a href>Contato</a>
                </ButtonLink>
            </LinksHome>
            <LocationCopyRighting>
                <p>Localização: 54786-290 | Camaragibe | Recife.</p>
                <p>© 2021 Art, Brasil, Todos os direitos reservados.</p>
            </LocationCopyRighting>
            <SocialContact>
                <p>Redes Sociais</p>
                <div>
                    <AiOutlineFacebook size={45}/>
                    <FaWhatsapp size={45}/>
                    <FaInstagram size={45}/>
                </div>
            </SocialContact>
        </Container>
    );
}

export default Footer;
