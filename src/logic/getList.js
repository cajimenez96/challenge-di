import getData from "../utils/getData"
//Obtain element of data to API
const retrieveList = async (array) => {
  let dataList = []
  for (let url of array) {
    dataList = [...dataList, await getData(url)]
  }
  return dataList
}

export default retrieveList