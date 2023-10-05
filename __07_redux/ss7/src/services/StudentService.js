import axios from "axios";

export const getAll  = async () => {
    try {
        const result = await axios.get("http://localhost:8080/students");
        return result.data;
    } catch (e) {
        console.log(e)
    }
};

export const addNewStudent = async(value) => {
    try {
        const result = await axios.post("http://localhost:8080/students", value);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
