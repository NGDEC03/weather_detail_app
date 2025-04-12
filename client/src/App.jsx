import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await axios.get(`https://weather-dash-x1ak.onrender.com/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      if (err.response && err.response.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Network error or server unavailable');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚡ Weather Wizard</h1>
      <p style={styles.subtitle}>Your futuristic weather guide</p>

      <div style={styles.searchWrapper}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading && <p style={styles.loading}>🌀 Scanning clouds...</p>}
      {error && <p style={styles.error}>⚠️ {error}</p>}
      {weather && (
        <div style={styles.cardWrapper}>
          <WeatherCard data={weather} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5vh',
    fontFamily: 'Poppins, sans-serif',
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#00f5d4',
    textShadow: '0 0 10px #00f5d480',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#e0e0ff',
    opacity: 0.85,
    marginBottom: '2rem',
  },
  searchWrapper: {
    width: '90%',
    maxWidth: '500px',
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '1rem',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
  },
  loading: {
    fontSize: '1.1rem',
    color: '#80ed99',
    fontStyle: 'italic',
    marginTop: '1rem',
  },
  error: {
    marginTop: '1rem',
    color: '#ff4e6b',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.8rem 1.2rem',
    borderRadius: '10px',
    fontWeight: '600',
    boxShadow: '0 0 8px rgba(255, 78, 107, 0.5)',
  },
  cardWrapper: {
    marginTop: '2rem',
    width: '95%',
    maxWidth: '600px',
    animation: 'fadeIn 0.5s ease-in-out',
  },
};

export default App;
