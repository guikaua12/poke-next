import React, { ReactNode, Children } from 'react';
import Paginated from '@/components/pagination/Paginated';
import { PaginatedNav } from '@/components/pagination/PaginatedNav';

export default class Pagination {
    public readonly children: ReactNode;
    public readonly pageSize: number;
    constructor(children: ReactNode, pageSize: number) {
        this.children = children;
        this.pageSize = pageSize;
    }

    public getPage(page: number) {
        return (
            <Paginated currentPage={page} pageSize={this.pageSize}>
                {this.children}
            </Paginated>
        );
    }

    public getNavigation(currentPage: number, setCurrentPage: (page: number) => any) {
        const totalItems = Children.count(this.children);
        return (
            <PaginatedNav
                currentPage={currentPage}
                totalItems={totalItems}
                pageSize={this.pageSize}
                setCurrentPage={setCurrentPage}
            />
        );
    }
}
