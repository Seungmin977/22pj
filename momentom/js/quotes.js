const quotes = [ //Array(배열)
  { //object
    quote: "The way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "2he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "3he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "4he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "5he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "6he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "7he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "8he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "9he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
  {
    quote: "10he way to get started is to quit talking and begin 어쩌구",
    author: "walt disney",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// Math.random() 함수는 0 부터 1까지 안에서 랜덤으로 값보여줌 그럼 0~ 10 을 보여주려면 * 10 하면 됨
// 소수점 없애는 함수는 round() 1.2 가 있어도 1로 돌려줌, ceil은 높여줌 1.1 은 2 가 됨, floor 는 1.9는 1 이됨
