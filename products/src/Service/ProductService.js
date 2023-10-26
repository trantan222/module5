// ProductService.js
import axios from "axios";
const URL = "http://localhost:8080/products/";

export const getAllProduct = async () => {
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const AddNew = async (values) => {
    try {
        const result = await axios.post(URL, values);
        return result.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
