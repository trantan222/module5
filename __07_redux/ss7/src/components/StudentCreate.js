import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import * as studentService from "../services/StudentService"
import {useDispatch} from "react-redux";
import {createStudentMiddle} from "../redux/middleware/StudentMiddleware";

export function StudentCreate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //Hủy subscription
            //ClearInterval
            // console.log("bye bye")
        }
    });

    const addStudent = async (value) => {
        value.gender = value.gender * 1;
        dispatch(createStudentMiddle(value));
        navigate("/students")
        toast.success("Thêm mới thành công")
    };

    return (
        <>
            <div className='container'>
                <h1>Create Student</h1>
                <Formik
                    initialValues={
                        {
                            name: "",
                            age: 0,
                            gender: '0',
                            languages: []
                        }
                    }
                    validationSchema={
                        Yup.object({
                            name: Yup.string()
                                .required("Tên không được để trống")
                                .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dạng"),
                            age: Yup.number()
                                .min(18)
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        //Call
                       addStudent(values);
                        setSubmitting(false);
                    }}
                >
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Name</label>
                            <Field type='text' className='form-control' id='studentName' name="name"/>
                            <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentAge' className='form-label'>Age</label>
                            <Field name="age" type='number' className='form-control' id='studentAge'/>
                            <ErrorMessage name="age" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <div className="form-check form-check-inline">
                                <Field name="gender" className="form-check-input" type="radio"
                                       id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field name="gender" className="form-check-input" type="radio"
                                       id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                            </div>
                        </div>

                        <label className='form-label'>Languages</label>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="C#"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C#
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="JAVA" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                JAVA
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="languages" className="form-check-input" type="checkbox" value="ReactJS"
                                   id="cb2"/>
                            <label className="form-check-label" htmlFor="cb2">
                                ReactJS
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </div>

        </>
    )
}
