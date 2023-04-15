import React from 'react';
import Container from '@/layout/Container';
import Image from 'next/image';
import pokeball from '../../public/images/pokeball.png';
import { Pokemon } from '@/constants/types/pokemon';
import style from '@/styles/Home.module.css';
import Card from '@/components/Card';

type Props = {
    pokemons: Array<Pokemon>;
};

export default function Home({ pokemons }: Props) {
    console.log(pokemons);

    return (
        <Container>
            <div className={style.titleWrapper}>
                <h1>
                    <span className={style.poke}>Poke</span>
                    Next
                </h1>
                <Image src={pokeball} width={45} height={45} alt="Pokeball" />
            </div>

            <div className={style.cardsWrapper}>
                {pokemons.map((pokemon: Pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    // get all pokemons from pokeapi
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');

    const data = await response.json();

    // put index in each
    data.results.forEach((pokemon: Pokemon, index: number) => {
        pokemon.id = index + 1;
        pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    });

    return {
        props: {
            pokemons: data.results,
        },
    };
}
