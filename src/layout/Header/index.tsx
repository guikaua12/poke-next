import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './index.module.css';
import pokeball from '../../../public/images/pokeball.png';

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.navbar}>
                <aside className={style.logo}>
                    <Image
                        src={pokeball}
                        width={25}
                        height={25}
                        alt="Pokeball"
                    />
                    <span>PokeNext</span>
                </aside>
                <ul className={style.linkWrapper}>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className={style.styledLink}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre" legacyBehavior>
                            <a className={style.styledLink}>Sobre</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
