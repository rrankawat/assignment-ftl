import React from "react";

const UserItem = ({ toggle, setCurrent, user, index }) => {
  const { real_name, tz, activity_periods } = user;

  const onClick = () => {
    toggle();
    setCurrent(activity_periods);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{real_name}</td>
      <td>{tz}</td>
      <td>
        <button className="btn btn-outline-primary btn-sm" onClick={onClick}>
          view
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
