import React from "react";

const Table = ({
  titleCheckHandler,
  currentUsers,
  userCheckHandler,
  editHandler,
  deleteHandler,
  isEditable,
  isEditableId,
}) => {
  return (
    <div>
      <table className="md:min-w-full ">
        <thead className="bg-white border-b">
          <tr>
            <th scope="col" className="font-medium px-6 py-4 text-left">
              <input
                className="h-4 w-4  cursor-pointer"
                type="checkbox"
                onChange={titleCheckHandler}
              />
            </th>
            <th scope="col" className="font-bold px-6 py-4 text-left">
              Name
            </th>
            <th scope="col" className="font-bold px-6 py-4 text-left">
              Email
            </th>
            <th scope="col" className="font-bold px-6 py-4 text-left">
              Role
            </th>
            <th scope="col" className="font-bold px-6 py-4 text-left">
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
                  ? "border-b bg-gray-100 hover:bg-gray-100 text-md"
                  : "border-b"
              }
            >
              <td className="px-6 py-4">
                <input
                  className="h-4 w-4  cursor-pointer"
                  type="checkbox"
                  id={user.id}
                  checked={user.isChecked}
                  onChange={userCheckHandler}
                />
              </td>
              {isEditable && isEditableId === user.id ? (
                <td>
                  <div className="w-3/4">
                    <input
                      class="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight text-sm"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </td>
              ) : (
                <td className="text-gray-600 px-6 py-4 whitespace-nowrap">
                  {user.name}
                </td>
              )}

              {isEditable && isEditableId === user.id ? (
                <td>
                  <div className="w-3/4">
                    <input
                      class="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight text-sm"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </td>
              ) : (
                <td className="text-gray-600 px-6 py-4 whitespace-nowrap">
                  {user.email}
                </td>
              )}

              {isEditable && isEditableId === user.id ? (
                <td>
                  <div className="w-3/4">
                    <select class="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight text-sm">
                      <option disabled>Select Role</option>
                      <option value="admin">admin</option>
                      <option value="member">member</option>
                    </select>
                  </div>
                </td>
              ) : (
                <td className="text-gray-600 px-6 py-4 whitespace-nowrap">
                  {user.role}
                </td>
              )}

              <td className="text-gray-600 px-6 py-4 whitespace-nowrap">
                <button onClick={() => editHandler(user.id)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => deleteHandler(user.id)}>
                  <i className="fa-solid fa-trash text-red-500 ml-4"></i>
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
