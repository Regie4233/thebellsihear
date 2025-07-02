// components/Episodes/EpisodesPagination.js (or place it where you prefer)
import React from 'react';

export default function EpisodesPagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) {
        return null; // Don't render pagination if only one page or less
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
            window.scrollTo(0, 0); 
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
            window.scrollTo(0, 0); 
        }
    };

    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
        window.scrollTo(0, 0); 
    };


    let pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage === totalPages) {
         startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }


    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

     const showStartEllipsis = startPage > 1;
     const showEndEllipsis = endPage < totalPages;

    // --- Styling (Tailwind) ---
    const buttonBaseStyle = "px-3 py-1 mx-1 bosrder rounded transition-colors duration-150 text-sm disabled:opacity-50 disabled:cursor-not-allowed";
    const buttonNormalStyle = "border-gray-300 bg-white  hover:bg-blue-100";
    const buttonActiveStyle = "border-blue-600 bg-blue-600 text-white cursor-default";
    const buttonDisabledStyle = "border-gray-300 bg-gray-100 text-gray-400";
    const ellipsisStyle = "px-1 py-1 mx-1 text-gray-500";

    return (
        <nav aria-label="Pagination" className="flex justify-center items-center my-8 px-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`${buttonBaseStyle} ${currentPage === 1 ? buttonDisabledStyle : buttonNormalStyle}`}
                aria-label="Previous Page"
            >
                « Prev
            </button>

           {showStartEllipsis && (
               <>
                   <button onClick={() => handlePageClick(1)} className={`${buttonBaseStyle} ${buttonNormalStyle}`}>1</button>
                   <span className={ellipsisStyle}>...</span>
               </>
           )}


            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => handlePageClick(number)}
                    disabled={currentPage === number}
                    className={`${buttonBaseStyle} ${currentPage === number ? buttonActiveStyle : buttonNormalStyle}`}
                    aria-current={currentPage === number ? 'page' : undefined}
                >
                    {number}
                </button>
            ))}

           {showEndEllipsis && (
              <>
                  <span className={ellipsisStyle}>...</span>
                  <button onClick={() => handlePageClick(totalPages)} className={`${buttonBaseStyle} ${buttonNormalStyle}`}>{totalPages}</button>
              </>
           )}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`${buttonBaseStyle} ${currentPage === totalPages ? buttonDisabledStyle : buttonNormalStyle}`}
                aria-label="Next Page"
            >
                Next »
            </button>
        </nav>
    );
}