// from video
const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");
const topicImage = document.querySelector(".topic-image");
//searchFrom.addEventListener("submit", retrieve);

const apiData = {
  url: "https://newsapi.org/v2/top-headlines?",
  lan: "country=us&language=en&",
  cate: "",
  apiK: "apiKey=3680b889e3fe4c128f994a74da6f98db",
}

const banners = {
  sportB: "pictures/sport-banner.jpg",
  eB: "pictures/entertainment-banner.jpg",
  techB: "pictures/tech-banner.jpg"
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
  const apiUrl = `${url}${lan}${cate}${apiK}`;
  console.log(apiUrl);

  fetch(apiUrl)
      .then((result) => result.json())
      .then((data) => { 
      data.articles.forEach((article) => {
        console.log(article);
        let D = document.createElement('div');
        let a = document.createElement('a');
        let i = document.createElement('img');
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.setAttribute('style', 'margin-left: 15px;')
        a.textContent = article.title;
        i.setAttribute('style', 'float:left; width: 100px; height: 50px;');
        i.setAttribute('src', `${article.urlToImage}`);
        i.setAttribute('alt', "News-image");
        D.setAttribute('style', 'padding-top: 20px; margin: 50px;');
        D.appendChild(a);
        D.appendChild(i);
        console.log(D);
        newsList.appendChild(D);
      })
    })
}

