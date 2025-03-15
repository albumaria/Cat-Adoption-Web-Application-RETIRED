import "./Pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null; // Hide pagination if only 1 page

    return (
        <div className="pagination-wrapper">
            {currentPage > 1 && (
                <button className="left-right-buttons" onClick={() => onPageChange(currentPage - 1)}>
                    <svg width="100%" height="100%" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1041 13.2563C-0.256539 14.0206 -0.256542 15.9794 1.10409 16.7437L22.7705 28.9147C24.1037 29.6636 25.75 28.7002 25.75 27.171V2.82899C25.75 1.29984 24.1037 0.336362 22.7705 1.08528L1.1041 13.2563Z" fill="#FFD5D2"/>
                    </svg>
                </button>
            )}

            <button className="current-page-button">
                <svg width="100%" height="100%" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="36" rx="18" fill="#51294B"/>
                </svg>
                <span className="current-page-number">{currentPage}</span>
            </button>

            {currentPage < totalPages && (
                <button className="left-right-buttons" onClick={() => onPageChange(currentPage + 1)}>
                    <svg width="100%" height="100%" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.8959 13.2563C26.2565 14.0206 26.2565 15.9794 24.8959 16.7437L3.22953 28.9147C1.89633 29.6636 0.25 28.7002 0.25 27.171V2.82899C0.25 1.29984 1.89633 0.336362 3.22952 1.08528L24.8959 13.2563Z" fill="#FFD5D2"/>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Pagination;