import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#fff', color: '#333', padding: '2rem 0', borderTop: '1px solid #eee', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', fontSize: '0.85rem' }}>
        <p>Arya Veda AC - C.F.-94094800037</p>
        <p>Made with love by Ayurveda Web</p>
      </div>
    </footer>
  );
};

export default Footer;
