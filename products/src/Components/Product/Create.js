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
        "code": "",
        "name": "",
        "quantity": 0,
        "date": "",
        "description" : "",
        "cost" :"",
        "categoryId": 1,
    }
    const validationSchema = Yup.object().shape({
        code : Yup.string().required('code is required').matches(/^PROD-/,'code must start with PROD-XXX'),
        name: Yup.string().required('name is required '),
        quantity: Yup.number().required('quantity is required ').min(1, 'Quantity must be at least 1').integer('quantity must be integer'),
        date : Yup.date().required('date is required').max(new Date(),'Date must be in the present or future'),
        description : Yup.string().required('description is required'),
        cost : Yup.string().required('cost is required'),
        categoryId: Yup.number().required(' categoryId is required')
    });
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
                    <h1>Create</h1>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <Field name='code' type="text" className="form-control" id="code"
                                   placeholder="code"/>
                            <ErrorMessage name='code' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name='name' type="text" className="form-control" id="name"
                                   placeholder="name"/>
                            <ErrorMessage name='name' className='text-danger'></ErrorMessage>
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
                            <label htmlFor="">Cost</label>
                            <Field name='cost' type="text" className="form-control" id="cost"
                                   placeholder="cost"/>
                            <ErrorMessage name='cost' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <Field name='quantity' type="text" className="form-control" id="quantity"
                                   placeholder="Quantity"/>
                            <ErrorMessage name='quantity' className='text-danger'></ErrorMessage>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Date</label>
                            <Field name='date' type="date" className="form-control" id="date"
                                   placeholder="date"/>
                            <ErrorMessage name='date' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <Field name='description' type="text" className="form-control" id="description"
                                   placeholder="description"/>
                            <ErrorMessage name='description' className='text-danger'></ErrorMessage>
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