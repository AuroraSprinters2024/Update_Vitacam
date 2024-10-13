import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const A_help = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Add your play/pause audio logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recommendations for you...</h2>

      <div style={styles.section}>
        <h3 style={styles.subHeading}>Fruits & Vegetables</h3>
        <div style={styles.recommendationBox}>
          <div style={styles.itemBox}>
            <h4 style={styles.itemHeading}>Fruits:</h4>
            <ul style={styles.list}>
              <li>Oranges</li>
              <li>Lemons</li>
              <li>Grapefruits</li>
              <li>Pineapple</li>
              <li>Mango</li>
            </ul>
          </div>
          <div style={styles.itemBox}>
            <h4 style={styles.itemHeading}>Vegetables:</h4>
            <ul style={styles.list}>
              <li>Tomatoes</li>
              <li>Potatoes</li>
              <li>Snow peas</li>
              <li>Green peas</li>
              <li>Spinach</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.subHeading}>Medicines</h3>
        <ul style={styles.list}>
          <li>Ascorbic Acid Tablets or Capsules</li>
          <li>Chewable Vitamin C Tablets</li>
          <li>Vitamin C Effervescent Tablets</li>
          <li>Vitamin C Gummies</li>
        </ul>
      </div>

      <div style={styles.audioPlayer}>
        <button onClick={handlePlayPause} style={styles.playButton}>
          {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? 'Pause' : 'Play'}
        </button>
        <p style={styles.audioTime}>0:05</p>
      </div>

      <div style={styles.buttons}>
        <button style={styles.checkButton}>Check Again</button>
        <button style={styles.exitButton}>Exit</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '90px',
    color: '#004AAD',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subHeading: {
    color: '#333',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '20px',
    padding: '10px 0',
  },
  recommendationBox: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
  itemBox: {
    flex: '1',
    backgroundColor: '#fff', // White background for boxes
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
    border: '1px solid #007BFF', // Border effect with blue color
  },
  itemHeading: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#007BFF',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    color: '#555',
  },
  audioPlayer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  playButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#004AAD',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  audioTime: {
    marginLeft: '10px',
    color: '#555',
    fontSize: '16px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  checkButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  exitButton: {
    padding: '10px 20px',
    backgroundColor: '#004AAD',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
};

export default A_help;
