import React from 'react';

import { Button, Container, ContentHeader, Logo } from './style';

const Header = () => {
    return (
       <Container>
           <Logo>
                <svg width="100%" height="100%" viewBox="0 0 520 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <path d="M7 54.5L58.5 3H168H277.5V113.25V223.5L227 273.5H152H81.5H7V201V137.5V54.5Z" fill="#2000AC"/>
                        <path d="M310.5 223.5V104H378V122H395V155H378H328V122H378V104H310.5V223.5H328V172H378H395V223.5H378V172H328V223.5H310.5Z" fill="#2000AC"/>
                        <path d="M428.5 122V104H513.5V122H480V223.5H463V122H428.5Z" fill="#2000AC"/>
                        <path d="M7 54.5L58.5 3H168M7 54.5H81.5M7 54.5V137.5M227 273.5L277.5 223.5V113.25M227 273.5H152M227 273.5V201M227 54.5L277.5 3M227 54.5V137.5M227 54.5H189.5H152M277.5 3H168M277.5 3V113.25M117 54.5L168 3M117 54.5H152M117 54.5H81.5M152 273.5V54.5M152 273.5H81.5M81.5 54.5V273.5M81.5 273.5H7V201M7 201H227M7 201V137.5M227 201V152.5M227 137.5H7M227 137.5V152.5M277.5 113.25L227 152.5M91.5 120.5H74V223.5H91.5V172M91.5 120.5V104H142.5V120.5H159V223.5H142.5V172H91.5M91.5 120.5V122M91.5 172V152.5M91.5 152.5H142.5V122H91.5M91.5 152.5V122M378 172H328V223.5H310.5V104H378V122M378 172V223.5H395V172H378ZM378 122H395V155H378H328V122H378ZM428.5 104V122H463V223.5H480V122H513.5V104H428.5Z" stroke="#FAE22F" stroke-width="5"/>
                    </g>
                    <path d="M328 155.5V122H380V155.5H328Z" fill="#2000AC" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M428.5 122V103.5H513.5V122H480.5V223.5H463V122H428.5Z" fill="#FAE22F" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M377.5 155.5V120.5H395.5V155.5H377.5Z" fill="#FAE22F" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M377.5 172.5V155.5H327.5V120.5H377.5V104H309.5V223.5H327.5V172.5H377.5Z" fill="#2000AC" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M377.5 156V173.5" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M328 155V121H378V155H328Z" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M377.5 121.5H329V154H377.5V173H329V223H309.5V104.5H377.5V121.5Z" fill="#FAE22F" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M377.5 223.5V172H395V223.5H377.5Z" fill="#FAE22F" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M74.5 223V120H91.5V104H143V120H159.5V223H143V172L91.5 171.5V223H74.5Z" fill="#FAE22F"/>
                    <path d="M91.5 120H74.5V223H91.5V171.5M91.5 120V104H143V120M91.5 120V152.5M91.5 120H143M143 120H159.5V223H143V172L91.5 171.5M143 120V152.5H91.5M91.5 171.5V152.5" stroke="#FAE22F" stroke-width="4"/>
                    <path d="M91.5 152.5V120H143V152.5H91.5Z" fill="#2000AC" stroke="#FAE22F" stroke-width="4"/>
                    <defs>
                        <filter id="filter0_d" x="0.5" y="0.5" width="519.5" height="283.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
           </Logo>
           <ContentHeader>
               <Button><a href>Home</a></Button>
               <Button><a href>Portifólio</a></Button>
               <Button className="buttonHeader"><a href>Sobre</a></Button>
               <Button className="buttonHeader2"><a href>Contato</a></Button>
           </ContentHeader>
       </Container>
    );
}

export default Header;
