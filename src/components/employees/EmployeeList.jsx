import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/UserService"
import { User } from "../../user/User"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })

    }, [])

    return (<div className="employees">
        {employees.map((employeeObj) => { 
            return (
                <Link to={`/employees/${employeeObj.id}`} key ={employeeObj.id}>
                <User user={employeeObj} key={employeeObj.id} />
                </Link>
            )
        })}
    </div>
    )
}