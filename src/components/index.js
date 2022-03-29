import React, { useState, useEffect } from "react";
import Axios from "axios";
import PageNumbers from "./PageNumbers";
import SearchInput from "./SearchInput";
import Table from "./Table";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterdResults, setFilterdResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isEditableId, setIsEditableId] = useState(null);

  // fetach users from the api
  const fetchUsers = async () => {
    const { data } = await Axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    const checkValue = data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isChecked: false,
      };
    });
    setUsers(checkValue);
  };

  // filter users by name, email or role
  const filterUsers = () => {
    if (searchInput.length === 0) {
      return setFilterdResults(users);
    }
    const filteredUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.role.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setFilterdResults(filteredUsers);
  };

  useEffect(() => {
    filterUsers();
  }, [searchInput, users]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // delete fuctions
  const deleteHandler = (id) => {
    const userName = users.find((user) => user.id === id);
    alert("Are you sure you want to delete " + userName.name + "?");
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  // edit fuctions
  const editHandler = (id) => {
    const userName = users.find((user) => user.id === id);
    setIsEditable(true);
    setIsEditableId(userName.id);
  };

  const deleteAllHandler = () => {
    const checkedUsers = users.filter((user) => user.isChecked === true);
    if (checkedUsers.length === 0) {
      alert("Please select a user to delete");
      return;
    }
    const newUsers = users.filter((user) => user.isChecked !== true);
    setUsers(newUsers);
  };

  // user checkboxhandler function
  const userCheckHandler = (e) => {
    const { checked, id } = e.target;
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isChecked: checked,
        };
      }
      return user;
    });
    setUsers(newUsers);
  };

  // title checkhandler function
  const titleCheckHandler = (e) => {
    const { checked } = e.target;
    const setCheckValue = users.map((user) => {
      return {
        ...user,
        isChecked: checked,
      };
    });
    setUsers(setCheckValue);
  };

  // get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filterdResults.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="m-3">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {/* Search Input */}
              <SearchInput
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />

              {/* Table Component */}
              <Table
                titleCheckHandler={titleCheckHandler}
                currentUsers={currentUsers}
                userCheckHandler={userCheckHandler}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
                isEditable={isEditable}
                isEditableId={isEditableId}
              />

              {/* Delete Selected */}
              <section className="mt-5 flex">
                <div>
                  <button
                    onClick={deleteAllHandler}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-3xl"
                  >
                    Delete Selected
                  </button>
                </div>

                {/* Pagination Numbers */}
                <div className="mx-auto">
                  <PageNumbers
                    users={users}
                    usersPerPage={usersPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
