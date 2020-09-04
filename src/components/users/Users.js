import React, { Fragment, useState } from "react";
import UserItem from "./UserItem";
import UserModal from "./UserModal";
import data from "../json/data.json";

const Users = () => {
  const [users] = useState(data.members);
  const [current, setCurrent] = useState([]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <h2 className="mb-4">Users</h2>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th>Name</th>
            <th>Time Zone</th>
            <th>Activity</th>
          </tr>
        </thead>

        <tbody>
          {users ? (
            users.map((user, i) => (
              <UserItem
                key={user.id}
                user={user}
                index={i}
                toggle={toggle}
                setCurrent={setCurrent}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </tbody>

        <UserModal modal={modal} toggle={toggle} current={current} />
      </table>
    </Fragment>
  );
};

export default Users;
