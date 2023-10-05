import axios from "axios";

const URL = "http://localhost:8080/user/"

export const Get_ALL = async () => {
    try{
        const result = await axios.get(URL)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const Delete = async (id) => {
    try{
        const result = await axios.delete(URL+id)
        return result.data
    }catch (e){
        console.log(e)
    }
}
