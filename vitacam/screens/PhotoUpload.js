import React, { useState } from 'react';

const PhotoUploadPage = () => {
  // State to manage the display of vitamin status and buttons
  const [isDoneClicked, setIsDoneClicked] = useState(false);

  // Function to handle the "Done" button click
  const handleDoneClick = () => {
    setIsDoneClicked(true);
  };

  return (
    <div className="upload-photo-page">
      <div className="photo-section">
        <h2>Upload Photo</h2>
        <img 
          src="your-image-url-here" 
          alt="Skin Condition"
          style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
        />
      </div>
      <div className="button-section">
        <button className="cancel-btn">Cancel</button>
        <button className="done-btn" onClick={handleDoneClick}>Done</button>
      </div>

      {/* Vitamin Status Section - display based on state */}
      {isDoneClicked && (
        <div className="vitamin-status">
          <h3>Vitamin Status</h3>
          <p>
            Based on your symptoms, it appears that you are suffering from a Vitamin C deficiency.
          </p>
        </div>
      )}

      {/* Recommendations and Exit buttons */}
      <div className="action-buttons">
        <button 
          className="recommendations-btn" 
          style={{
            backgroundColor: isDoneClicked ? '#4A90E2' : 'initial'
          }}
        >
          Recommendations
        </button>
        {isDoneClicked && (
          <button className="exit-btn">Exit</button>
        )}
      </div>
    </div>
  );
};

export default PhotoUploadPage;
