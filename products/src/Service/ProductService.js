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
export const FindById = async (id) =>{
    try{
        const result =  await axios.get(URL+id)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const Update = async (id,value) =>{
    try{
        const result =  await axios.put(URL+id, value)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const Delete = async (id) => {
    try {
        const result = await axios.delete(URL + id);
        return result.data;
    } catch (e) {
        console.error(e);
        throw e; // Ném lỗi để xử lý ở nơi gọi hàm Delete.
    }
}