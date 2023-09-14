import {Component} from "react";

const arrStudents = [
    {
        id: "1",
        name: "Nguyễn Văn A",
        age: 30,
        address: "Hà Nội",
    },
    {
        id: "2",
        name: "Nguyễn Văn Tấn",
        age: 21,
        address: "Hà Nẵng",
    },
    {
        id: "3",
        name: "Nguyễn Văn C",
        age: 18,
        address: "Sài Gòn",
    }
]
export class StudentInfoComponent extends Component {
    render() {
        return (
            <div>
                <table >
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {arrStudents.map(student =>(
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                        ))}
                </table>
            </div>
        );
    }
}