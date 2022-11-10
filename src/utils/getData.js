import axios from "axios";
//Conection to API
const getData = async (url) => {
  try {
    const res = await axios.get(url)
    const result = await res.data
    return result
  } catch (err) {
    if (axios.isCancel(err)) console.log('Failed to connect to server');
    else console.log(err);
  }
}

export default getData;
