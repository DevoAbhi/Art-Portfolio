import React from 'react';
import './Home.css';
import twitter from '../../utils/images/socials/twitter.png';
import facebook from '../../utils/images/socials/facebook.png';
import myImage from '../../utils/images/dp.jpg';



const Home = () => {
    return (
        <section className='home-section' id='home'>
            <img className='my-image' src={myImage} alt="abhinab'simage" />

            <div className="my-desc">
                <div className="desc">
                    <p>
                     I am Debajyoti Sarkar, a contemporary artist with a passion for
                    creative art that has spanned an impressive 27 years. Throughout my artistic journey,
                    </p>
                    I have evolved as a visionary, exploring diverse media to bring my artistic visions to life.
                    I have delved into various mediums, including paper, canvas, glass, and even the very walls that surround us. Alongside my two-dimensional work, I have also sculpted free-standing figurines, expanding the boundaries of my creativity.
                </div>

                <div className="social-icons">
                    <a href="https://www.facebook.com/debajyoti.sarkar.940" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://twitter.com/debajyotiart?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home