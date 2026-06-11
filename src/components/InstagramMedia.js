import React from 'react';
import '../styles/InstagramMedia.css';

function InstagramMedia({ 
  instagramUrl, 
  caption, 
  serviceTags = [], 
  brand = ''
}) {
  // Extract the post ID from Instagram URL
  const getEmbedUrl = (url) => {
    // Handle reels: https://www.instagram.com/reel/DYc50Vex_Qw/
    if (url.includes('/reel/')) {
      const reelId = url.split('/reel/')[1].split('/')[0];
      return `https://www.instagram.com/reel/${reelId}/embed`;
    }
    // Handle posts: https://www.instagram.com/p/POST_ID/
    if (url.includes('/p/')) {
      const postId = url.split('/p/')[1].split('/')[0];
      return `https://www.instagram.com/p/${postId}/embed`;
    }
    // Fallback: return original URL
    return url;
  };

  const embedUrl = getEmbedUrl(instagramUrl);

  return (
    <div className="instagram-media">
      <div className="media-container">
        <iframe
          src={embedUrl}
          className="instagram-embed"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      
      <div className="media-content">
        <div className="brand-info">
          {brand && <span className="brand-tag">{brand}</span>}
        </div>
        
        <div className="service-tags">
          {serviceTags.map((tag, index) => (
            <span key={index} className="service-tag">#{tag}</span>
          ))}
        </div>
        
        <p className="caption">{caption}</p>
        
        <a 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-instagram-link"
        >
          Ver no Instagram →
        </a>
      </div>
    </div>
  );
}

export default InstagramMedia;
