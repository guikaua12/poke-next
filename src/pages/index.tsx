import React from 'react';
import Container from '@/layout/Container';
import Image from 'next/image';
import pokeball from '../../public/images/pokeball.png';
import style from '@/styles/Home.module.css';

export default function Home() {
    return (
        <Container>
            <div className={style.titleWrapper}>
                <h1>
                    <span className={style.poke}>Poke</span>
                    Next
                </h1>
                <Image src={pokeball} width={25} height={25} alt="Pokeball" />
            </div>
        </Container>
    );
}
