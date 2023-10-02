
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {Dna} from "react-loader-spinner";

export  function Medicine() {
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
                    phone: '',
                    email: '',
                    feel: '',
                    strong: '',

                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name not empty"),
                    id: Yup.number().required("CMND not empty"),
                    date: Yup.number().required("Birth Year not empty").min(1900),
                    country: Yup.string().required("International not empty"),
                    district: Yup.string().required("Province not empty"),
                    society: Yup.string().required("District not empty"),
                    address: Yup.string().required("Wards not empty"),
                    phone: Yup.number().required("Phone not empty"),
                    email: Yup.string().required("Email not empty")
                        .matches("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$","invalid email")
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}>

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
                                    <label htmlFor="phone" className="form-label">Số Điện Thoại</label>
                                    <Field type='text' className="form-control" id="phone" name="phone"/>
                                    <ErrorMessage name="phone" component='span'
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
                                <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        </div>
            </Formik>
        </>
    )
}