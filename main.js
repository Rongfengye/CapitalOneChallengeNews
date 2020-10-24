// from video
const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");
//searchFrom.addEventListener("submit", retrieve);

// function retrieve() {
//   // e.preventDefault();
//   let topic = input.value;
//   console.log(topic);
// }

//

const apiData = {
  url: "http://newsapi.org/v2/sources?",
  lan: "language=en&",
  cate: "",
  apiK: "apiKey=3680b889e3fe4c128f994a74da6f98db",

}

const proxyUrl = "http://cors-anywhere.herokuapp.com/"

function buttonHandler(topic) {
  const sportKey = "category=sports&";
  const eKey = "category=entertainment&";
  const techKey = "category=technology&";
  if (topic === "sports") {
    apiData.cate = sportKey;
  } else if (topic === "entertainment") {
    apiData.cate = eKey;
  } else if (topic === "technology") {
    apiData.cate = techKey;
  }

  newsList.innerHTML = ''

  const {url, lan, cate, apiK} = apiData;
  const apiUrl = `${proxyUrl}${url}${lan}${cate}${apiK}`;
  fetch(apiUrl)
      .then((result) => result.json())
      .then((data) => {
      data.sources.forEach((article) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.textContent = article.title;
        console.log(a);
        li.appendChild(a);
        newsList.appendChild(li);
      })
    })

  // console.log(topic);
  // const {url, lan, cate, apiK} = apiData;
  // console.log("this is link", `${url}${lan}${cate}${apiK}`);
}



// console.log(apiUrl)
