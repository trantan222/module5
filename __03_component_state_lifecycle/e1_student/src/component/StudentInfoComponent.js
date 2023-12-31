import {Component} from "react";

const studentList = [
    {
        id: "1",
        name: "a",
        phone: "0971116404",
        email: "aa@gmail.com",
    },
    {
        id: "2",
        name: "b",
        phone: "0931267895",
        email: "b@gmail.com",
    },
    {
        id: "3",
        name: "c",
        phone: "0923456972",
        email: "b@gmail.com",
    }
];

export class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            list: studentList,
            newItem: {
                id: "",
                name: "",
                phone: "",
                email: "",
            },
            editingId: null, // ID của sinh viên đang được chỉnh sửa
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            newItem: {
                ...prevState.newItem,
                [name]: value,
            },
        }));
    };
    handleAddStudent = () => {
        const newItem = { ...this.state.newItem };
        newItem.id = (studentList.length + 1).toString();
        if (newItem.id && newItem.name && newItem.phone && newItem.email) {
            const updatedList = [...this.state.list, newItem];
            this.setState({
                list: updatedList,
                newItem: {
                    id: "",
                    name: "",
                    phone: "",
                    email: "",
                },
            });
        }
    };

    handleEditStudent = (id) => {
        this.setState({ editingId: id });
    };

    handleSaveStudent = () => {
        // Tìm sinh viên trong danh sách và cập nhật thông tin
        const updatedList = this.state.list.map((student) => {
            if (student.id === this.state.editingId) {
                this.state.newItem.id = student.id;
                return { ...student, ...this.state.newItem };
            }
            return student;
        });
        this.setState({
            list: updatedList,
            newItem: {
                id: "",
                name: "",
                phone: "",
                email: "",
            },
            editingId: null, // Kết thúc chỉnh sửa
        });
    };

    handleDeleteStudent = (id) => {
        const updatedList = this.state.list.filter((student) => student.id !== id);
        this.setState({ list: updatedList });
    };

    render() {
        return (
            <>
                <h1>Student List</h1>
                <div>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.newItem.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.newItem.phone}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.newItem.email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    {this.state.editingId !== null ? (
                        <button onClick={this.handleSaveStudent}>Save</button>
                    ) : (
                        <button onClick={this.handleAddStudent}>Add</button>
                    )}
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.list.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>
                                    {this.state.editingId === student.id ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={this.state.newItem.name}
                                            onChange={this.handleInputChange}
                                        />
                                    ) : (
                                        student.name
                                    )}
                                </td>
                                <td>
                                    {this.state.editingId === student.id ? (
                                        <input
                                            type="text"
                                            name="phone"
                                            value={this.state.newItem.phone}
                                            onChange={this.handleInputChange}
                                        />
                                    ) : (
                                        student.phone
                                    )}
                                </td>
                                <td>
                                    {this.state.editingId === student.id ? (
                                        <input
                                            type="text"
                                            name="email"
                                            value={this.state.newItem.email}
                                            onChange={this.handleInputChange}
                                        />
                                    ) : (
                                        student.email
                                    )}
                                </td>
                                <td>
                                    {this.state.editingId === student.id ? (
                                        <button onClick={() => this.handleSaveStudent(student.id)}>Save</button>
                                    ) : (
                                        <>
                                            <button onClick={() => this.handleEditStudent(student.id)}>Edit</button>
                                            <button onClick={() => this.handleDeleteStudent(student.id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}