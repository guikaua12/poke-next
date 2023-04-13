import React from 'react';
import style from './index.module.css';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className = '' }: Props) {
    return (
        <main className={`${className} ${style.container}`}>{children}</main>
    );
}
