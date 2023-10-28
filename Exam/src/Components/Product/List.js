import {useEffect, useState} from "react";
import * as ServiceProduct from "../../Service/ProductService"
import * as ServiceCategory from "../../Service/CategoryService"
import {NavLink} from "react-router-dom";

export function List() {
    const [Products, setProducts] = useState([])
    const [Categories, setCategories] = useState([])
    const [Search, setSearch] = useState('')
    const [filterProduct, setFilterProduct] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')

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
    useEffect(() => {
        FetchApi();
    }, []);

    useEffect(() => {
        // sort theo name...
        const sortedProducts = Products.sort((a, b) => (a.name > b.name) ? 1 : -1);
        // format date(dd-mm-yyyy)
        const formattedProduct = sortedProducts.map(product => {
            if (product.date) {
                try {
                    const dateObj = new Date(product.date);
                    product.date = dateObj.toLocaleDateString('en-GB');
                } catch (error) {
                    console.log('invalid date')
                }
            }
            return product;
        })
        setFilterProduct(formattedProduct)

    }, [Products]);

    return (
        <>
            <h1>
                Products

            </h1>
            <label htmlFor="categories">Choose a category:</label>
            <select
                id="categories"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                {Categories.map((category) => (
                    <option key={category.id} value={category.id.toString()}>{category.name}</option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Input Name"
                value={Search}
                onChange={event => setSearch(event.target.value)}/>
            <NavLink
                to="/create"
                style={{float: "right"}}
                className="btn btn-primary"
            >
                Add
            </NavLink>
            {filterProduct.length > 0  ? (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                {filterProduct.map(((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.date}</td>
                            <td>{Categories.find((category) => category.id === Number(product.categoryId))?.name}</td>
                            <td>{product.cost}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table> ) : (<p>No product Founds, Please refill your search </p>)}
        </>
    )
}