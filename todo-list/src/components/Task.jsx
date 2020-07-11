import React from "react";

const Task = (props) => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Tasks</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((task, i) => {
            return (
              <tr key={i}>
                <td style={{ textDecoration: task.fontStyle }}>
                  {task.taskDetails}
                </td>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => props.handleCheckbox(e.target.checked, i)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => props.handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
