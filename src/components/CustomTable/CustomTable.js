import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./CustomTable.module.css";

const CustomTable = ({
  users,
  handleEditClick,
  handleRemoveClick,
  // onSortClick,
}) => {
  return (
    <table>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <td className={classes.edit_remove_users}>
              <p className={classes.fonts}>
                <td>{index + 1}.</td>
                <td>{user.userName}.</td>
                <td>{user.userSurname}</td>
                <td>({user.userOld}years old)</td>
              </p>
              <div className={classes.edit_remove}>
                <CustomButton
                  label="edit"
                  classNames={classes.editEction}
                  handleClick={handleEditClick}
                  data={{ index, user }}
                  type="button"
                />

                <CustomButton
                  label="remove"
                  classNames={classes.removeAction}
                  handleClick={handleRemoveClick}
                  data={{ index }}
                  type="button"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
