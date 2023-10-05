import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllStudentMiddle} from "../redux/middleware/StudentMiddleware";

export function StudentList() {
    // const [students, setStudents] = useState([]);

    const students = useSelector(store => store.students);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStudentMiddle());
    }, []);

    // const getAll = async () => {
    //     const result = await studentService.getAll();
    //    setStudents(result);
    // };
    return (
        <>
            <h1>Student List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Language</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.gender === 1 ? 'Male' : 'Female'}</td>
                            <td>
                                {
                                    student.languages.map((lang, index) => (
                                        <span key={index}>{lang + ', '}</span>
                                    ))
                                }
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
