
import { ref } from "vue"
import axios from "axios";

export function useGetData() {

    const data = ref(null)

    const getData = async(url) => {
        try{
            const response = await axios.get(url);
            data.value = response.data;
        }
        catch(e){
            console.log(e)
        }
    }

    return({
        data, 
        getData
    })
}