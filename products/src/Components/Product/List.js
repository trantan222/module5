import {useEffect, useState} from "react";
import * as ServiceProduct from "../../Service/ProductService"
import * as ServiceCategory from "../../Service/CategoryService"
import {NavLink} from "react-router-dom";
import {Delete} from "./Delete";

export function List() {
    const [Products, setProducts] = useState([])
    const [Categories, setCategories] = useState([])
    const [Search, setSearch] = useState('')
    const [filterProduct, setFilterProduct] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [idDelete, setIdDelete] = useState(0);


    const FetchApi = async () => {
        const result = await ServiceProduct.getAllProduct();
        const result2 = await ServiceCategory.getAllCategories();
        setCategories(result2)
        setProducts(result)
    }


    useEffect(() => {
        let filtered = Products;
        if (selectedCategory !== "") {
            filtered = filtered.filter((product) => product.categoryId.toString() === selectedCategory)
        }
        if (Search !== "") {
            filtered = filtered.filter((product) => product.name.toLowerCase().includes(Search.toLowerCase()))
        }
        setFilterProduct(filtered)
    }, [selectedCategory, Search, Products])


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterProduct.slice(indexOfFirstItem, indexOfLastItem);
    const filteredBooks = Products.filter(product => product.name.includes(Search));
    // Logic for displaying page numbers
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const handleClose = () => {
        setIsShowModalDelete(false);
    }
    useEffect(() => {
        FetchApi();
    }, [isShowModalDelete]);


    return (
        <>
            <h1>
                Products
                <NavLink
                    to="/create"
                    style={{float: "right"}}
                    className="btn btn-primary"
                >
                    Add
                </NavLink>
            </h1>
            <label htmlFor="categories">Choose a category:</label>
            <select
                id="categories"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">ALl Categories</option>
                {Categories.map((category) =>(
                    <option key={category.id} value={category.id.toString()}>{category.name}</option>
                ))}
            </select>
            <input
            type ="text"
            placeholder="Input Name"
            value={Search}
            onChange={event => setSearch(event.target.value)}/>
            <table className="table table-info">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.date}</td>
                            <td>{Categories.find((category) => category.id === Number(product.categoryId))?.name}</td>
                            <td>{product.status}</td>
                            <td>
                                <NavLink className="btn btn-warning" to={`/update/${product.id}`}>
                                    Edit
                                </NavLink>{""}
                                &nbsp;
                                <button type="button" className="btn btn-danger"
                                        onClick={() => {
                                            setIdDelete(product.id)
                                            setIsShowModalDelete(true)
                                        }}>Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
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
            <Delete
                show={isShowModalDelete}
                handleClose={handleClose}
                id={idDelete}
            />
        </>
    )
}