import axios from "axios";
const URL = "http://localhost:8080/phoneNumber/";
export const FindAll  = async () => {
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (e) {
        console.log(e)
    }
};
export const addNew = async (value) =>{
    try{
        const result =  await axios.post(URL, value)
        return result.data
    }catch (e){
        console.log(e)
    }
}