import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as Library from '../service/LIbraryService'
import {toast, ToastContainer} from "react-toastify";
export const List = () => {
    const [Book, setBook] = useState([])
    useEffect(() => {
        FetchAPI()
    }, [Book])
    const FetchAPI = async () => {
        const result = await Library.getAll();
        setBook(result)
    }
    const remove = async (id) =>{
        try {
            await Library.Delete(id)
            toast('remove success')
            // FetchAPI()
        }catch (e){
            console.error('Remove error', e);
            toast.error('Remove failed');
        }
    }
    return (
        <>
            <ToastContainer position="top-right" autoClose={5000}></ToastContainer>
            <h1>Library<NavLink to="/create" style={{float: "right"}} className="btn btn-primary">Add</NavLink></h1>
            <table className="table">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Quantity</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {Book.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink className='btn btn-warning' to={`/update/${book.id}`}>Edit</NavLink>&nbsp;
                            <button className='btn btn-danger' onClick={() => remove(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )

}