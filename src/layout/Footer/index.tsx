import React from 'react';
import style from './index.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <span>
                <span className={style.name}> PokeNext </span> &#169; 2021
            </span>
        </footer>
    );
}
