import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/Welcome/Welcome"
import { CustomerNav } from "../components/Nav/CustomerNav"
import { TicketList } from "../components/tickets/TicketList"
import { TicketForm } from "../components/forms/TicketForm"
import { CustomerForm } from "../components/forms/CustomerForm"

export const CustomerViews = ({ currentUser }) => {
    return <Routes>
        <Route
            path="/"
            element={
                <>
                    <CustomerNav />
                    <Outlet />
                </>
            }
        >
            <Route index element={<Welcome />} />
            <Route path="tickets" 
            >
                <Route index element={<TicketList currentUser={currentUser} />} />
                <Route path="create" element={<TicketForm currentUser={currentUser}/>} />
               
            </Route>
            <Route path="client-profile" element={<CustomerForm currentUser={currentUser} />} />
        </Route>
    </Routes>

}