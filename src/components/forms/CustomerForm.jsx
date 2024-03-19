import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CustomerForm = () => {
    const [customer, setCustomer] = useState({})
    const navigate = useNavigate()


    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        required className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                    type="text"
                    name="number"
                    required className="form-control"
                    />
            </div>
                <fieldset>
                    <div className="form-group">
                        <button className="form-btn btn-primary">Save Profile</button>
                    </div>
                </fieldset>
            </fieldset>
        </form>
    )
}