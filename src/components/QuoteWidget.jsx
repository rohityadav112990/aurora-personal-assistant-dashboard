import React, { useState, useEffect } from 'react';

const QuoteWidget = ({ accentColor }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
      .then(response => response.json())
      .then(data => setQuote(data[0].q + ' - ' + data[0].a))
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="glassmorphism p-4 w-full max-w-sm">
      <h3 className="text-lg font-bold mb-2">Motivational Quote</h3>
      <p className="text-sm italic">{quote || 'Loading quote...'}</p>
    </div>
  );
};

export default QuoteWidget;