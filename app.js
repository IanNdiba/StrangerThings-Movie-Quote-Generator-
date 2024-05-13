// const url = "/api/quotes/{number}";
// const url = "https://strangerthings-quotes.vercel.app/api/quotes/1";

// const strangerThingsData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

// const dataM = strangerThingsData(url);

const quote = document.getElementById("quote");
const container = document.getElementById("container");
const quotesContainer = document.getElementById("quotesContainer");
const authorContainer = document.getElementById("authorContainer");
const author = document.getElementById("author");
const button = document.getElementById("btn");
let quoteNumb = document.getElementById("quoteNumb").value;
quoteNumb = parseInt(quoteNumb);

const url = `https://strangerthings-quotes.vercel.app/api/quotes/4`;

button.addEventListener("click", () => {
  fetch(url) // api for the get request
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //TODO map through the data depending on number of quotes
      data.map((item) => {
        //creating the quotes paragraph and appending it
        var quoteP = document.createElement("p");
        quoteP.textContent += item.quote;
        quotesContainer.appendChild(quoteP);

        var authorP = document.createElement("p");
        authorP.textContent += item.author;
        authorContainer.appendChild(authorP);
      });
    });
});
