import React from 'react';
import Image from 'next/image';
import Container from '../../layout/Container';
import charizard from '../../../public/images/charizard.png';
import style from './index.module.css';

export default function Sobre() {
    return (
        <Container className={style.sobreContainer}>
            <h1>Sobre o projeto</h1>
            <p>
                PokeNext è um App construído em Next.js para consultar Pokémons
            </p>
            <Image
                src={charizard}
                width={200}
                height={200}
                alt="Charizard Image"
            />
        </Container>
    );
}
