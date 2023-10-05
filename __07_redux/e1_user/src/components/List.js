import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteUserRequest, getUsersRequest} from "../redux/UserAction";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);

    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        if (buttonClicked) {
            dispatch(getUsersRequest());
        }
    }, [dispatch, buttonClicked]);

    const handleGetUsers = () => {
        setButtonClicked(true);
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUserRequest(userId))
    };

    return (
        <div>
            <h1>User List</h1>
            <button onClick={handleGetUsers} disabled={loading || buttonClicked}>
                Get Users
            </button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
