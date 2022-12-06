import axios from "axios";

//Conection to API
const getData = async (url) => {
  try {
    const res = await axios.get(url);
    const result = await res.data;
    // console.log(result)
    return result;
  } catch (err) {
    return {status: 404, message: 'Failed to connect to server'};
  }
}

export default getData;
