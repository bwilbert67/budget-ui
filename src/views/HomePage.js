import React from 'react';
import '../index.css';
import background from '../assets/budget-background.jpg';
const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
        </div>
    );
};

export default HomePage;
