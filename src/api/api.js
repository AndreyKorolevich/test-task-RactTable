import {bigURL, smallURL} from "../Constant/URL";

export const getData = async (pointer) => {
    try{
        let url;
        pointer === 'small' ? url = smallURL : url = bigURL
        const response = await fetch(url);
        return response.json()
    }catch (e) {
        console.error(e)
    }

}