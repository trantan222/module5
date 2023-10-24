import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import * as ServiceProduct from "../../Service/ProductService"
import * as ServiceCategory from "../../Service/CategoryService"
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export function Create() {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        findAll();
    },[]);

    const findAll = async () => {
        const res=await ServiceCategory.getAllCategories();
        setCategories(res);
    }
    const initValues = {
        name: 'tan',
        quantity: 111,
        status: '',
        date: '',
        categoryId: 1
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required '),
        quantity: Yup.number().required('quantity is required ').min(1, 'Quantity must be at least 1'),
        status: Yup.string().required('status is required'),
        // categoryId: Yup.number().required(' categoryId is required')
    });
    const Submit = async (values) => {
        console.log(values)
        navigate('/')
        toast(`Added !!!`)
    }
    return (
        <>
            <Formik
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={(values) =>{
                    const create = async ()=>{
                        await ServiceProduct.AddNew(values)
                    }
                    create()
                    console.log(values)
                    navigate('/')
                    toast(`Added !!!`)
                }}
            >
                <div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name='name' type="text" className="form-control" id="name"
                                   placeholder="name"/>
                            <ErrorMessage name='name' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <Field name='quantity' type="text" className="form-control" id="quantity"
                                   placeholder="Quantity"/>
                            <ErrorMessage name='quantity' className='text-danger'></ErrorMessage>
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
    )
}