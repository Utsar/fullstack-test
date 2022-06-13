import React from "react";

const Paginations = ({ coursesPerPage, totalCourses, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginations;
