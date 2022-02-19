import React from 'react';

const PageNumbers = ({ users, usersPerPage, setCurrentPage, currentPage }) => {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    PageNumbers.push(i);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <ul className='flex justify-center'>
        {PageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number
                ? 'w-7 h-7 rounded-full bg-blue-700 flex justify-center items-center text-white cursor-pointer mr-5 font-bold'
                : 'w-7 h-7 text-blue-700 flex justify-center items-center cursor-pointer mr-5'
            }
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PageNumbers;
