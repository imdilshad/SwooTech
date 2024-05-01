import React, { useState } from 'react';
import '../../App.css'

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 20; // Total number of pages

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleGoToPage = (page) => {
        setCurrentPage(page);
    };

    const handleGoToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className='d-flex justify-content-center gap-3  '>
            
            {[1, 2, 3].map(page => (
                <button className='pag' key={page} onClick={() => handleGoToPage(page)}>{page}</button>
            ))}
            {totalPages > 3 && <button className='pag'>...</button>}
            <button className='pag' onClick={handleGoToLastPage}>{totalPages}</button>
            <button className='pag w-25' onClick={handleNextPage}>Next</button>
        </div>
    );
}

export default Pagination;
