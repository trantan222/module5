import axios from "axios";
const URL = "http://localhost:8080/categories";
export const getAllCategories  = async () => {
    try {
        const result = await axios.get(URL);
        // console.log(result)
        return result.data;
    } catch (e) {
        console.log(e)
    }
};