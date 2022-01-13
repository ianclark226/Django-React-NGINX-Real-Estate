import React from 'react';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Faq from '../components/home/Faq';
import Options from '../components/home/Options';

const HomePage = () => {
    return (
        <div className='main'>
            <Banner />
            <About />
            <Options />
            <Faq />
            
        </div>
    )
}

export default HomePage
