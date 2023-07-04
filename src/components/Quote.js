import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './calculator.css';

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
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          { headers },
        );
        setQuote(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching the quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <p className="quote">Loading...</p>;
  }

  if (error) {
    return <p className="quote">{error}</p>;
  }

  return (
    <div className="quote">
      <p>
        {quote.quote}
        {' '}
        -
        {quote.author}
      </p>
    </div>
  );
};

export default Quote;
