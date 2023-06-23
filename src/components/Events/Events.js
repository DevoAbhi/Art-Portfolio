import React from 'react';
import './Events.css';

import { events } from '../../utils/images/events';


const Events = () => {

  return (
    <section className='events'>
        {events.map((event) => (
            <img key={event.key} src={event.src} alt={event.alt} />
        ))}
    </section>
  )
}

export default Events;