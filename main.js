const apiData = {
  url: "http://newsapi.org/v2/sources?",
  lan: "language=en&",
  cate: "category=sports&",
  apiK: "apiKey=3680b889e3fe4c128f994a74da6f98db",

}
const {url, lan, cate, apiK} = apiData
const proxyUrl = "http://cors-anywhere.herokuapp.com/"

const apiUrl = `${proxyUrl}${url}${lan}${cate}${apiK}`

console.log(apiUrl)
fetch(apiUrl)
    .then( (result) => result.json())
    .then( (data) => console.log(data))