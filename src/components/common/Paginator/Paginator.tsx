import React from 'react';
import s from './Paginator.module.css';


export type  PaginatorPropsType = {
    pageSize: number
    totalUserCount: number
    currentPage: number
    handlePageClick: (page: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = (props) => {
    const {pageSize, currentPage, handlePageClick, totalUserCount} = props

    const pagesCount = Math.ceil(totalUserCount / pageSize);
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);
    const curP = props.currentPage;
    const curPF = Math.max(curP - 3, 0);
    const curPL = Math.min(curP + 3, pagesCount);
    let slicedPages: any[] = pages.slice(curPF, curPL);

    if (curPF > 0) {
        slicedPages = [1, '...', ...slicedPages];
    }

    if (curPL < pagesCount) {
        slicedPages = [...slicedPages, '...', pagesCount];
    }

    return (

        <div className={s['page-carousel']}>
            <div className={s['page-carousel__pages']}>
                {slicedPages.map((page) =>
                    page === '...' ?
                        <span key={page} className={`${s['page-carousel__page']} 
                                  ${s['page-carousel__page--disabled']}`}>
                                 {page}
                            </span> :
                        <span key={page}
                              className={`${s['page-carousel__page']} 
                                  ${currentPage === page ? s['page-carousel__page--selected'] : ''}`}
                              onClick={() => handlePageClick(page)}>
                                  {page}
                            </span>
                )}
            </div>
        </div>


    );
}



