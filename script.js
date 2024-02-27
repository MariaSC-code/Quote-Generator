// Get references to elements in the HTML
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// Function to fetch a new quote within a specific length range
function getQuote() {
  
  const minLength = 70; // Define the minimum and maximum length for quotes
  const maxLength = 150;

  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      // Check if the quote length is within the desired range
      if (data.content.length >= minLength && data.content.length <= maxLength) {
        quote.textContent = data.content;
        author.textContent = `- ${data.author}`;
      } else {
        // If the quote is not within the desired range, fetch another quote
        getQuote();
      }
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      quote.textContent = 'An error occurred while fetching the quote.';
      author.textContent = '';
    });
}

// Event listener for the "Get Quote" button
btn.addEventListener('click', getQuote);

// Initial quote fetch when the page loads
getQuote();

//-----   SAVE BUTTON ------//

// Function to save the current quote to local storage
document.getElementById('saveBtn').addEventListener('click', function() {
  const quoteText = quote.textContent;
  const authorText = author.textContent;

  let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];

  savedQuotes.push({ quote: quoteText, author: authorText });
  localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));

  alert(`Quote saved: "${quoteText}" ${authorText}`);
});
