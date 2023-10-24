import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as ServiceProduct from "../../Service/ProductService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as ServiceCategory from "../../Service/CategoryService";

export function Update() {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const findAll = async () => {
        const res=await ServiceCategory.getAllCategories();
        setCategories(res);
    }
    const {id} = useParams()
    const [UpdateProduct, setUpdateProduct] = useState({
        name: '',
        quantity: 1,
        status: '',
        date: '',
        categoryId: 1
    })
    useEffect(()=>{
        findAll();
        findById()
    },[]);
    const findById = async () => {
        const result = await ServiceProduct.FindById(id)
        console.log(result)
        setUpdateProduct(result);
    }
    return UpdateProduct.name !== "" ? (
        <>
            <>
                <h1>Update</h1>
                <Formik
                    initialValues={{
                        name: UpdateProduct.name,
                        quantity: UpdateProduct.quantity,
                        status : UpdateProduct.status,
                        date : UpdateProduct.date,
                        categoryId: UpdateProduct.categoryId
                    }}
                    onSubmit={(values) => {
                        const update = async () => {
                            await ServiceProduct.Update(id, values);
                        }
                        update()
                        toast("update")
                        navigate('/')
                    }}

                >
                    <div>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field name='name' type="text" className="form-control" id="name"
                                       placeholder="name"/>
                                {/*<ErrorMessage name='name' className='text-danger'></ErrorMessage>*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <Field name='quantity' type="text" className="form-control" id="quantity"
                                       placeholder="Quantity"/>
                                {/*<ErrorMessage name='quantity' className='text-danger'></ErrorMessage>*/}
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <Field as="select" id="status" name="status" className="form-select" aria-label="Default select example">
                                    <option value="">Choose Status</option>
                                    <option value="còn hàng">còn hàng</option>
                                    <option value="hết hàng">hết hàng</option>
                                    <option value="hàng chưa về">hàng chưa về</option>
                                </Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Date</label>
                                <Field name='date' type="date" className="form-control" id="date"
                                       placeholder="date"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categoryId">Category</label>
                                <Field as="select" id="categoryId" name="categoryId">
                                    {categories.map((category) => (
                                        <option key={category.id} value={(category.id)}>
                                            {category.name}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <NavLink to='/' className='btn btn-info'>Back</NavLink>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </>
        </>
    ) : null
}