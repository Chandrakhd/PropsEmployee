import React from "react";
import "./style.css";

function Employee(props) {
  console.log(props);
  return (
    <tr className="employee-row">
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.position}</td>
      <td>{props.department}</td>
      <td>{props.salary}</td>
      <td>{props.hireDate}</td>
      <td>{props.isManager}</td>
    </tr>
  );
}

export default Employee;
