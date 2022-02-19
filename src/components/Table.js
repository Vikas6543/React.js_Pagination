import React from 'react';

const Table = ({
  titleCheckHandler,
  currentUsers,
  userCheckHandler,
  deleteHandler,
}) => {
  return (
    <div>
      <table className='min-w-full'>
        <thead className='bg-white border-b'>
          <tr>
            <th scope='col' className='font-medium px-6 py-4 text-left'>
              <input
                className='h-4 w-4  cursor-pointer'
                type='checkbox'
                onChange={titleCheckHandler}
              />
            </th>
            <th scope='col' className='font-bold px-6 py-4 text-left'>
              Name
            </th>
            <th scope='col' className='font-bold px-6 py-4 text-left'>
              Email
            </th>
            <th scope='col' className='font-bold px-6 py-4 text-left'>
              Role
            </th>
            <th scope='col' className='font-bold px-6 py-4 text-left'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              className={
                user.isChecked
                  ? 'border-b bg-gray-100 hover:bg-gray-100 text-md'
                  : 'border-b'
              }
            >
              <td className='px-6 py-4'>
                <input
                  className='h-4 w-4  cursor-pointer'
                  type='checkbox'
                  id={user.id}
                  checked={user.isChecked}
                  onChange={userCheckHandler}
                />
              </td>
              <td className='text-gray-600 px-6 py-4 whitespace-nowrap'>
                {user.name}
              </td>
              <td className='text-gray-600 px-6 py-4 whitespace-nowrap'>
                {user.email}
              </td>
              <td className='text-gray-600 px-6 py-4 whitespace-nowrap'>
                {user.role}
              </td>
              <td className='text-gray-600 px-6 py-4 whitespace-nowrap'>
                <button>
                  <i className='fa-solid fa-pen-to-square'></i>
                </button>
                <button onClick={() => deleteHandler(user.id)}>
                  <i className='fa-solid fa-trash text-red-500 ml-4'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
