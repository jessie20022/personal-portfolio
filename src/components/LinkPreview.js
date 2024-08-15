import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LinkPreview = ({ url }) => {
  const [metadata, setMetadata] = useState(null);
  const [fetchTime, setFetchTime] = useState(null);
  const [error, setError] = useState(null);

  const fetchMetadata = async (attempt = 1) => {
    const maxAttempts = 5;
    const delay = Math.min(1000 * 2 ** attempt, 30000); // Exponential backoff

    try {
      const startTime = performance.now();
      const response = await axios.get(`https://api.linkpreview.net`, {
        params: {
          key: '8141e2c5df63121351f396a7acb55148', // Your API key
          q: url
        }
      });
      const endTime = performance.now();
      setFetchTime(endTime - startTime);
      setMetadata(response.data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 429 && attempt < maxAttempts) {
        console.warn(`Rate limit exceeded, retrying in ${delay / 1000} seconds...`);
        setTimeout(() => fetchMetadata(attempt + 1), delay);
      } else {
        console.error("Error fetching link preview:", error);
        setError(error);
      }
    }
  };

  useEffect(() => {
    fetchMetadata();
  }, [url]);

  if (error) {  //ie too many requests than the free account allows
    return <p>Error fetching link preview: {error.message}</p>;
  }

  if (!metadata) {
    return <p>Loading preview...</p>;
  }

  return (
    // <div className="link-preview">
    //   <a href={url} target="_blank" rel="noopener noreferrer">
    //     <img src={metadata.image} alt={metadata.title} className="link-preview-image" />
    //   </a>
    //   <div className="link-preview-content">
    //     <h5>{metadata.title}</h5>
    //     <p>{metadata.description}</p>
    //     <a href={url} target="_blank" rel="noopener noreferrer">Visit Link</a>
    //   </div>
    //   {fetchTime && <p>Fetched in {fetchTime.toFixed(2)} ms</p>}
    // </div>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={metadata.image} alt={metadata.title} className="link-preview-image" />
    </a>
  );
};

export default LinkPreview;