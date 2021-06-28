const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let realData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(tweetPost);
};
const getNewQuotes = () => {
  let num = Math.floor(Math.random() * 20);
  quotesData = realData[num];
  quotes.innerHTML = `${quotesData.text}`;
  quotesData.author == null
    ? (author.innerHTML = "unKnown")
    : (author.innerHTML = `${quotesData.author}`);
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
    // console.log(realData.length);
    // console.log(realData[0].author);
  } catch (error) {}
};

tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();
