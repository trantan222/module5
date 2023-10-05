// DeleteUser.js

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteUserRequest} from "../redux/UserAction";
import {useNavigate} from "react-router-dom";

const DeleteUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [message, setMessage] = useState("");

    const handleDeleteUser = () => {
        if (userId) {
            dispatch(deleteUserRequest(userId))
                .then(() => setMessage("User deleted successfully"))
                .catch((error) => setMessage("Failed to delete user"));
            navigate('/')
        } else {
            setMessage("Please enter a valid user ID");
        }
    };

    return (
        <div>
            <h1>Delete User</h1>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleDeleteUser}>Delete</button>
            <p>{message}</p>
        </div>
    );
};

export default DeleteUser;
