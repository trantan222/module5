import {useState} from "react";
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {Dna} from "react-loader-spinner";

export default function form() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    id: '',
                    date: '',
                    gender: '1',
                    country: '',
                    company: '',
                    position: '',
                    insurance: 'true',
                    city: '',
                    district: '',
                    society: '',
                    address : '',
                    phonenumber: '',
                    email: '',
                    feel: '',
                    strong: '',

                }}
                validationSchema={Yup.object({
                    name: Yup.string
                        .require('required'),
                    date : Yup.number
                        .require('required')
                        .min(1900),
                    country : Yup.string
                        .require('required'),
                    city : Yup.string
                        .require('required'),
                    district : Yup.string
                        .require('required'),
                    society : Yup.string
                        .require('required'),
                    address : Yup.string
                        .require('required'),
                    phonenumber : Yup.number
                        .require('required'),
                    email : Yup.string
                        .require('required')
                        .matches('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$','Hiển thị lỗi “Invalid email address” nếu không đúng format sau:')

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                    })
                    setSubmitting(false)
                }}


            >
                {
                    ({isSubmitting}) => (
                        <div className="container">
                            <h1>Form medicine</h1>
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="Name" className="form-label">Họ Tên</label>
                                    <Field type='text' className="form-control" id="Name" name='name'/>
                                    <ErrorMessage name="name" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id" className="form-label">Hộ Chiếu/CMND</label>
                                    <Field type='text' className="form-control" id="id" name='id'/>
                                    <ErrorMessage name="id" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date" className="form-label">Năm Sinh</label>
                                    <Field type='text' className="form-control" id="date"/>
                                    <ErrorMessage name="date" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <span>Giới Tính </span>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input " type='radio' id="inlineRadio1"
                                               value='1' name='gender'>
                                        </input>
                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input " type='radio' id="inlineRadio2"
                                               value='0' name='gender'>
                                        </input>
                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country" className="form-label">Quốc Tịch</label>
                                    <Field type='text' className="form-control" id="country"/>
                                    <ErrorMessage name="country" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company" className="form-label">Công Ty Làm Việc</label>
                                    <Field type='text' className="form-control" id="company" name='company'/>
                                    <ErrorMessage name="company" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position" className="form-label">Bộ Phận Làm Việc </label>
                                    <Field type='text' className="form-control" id="position" name='position'/>
                                    <ErrorMessage name="position" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Có Thẻ Bảo Hiểm Y Tế </span>
                                    <input type='checkbox' className="form-control" id="bh" name='insurance'
                                           value='true'/>
                                    <ErrorMessage name="insurance" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <h2>Địa Chỉ Liên Lạc Tại Việt Nam</h2>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city" className="form-label">Tỉnh/Thành</label>
                                    <Field type='text' className="form-control" id="city" name="city"/>
                                    <ErrorMessage name="city" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="district" className="form-label">Quận/Huyện</label>
                                    <Field type='text' className="form-control" id="district" name="district"/>
                                    <ErrorMessage name="district" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="society" className="form-label">Phường/Xã</label>
                                    <Field type='text' className="form-control" id="society" name="society"/>
                                    <ErrorMessage name="society" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address" className="form-label">Số Nhà,phố,tổ dân phố,thôn,đội</label>
                                    <Field type='text' className="form-control" id="address" name="society"/>
                                    <ErrorMessage name="address" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phonenumber" className="form-label">Số Điện Thoại</label>
                                    <Field type='text' className="form-control" id="phonenumber" name="phonenumber"/>
                                    <ErrorMessage name="phonenumber" component='span'
                                                  className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field type='text' className="form-control" id="email" name="email"/>
                                    <ErrorMessage name="email" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <p className="form-label">Trong 14 ngày qua,Anh/Chị có xuất hiện biểu hiện như sau
                                        đây không?</p>
                                    <input type='checkbox' className="form-control" id="feel" name="feel" value="Sốt"/>
                                    <input type='checkbox' className="form-control" id="feel" name="feel" value="Ho"/>
                                    <input type='checkbox' className="form-control" id="feel" name="feel"
                                           value="Viêm Phổi"/>
                                    <input type='checkbox' className="form-control" id="feel" name="feel"
                                           value="Khó Thở"/>
                                    <input type='checkbox' className="form-control" id="feel" name="feel"
                                           value="Đau Họng"/>
                                    <input type='checkbox' className="form-control" id="feel" name="feel"
                                           value="Mệt Mỏi"/>
                                    <ErrorMessage name="feel" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <p className="form-label">Trong 14 ngày qua,Anh/Chị có tiếp xúc với ?</p>
                                    <input type='checkbox' className="form-control" id="strong" name="strong" value="1"/> Người
                                    bệnh hoặc nghi ngờ,Mắc Bệnh COVID-19
                                    <input type='checkbox' className="form-control" id="strong" name="strong" value="2"/>Người
                                    từ nước có bệnh COVID-19
                                    <input type='checkbox' className="form-control" id="strong" name="strong" value="3"/>Người
                                    có biểu hiện (Sốt,Ho,Khó thở,Viêm Phổi)
                                    <ErrorMessage name="strong" component='span' className="text-danger"></ErrorMessage>
                                </div>
                                {
                                    isSubmitting ?
                                        <Dna
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="dna-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="dna-wrapper"
                                        />
                                        :
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                }

                            </Form>
                        </div>

                    )
                }

            </Formik>
        </>
    )
}