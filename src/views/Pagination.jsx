import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {/* << */}
          <li>
            <button
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className={`text-xs font-semibold flex w-8 h-8 mx-1 rounded-full items-center justify-center border
                ${
                  currentPage === 1
                    ? "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "border-lightBlue-200 text-white bg-lightBlue-200"
                }`}
            >
              <i className="fas fa-chevron-left -ml-px"></i>
              <i className="fas fa-chevron-left -ml-px"></i>
            </button>
          </li>

          {/* < */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`text-xs font-semibold flex w-8 h-8 mx-1 rounded-full items-center justify-center border
                ${
                  currentPage === 1
                    ? "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "border-lightBlue-200 text-white bg-lightBlue-200"
                }`}
            >
              <i className="fas fa-chevron-left -ml-px"></i>
            </button>
          </li>

          {/* Numéros */}
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`text-xs font-semibold flex w-8 h-8 mx-1 rounded-full items-center justify-center border
                  ${
                    currentPage === page
                      ? "border-lightBlue-500 text-white bg-lightBlue-500"
                      : "border-lightBlue-500 bg-white text-lightBlue-500"
                  }`}
              >
                {page}
              </button>
            </li>
          ))}

          {/* > */}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`text-xs font-semibold flex w-8 h-8 mx-1 rounded-full items-center justify-center border
                ${
                  currentPage === totalPages
                    ? "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "border-lightBlue-200 text-white bg-lightBlue-200"
                }`}
            >
              <i className="fas fa-chevron-right -mr-px"></i>
            </button>
          </li>

          {/* >> */}
          <li>
            <button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`text-xs font-semibold flex w-8 h-8 mx-1 rounded-full items-center justify-center border
                ${
                  currentPage === totalPages
                    ? "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "border-lightBlue-200 text-white bg-lightBlue-200"
                }`}
            >
              <i className="fas fa-chevron-right -mr-px"></i>
              <i className="fas fa-chevron-right -mr-px"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
