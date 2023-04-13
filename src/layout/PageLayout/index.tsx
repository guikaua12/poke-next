import React from 'react';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

type Props = {
    children: React.ReactNode
}

export default function PageLayout({children}: Props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}