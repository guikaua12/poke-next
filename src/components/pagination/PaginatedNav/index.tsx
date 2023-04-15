import React from 'react';
import style from './index.module.css';
import { func } from 'prop-types';

type Props = {
    totalItems: number;
    currentPage: number;
    setCurrentPage: (page: number) => any;
    range?: number;
    pageSize?: number;
};

function getPagesInRange(totalPages: number, currentPage: number, range: number): Array<number> {
    const pages: Array<number> = [];
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
}

function getTotalPages(total: number, pageSize: number): number {
    return Math.ceil(total / pageSize);
}

export function PaginatedNav({ totalItems, currentPage, setCurrentPage, range = 2, pageSize = 15 }: Props) {
    const totalPages: number = getTotalPages(totalItems, pageSize);
    const pagesInRange: Array<number> = getPagesInRange(totalPages, currentPage, range);

    function hasPrevious(): boolean {
        return currentPage > 1;
    }

    function hasNext(): boolean {
        return currentPage < totalPages;
    }

    function handlePreviousChange() {
        if (hasPrevious()) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleNextChange() {
        if (hasNext()) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <nav className={style.nav}>
            <ul>
                {hasPrevious() && (
                    <button className={style.navButton} onClick={handlePreviousChange}>
                        &lt;
                    </button>
                )}
                {pagesInRange.map((page) => (
                    <li key={page}>
                        <button
                            className={`${style.navButton} ${currentPage === page ? style.active : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                {hasNext() && (
                    <button className={style.navButton} onClick={handleNextChange}>
                        &gt;
                    </button>
                )}
            </ul>
        </nav>
    );
}
