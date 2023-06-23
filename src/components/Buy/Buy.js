import React from 'react'
import './Buy.css'

const Buy = () => {
  return (
    <section className="buy">
        <div className="buy-desc">Welcome to my online art gallery, where you can explore and purchase my captivating paintings. I'm excited to share my artwork with you, available on two dedicated platforms:</div>

        <ol>
            <li>
                <p>Mojarto</p>
                <span>Immerse yourself in my unique style through a carefully curated selection of paintings on Mojarto. Find the perfect piece that resonates with you and brings beauty to your space.</span><br />
                <a href="https://www.mojarto.com/artist/debajyoti-sarkar/37763" target="_blank" rel="noopener noreferrer">Shop on Mojarto</a>
            </li>
            <li>
                <p>Saatchi Art</p>
                <span>Discover an extensive collection of my paintings on Saatchi Art. From bold and vibrant compositions to serene and contemplative pieces, you'll find a wide variety of art to suit your preferences.</span><br />
                <a href="https://www.saatchiart.com/debajyotisarkar" target="_blank" rel="noopener noreferrer">Shop on Saatchi Art</a>
            </li>
        </ol>

    </section>
  )
}

export default Buy