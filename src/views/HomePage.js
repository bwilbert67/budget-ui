import React from 'react';
import '../index.css';
import background from '../assets/budget-background.jpg';
import HomeForm from '../components/HomeForm.js';
const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <HomeForm/>
        </div>
    );
};

export default HomePage;
