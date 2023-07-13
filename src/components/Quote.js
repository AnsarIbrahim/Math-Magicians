import React, { useEffect, useState } from 'react';
import '../styles/quote.css';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const category = 'success';
        const apiKey = 'VI0Rn7COJ1AFccREn6LQYpZX9S2jnq2N046Vk5vm';
        const headers = {
          'X-Api-Key': apiKey,
        };
        const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error('Error fetching the quote');
        }
        const data = await response.json();
        setQuote(data[0]);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching the quote');
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, []);
  if (isLoading) {
    return <p className="quote-load">Loading...</p>;
  }
  if (error) {
    return <p className="quote-error">{error}</p>;
  }
  return (
    <div className="quote">
      <p>
        {quote.quote}
        {' '}
        -
        <span className="author">{quote.author}</span>
      </p>
    </div>
  );
};
export default Quote;
