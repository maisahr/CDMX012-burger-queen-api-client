import { useEffect, useState } from "react";
import './EmployeesList.css';
import { ModifyEmployee } from "../Modify Employee/ModifyEmployee";

export const EmployeesList = () => {
    const [employees, setEmployees] = useState();


    useEffect(() => {
        fetch('http://localhost:3333/users')
            .then((response) => {
                return response.json()
            })
            .then((employees) => {
                setEmployees(employees);
            })
    }, [])

    function reRender() {
        fetch('http://localhost:3333/users')
            .then((response) => {
                return response.json()
            })
            .then((employees) => {
                setEmployees(employees);
            })
    }

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                        <th>Opt</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map(employee => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.roles}</td>
                                <td> <ModifyEmployee id={employee.id} render={reRender}> </ModifyEmployee></td>
                            </tr>
                        );
                    })
                    }
                </tbody>

            </table>
        </div>
    )
}