import axios from "axios";

//Conection to API
const getData = async (url) => {
  try {
    const res = await axios.get(url);
    const result = await res.data;
    // console.log(result)
    return result;
  } catch (err) {
    if(axios.isAxiosError(err)) {
    return {status: 404, message: 'Failed to connect to server'};
    } else {
      return {status: 500, message: 'Failed to connect to server'};
    }
  }
}

export default getData;
