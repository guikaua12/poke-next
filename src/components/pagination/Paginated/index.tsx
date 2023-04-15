import React, { Children } from 'react';

type Props = {
    children: React.ReactNode;
    currentPage: number;
    pageSize?: number;
};

function getPages<T>(c: Array<T> | null, pageSize: number | null): Array<Array<T>> {
    if (!c) {
        return [];
    }
    const list = Array.from(c);
    if (!pageSize || pageSize <= 0 || pageSize > list.length) {
        pageSize = list.length;
    }
    const numPages = Math.ceil(list.length / pageSize);
    const pages: Array<Array<T>> = [];
    // so the first page index can be 1 instead of 0
    pages.push([]);
    for (let pageNum = 0; pageNum < numPages; ) {
        pages.push(list.slice(pageNum * pageSize, Math.min(++pageNum * pageSize, list.length)));
    }
    return pages;
}

export default function Paginated({ children, currentPage, pageSize = 15 }: Props) {
    const pages = getPages(Children.toArray(children), pageSize);

    return <>{pages[currentPage]?.map((item) => item)}</>;
}
