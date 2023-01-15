import React, { useState } from "react";
import classes from "./App.module.css";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomInput from "./components/CustomInput/CustomInput";
import CustomTable from "./components/CustomTable/CustomTable";

const initialValues = {
  userName: "",
  userSurname: "",
  userOld: "",
};
function App() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null,
  });
  // const handleSort = (e) => {
  //   e.preventDefault();
  //   setUsers(users.slice().sort((a, b) => b.old - a.old));
  // };
  users.sort((a, b) => {
    return b.userOld - a.userOld;
  });

  const handleRemoveClick = ({ index }) => {
    setUsers(users.filter((user, userIndex) => userIndex !== index));
  };

  const isFilledFields =
    userData.userName && userData.userSurname && userData.userOld;

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
      if (editableUserData.isEdit) {
        const editedData = users;
        editedData.splice(editableUserData.userIndex, 1, userData);

        setUsers(editedData);

        setEditableUserData({
          isEdit: false,
          userIndex: null,
        });
      } else {
        setUsers((prevState) => [...prevState, userData]);
      }

      setUserData(initialValues);
    }
  };

  const handleCleanClick = () => {
    setUserData(initialValues);
    setEditableUserData({
      isEdit: false,
      userIndex: null,
    });
  };

  const handleEditClick = ({ user, index }) => {
    setUserData(user);
    setEditableUserData({
      isEdit: true,
      userIndex: index,
    });
  };

  const handleInputChange = (e, userName) =>
    setUserData((prevState) => ({
      ...prevState,
      [userName]: e.target.value,
    }));

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div>
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
            <div className={classes.INPUTS}>
              <CustomInput
                placeholder="Write your name"
                handleChange={handleInputChange}
                value={userData.userName}
                className={classes.name}
                fieldName="userName"
              />

              <CustomInput
                placeholder="Write your surname "
                handleChange={handleInputChange}
                value={userData.userSurname}
                className={classes.sureName}
                fieldName="userSurname"
              />

              <CustomInput
                placeholder="Write your old"
                type="number"
                className={classes.years}
                handleChange={handleInputChange}
                value={userData.userOld}
                fieldName="userOld"
              />
            </div>
            <div className={classes.buttonsWrapper}>
              <CustomButton
                label="Clean"
                classNames={classes.Clean}
                handleClick={() => {}}
                data={null}
                type="reset"
              />

              <CustomButton
                label={editableUserData.isEdit ? "Save" : "Add"}
                classNames={classes.added}
                handleClick={() => {}}
                data={null}
                type="submit"
                disabled={!isFilledFields}
              />
            </div>
            <div className={classes.tableData}>
              <CustomTable
                users={users}
                handleEditClick={handleEditClick}
                handleRemoveClick={handleRemoveClick}
                // onSortClick={handleSort}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
