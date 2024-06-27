import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeProfile } from "../../services/employeeProfileService"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const { employeeId } = useParams()

    useEffect(() => {
        getEmployeeProfile(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])

    const ticketsCount = employee.employeeTickets ?  employee.employeeTickets.length : 0

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email: </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty: </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                {employee.rate}
            </div>
            <footer className="employee-footer">Currently working on {ticketsCount} tickets.</footer>
        </section>
    )
}