var quote = document.getElementById('quote');
var author = document.getElementById('author');
var quotes = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'Success is not the key to happiness. Happiness is the key to success.',
    author: 'Albert Schweitzer',
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    quote: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair',
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: 'Chris Grosser',
  },
  { quote: 'Dream big and dare to fail.', author: 'Norman Vaughan' },
];

var prevRandom = -1;
function newQuote() {
  var random;

  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === prevRandom);
  prevRandom = random;

  quote.innerHTML = `"${quotes[random].quote}"`;
  author.innerHTML = `--${quotes[random].author}`;
}
