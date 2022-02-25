import axios from "axios";

const getPlacesData = async () => {
    try{
        const response = await axios.get("/api/places");
        return response.data;
    }catch(error){
        console.log(error);
    }
}