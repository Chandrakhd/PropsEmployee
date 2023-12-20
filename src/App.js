import React from "react";
import Employee from "./Employee";

const employeesData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    salary: 95000,
    hireDate: "2022-03-15",
    projects: ["ProjectA", "ProjectB"],
    skills: ["JavaScript", "React", "Node.js"],
    isManager: false,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    position: "Marketing Specialist",
    department: "Marketing",
    salary: 75000,
    hireDate: "2021-09-22",
    projects: ["CampaignX", "CampaignY"],
    skills: ["Digital Marketing", "Social Media", "Content Creation"],
    isManager: false,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    position: "HR Manager",
    department: "Human Resources",
    salary: 85000,
    hireDate: "2020-05-10",
    directReports: [4, 5],
    isManager: true,
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Williams",
    email: "alice.williams@example.com",
    position: "HR Specialist",
    department: "Human Resources",
    salary: 65000,
    hireDate: "2020-08-02",
    isManager: false,
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie.davis@example.com",
    position: "HR Coordinator",
    department: "Human Resources",
    salary: 55000,
    hireDate: "2021-01-15",
    isManager: false,
  },
  // Add more employee objects as needed
];

function App() {
  return (
    <div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Hire Date</th>
            <th>Manager</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee) => {
            return (
              <Employee
                // {...employee}
                id={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                email={employee.email}
                position={employee.position}
                department={employee.department}
                salary={employee.salary}
                hireDate={employee.hireDate}
                isManager={employee.isManager ? "Yes" : "No"}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
