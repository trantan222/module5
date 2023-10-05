import {useEffect, useState} from "react";
import * as Library from '../service/LIbraryService'
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function Update() {
    let navigate = useNavigate()
    const {id} = useParams();
    const [UpdateBook, setUpdateBook] = useState({
        id : '',
        title : '',
        quantity : '',
    })


    const findById = async () => {
        const result = await Library.FindById(id)
        setUpdateBook(result);
    }
    useEffect(() => {
        // const fetchData = async () =>{
        //     const result = await Library.FindById(id)
        //     setUpdateBook(result);
        // }
        // fetchData()
        findById()
    },);
    return UpdateBook.title !== '' ?(
        <>
            <>
            <Formik
                initialValues={{
                    title : UpdateBook.title,
                    quantity : UpdateBook.quantity
                }}
                onSubmit={(values) =>{
                    const update = async () =>{
                        await Library.Update(id,values);
                    }
                    update()
                    toast("update")
                    navigate('/')
                }}

            >
                <div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field name='title' type="text" className="form-control" id="title"
                                   placeholder="title"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <Field name='quantity' type="text" className="form-control" id="quantity"
                                   placeholder="Quantity" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
        </>
    ) : ''
}