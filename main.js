const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");
const topicImage = document.querySelector(".topic-image");

searchFrom.addEventListener('submit', retrieve);

const apiData = {
  url: "https://newsapi.org/v2/top-headlines?",
  lan: "country=us&language=en&",
  cate: "",
  q: "",
  // apiK: "apiKey=3680b889e3fe4c128f994a74da6f98db", my personal
  apiK : "apiKey=78b9d599c4f94f8fa3afb1a5458928d6",
};

let currTopic = "";

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function retrieve(e) {
  e.preventDefault()
  if (currTopic === "") {
    document.getElementById("error-handle").innerHTML = 
    "Choose one of the three categories first!";
  } else {
    document.getElementById("error-handle").innerHTML = 
    "";
  }
  apiData.q = `q=${input.value}&`;
  console.log("input value",apiData.q);
  console.log("topic ",currTopic);
  buttonHandler(currTopic);
}

function buttonHandler(topic) {
  const sportKey = "category=sports&";
  const eKey = "category=entertainment&";
  const techKey = "category=technology&";
  currTopic = topic;
  if (topic === "sports") {
    apiData.cate = sportKey;
    document.getElementById("topic-image").innerHTML =
      "<img src='pictures/sport-banner.jpg' alt='sportpic' width='100%' />";
  } else if (topic === "entertainment") {
    apiData.cate = eKey;
    document.getElementById("topic-image").innerHTML =
      "<img src='pictures/entertainment-banner.jpg' alt='sportpic' width='100%'/>";
  } else if (topic === "technology") {
    apiData.cate = techKey;
    document.getElementById("topic-image").innerHTML =
      "<img src='pictures/tech-banner.jpg' alt='sportpic' width='100%' />";
  }

  newsList.innerHTML = "";

  const { url, lan, cate, q, apiK } = apiData;
  const apiUrl = `${url}${lan}${cate}${q}${apiK}`;
  console.log(apiUrl);
  apiData.q = "";
  fetch(apiUrl)
    .then((result) => result.json())
    .then((data) => {
      data.articles.forEach((article) => {
        console.log(article);
        let D = document.createElement("li");
        // News Link
        let a = document.createElement("a");
        a.setAttribute("href", article.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        a.setAttribute("style", "margin-left: 15px;");
        a.textContent = article.title;
        // News Image
        let i = document.createElement("img");
        i.setAttribute("style", "float:left; width: 100px; height: 50px;");
        i.setAttribute("src", `${article.urlToImage}`);
        i.setAttribute("alt", "no image available");
        // News Date
        let date = document.createElement("span");
        date.textContent = `Published: ${
          months[article.publishedAt.slice(5, 7) - 1]
        }/${article.publishedAt.slice(
          8,
          article.publishedAt.length - 10
        )}/${article.publishedAt.slice(0, 4)}`;
        date.className = "news-date";
        // Finalizing the Div element
        D.className = "news-links";
        D.appendChild(a);
        D.appendChild(i);
        D.appendChild(document.createElement("br"));
        D.appendChild(date);
        console.log(D);
        newsList.appendChild(D);
      });
    });
}
