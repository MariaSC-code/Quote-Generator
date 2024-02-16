const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "- Steve Jobs"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "- Sam Levenson"
    },
    {
      quote: "It always seems impossible until it's done.",
      author: "- Nelson Mandela"
    },
   
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "- Eleanor Roosevelt"
    },
    {
      quote: "If you want to achieve greatness stop asking for permission.",
      author: "- Anonymous"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "- John D. Rockefeller"
    },
    {
      quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "- William Butler Yeats"
    },
    {
      quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
      author: "- Winston Churchill"
    },
    {
      quote: "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "- Confucius"
    },
    {
      quote: "I find that the harder I work, the more luck I seem to have.",
      author: "- Thomas Jefferson"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "- Franklin D. Roosevelt"
    },
    {
      quote: "The only way to achieve the impossible is to believe it is possible.",
      author: "- Charles Kingsleigh"
    },
    {
      quote: "It's not what happens to you, but how you react to it that matters.",
      author: "- Epictetus"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "- C.S. Lewis"
    },
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "- Vince Lombardi"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "- Steve Jobs"
    }
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
  
    const { quote, author } = getRandomQuote();
    quoteElement.textContent = quote;
    authorElement.textContent = author;
  }
  document.getElementById('btn').addEventListener('click', function() {
    displayQuote();
});

  document.getElementById('saveBtn').addEventListener('click', function() {
    const quote = document.getElementById('quote').textContent;
    const author = document.getElementById('author').textContent;

    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];

    savedQuotes.push({ quote, author });
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));

    alert(`Quote saved: "${quote}" ${author}`);
});

  
  displayQuote();