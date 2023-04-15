import React from 'react';
import style from './index.module.css';
import { Pokemon } from '@/constants/types/pokemon';
import Image from 'next/image';

type Props = {
    pokemon: Pokemon;
};

export default function Card({ pokemon }: Props) {
    return (
        <div className={style.card}>
            <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={150}
                height={150}
            />
            <span className={style.id}>{`#${pokemon.id}`}</span>
            <h2>{pokemon.name}</h2>
        </div>
    );
}
