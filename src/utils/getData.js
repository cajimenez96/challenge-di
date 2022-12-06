import axios from "axios";

//Conection to API
const getData = async (url) => {
  try {
    const res = await axios.get(url);
    const result = await res.data;
    return result;
  } catch (err) {
    if (axios.isCancel(err)) console.error('Failed to connect to server');
    else console.error(err);
  }
}

export default getData;
