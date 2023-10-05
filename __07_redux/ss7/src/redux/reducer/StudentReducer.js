import {GET_ALL} from "../Type";

const studentReducer = (students = [], action) => {
    const {payload, type} = action;
    switch (type) {
        case GET_ALL:
            return payload;
        case "create_student":
            return [...students, payload];
        default:
            return students;
    }
}

export default studentReducer;
