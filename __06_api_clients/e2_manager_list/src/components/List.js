import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Library from "../service/LIbraryService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const List = () => {
    const [Book, setBook] = useState([]);
    const [FilterBook, setFilterBook] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        FetchAPI();
    }, [Book]);

    const FetchAPI = async () => {
        const result = await Library.getAll();
        setBook(result);
    };
    useEffect(() => {
        const filterResult = Book.filter(
            (book) =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.quantity.toString().toLowerCase().includes(search.toLowerCase())
        ); 
        setFilterBook(filterResult);
    }, [search, Book]);

    const remove = async (id) => {
        try {
            await Library.Delete(id);
            toast(`remove success`);
            // FetchAPI()
        } catch (e) {
            console.error("Remove error", e);
            toast.error("Remove failed");
        }
    };

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = FilterBook.slice(indexOfFirstItem, indexOfLastItem);
    const filteredBooks = Book.filter(book => book.title.includes(search));
    // Logic for displaying page numbers
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return (
        <>
            <h1>
                Library
                <NavLink
                    to="/create"
                    style={{ float: "right" }}
                    className="btn btn-primary"
                >
                    Add
                </NavLink>
            </h1>
            <input
                type="text"
                placeholder="input name title or quantity "
                onChange={(event) => setSearch(event.target.value)}
            />
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
                {currentItems.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink className="btn btn-warning" to={`/update/${book.id}`}>
                                Edit
                            </NavLink>{""}
                            &nbsp;
                            <button
                                className="btn btn-danger"
                                onClick={() => remove(book.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                    </li>
                    {Array.from({ length: Math.ceil(filteredBooks.length / itemsPerPage) }).map((_, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(filteredBooks.length / itemsPerPage) ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};
