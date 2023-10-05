import * as studentService from "../../services/StudentService"
import {GET_ALL} from "../Type";

export const getAllStudentMiddle = () => async (dispatch) => {
   const res = await studentService.getAll();
   dispatch({
       type: GET_ALL,
       payload: res
   })
}
export const createStudentMiddle = (value) => async (dispatch) => {
    await studentService.addNewStudent(value);
    dispatch({
        type: "create_student",
        payload: value
    })
}

