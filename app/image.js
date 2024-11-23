// app/image.js
import { useState } from 'react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    const description = prompt ? encodeURIComponent(prompt) : 'beautiful%20landscape';
    const randomSeed = Math.floor(Math.random() * 1000000000);
    const heightA = height ? parseInt(height) : 360;
    const widthA = width ? parseInt(width) : 480;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://image.pollinations.ai/prompt/${description}?nologo=1&seed=${randomSeed}&height=${heightA}&width=${widthA}`);
      if (!response.ok) throw new Error('Failed to generate image');

      const image = new Image();
      image.src = response.url; // Assuming the API returns the image URL
      image.onload = () => {
        setLoading(false);
        setImageUrl(image.src);
      };
      image.onerror = () => {
        throw new Error('Image failed to load');
      };
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <main style={{ margin: '2rem auto', maxWidth: '600px', backgroundColor: '#333', borderRadius: '20px', padding: '1rem', color: 'white' }}>
      <div className="generator" style={{ textAlign: 'center' }}>
        <input
          style={{ width: '95%', padding: '0.5rem', borderRadius: '20px', marginBottom: '1rem' }}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your img name here"
        />
        <div>
          <input
            style={{ width: '40%', padding: '0.5rem', borderRadius: '20px 4px 4px 20px', marginBottom: '1rem' }}
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />
          <input
            style={{ width: '40%', padding: '0.5rem', borderRadius: '4px 20px 20px 4px', marginBottom: '1rem' }}
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Width"
          />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleGenerate}
          style={{ backgroundColor: '#0074d9', color: 'white', padding: '0.5rem 1rem', border: 'none', cursor: 'pointer', borderRadius: '8px', boxShadow: '0 0 80px rgba(0, 116, 217, 0.5)' }}
        >
          Generate Image
        </button>
      </div>
      {loading && <div className="loader" style={{ margin: '1rem auto', border: '6px solid black', borderTop: '6px solid white', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {imageUrl && <img src={imageUrl} alt="Generated" style      {imageUrl && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <h2>Generated Image:</h2>
          <img src={imageUrl} alt="Generated" style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }} />
          <div style={{ marginTop: '10px' }}>
            <a href={imageUrl} download style={{ backgroundColor: '#4CAF50', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none' }}>
              Download Image
            </a>
          </div>
        </div>
      )}
    </main>
  );
        }
