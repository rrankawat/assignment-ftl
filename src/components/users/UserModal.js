import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const UserModal = ({ modal, toggle, current }) => {
  const [date, setDate] = useState(new Date("2020/01/01"));
  const [filter, setFilter] = useState([]);

  const onChange = (date) => {
    setDate(date);
    const selected = Date.parse(new Date(date));
    const list = current.filter(
      (date) => selected === Date.parse(new Date(date.start_time.slice(0, 11)))
    );

    setFilter(list);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Activity</ModalHeader>
      <div className="modal-body">
        <div className="d-flex justify-content-between mb-4">
          <h5>Select Date</h5>
          <span>
            <DatePicker
              selected={date}
              onChange={(date) => onChange(date)}
              isClearable
              popperPlacement="bottom-end"
            />

            {filter.length > 0 ? (
              <div className="mt-1 text-success">
                {filter.length} match found
              </div>
            ) : (
              <div className="mt-1 text-danger">No match</div>
            )}
          </span>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>

          <tbody>
            {filter.length > 0
              ? filter.map((val, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{val.start_time}</td>
                    <td>{val.end_time}</td>
                  </tr>
                ))
              : current.map((val, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{val.start_time}</td>
                    <td>{val.end_time}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default UserModal;
