import {useEffect, useState} from "react";
import * as PhoneBook from '../../service/PhoneBookService'
import {NavLink} from "react-router-dom";

export function ListPhoneBook() {
    const [ListBook, setListBook] = useState([])
    const [search, setSearch] = useState('')
    const [filteredList, setFilteredList] = useState([])
    useEffect(() => {
        fetchApi()
    }, [ListBook]);
    const fetchApi = async () => {
        const result = await PhoneBook.FindAll()
        setListBook(result)
    }
    useEffect(() => {
        const filterListBook = ListBook.filter((phone) => phone.Name.toLowerCase().includes(search.toLowerCase()) || phone.Phone.includes(search))
        setFilteredList(filterListBook)
    },[search,ListBook]);
    return (
        <>
            <h1>PhoneNumberBook <NavLink to="/create" style={{float: "right"}} className="btn btn-primary">Add</NavLink>
            </h1>
            <input
                type="text"
                placeholder="input name or phonenumber"
                onChange={event => setSearch(event.target.value)}
            />

            <table className="table">
                <thead>
                <tr>
                    <td>Image</td>
                    <td>Email</td>
                    <td>Phone</td>
                    {/*<td>Actions</td>*/}
                </tr>
                </thead>
                <tbody>
                {filteredList.map((phone) => (
                    <tr key={phone.Name}>
                        <td><img src={phone.Image} alt={phone.Name} width="50" height="50"/></td>
                        <td>{phone.Email}</td>
                        <td>{phone.Phone}</td>
                        <td>
                            {/*<NavLink className='btn btn-warning' to={`/update/${book.id}`}>Edit</NavLink>&nbsp;*/}
                            {/*<button className='btn btn-danger' onClick={() => remove(book.id)}>Delete</button>*/}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}