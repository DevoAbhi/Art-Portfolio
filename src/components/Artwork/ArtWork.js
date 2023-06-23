import React from 'react';
import './ArtWork.css';

import { paintings } from '../../utils/images/paintings';


const ArtWork = () => {
  return (
    <section className='artwork'>
        {paintings.map((painting) => (
            <img key={painting.key} src={painting.src} alt={painting.alt} />
        ))}
    </section>
  )
}

export default ArtWork