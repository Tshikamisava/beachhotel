import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import propTypes from 'prop-types';
import { RoomContext } from '../context';

const Room = ({ room }) => { 
  const { name, slug, images, price , id} = room;

  const { reserveRoom } = useContext(RoomContext);

  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt={`${name} room`} />
        <div className='price-top'>
          <h6>R{price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          Features
        </Link>
        <button className='btn-primary room-reserve' onClick={() => reserveRoom(id)}>Reserve</button>
      </div>
      <p className='room-info'>{name}</p>
    </article>
  );
};

Room.propTypes = {
  room:propTypes.shape({
    name:propTypes.string.isRequired,
    slug:propTypes.string.isRequired,
    images:propTypes.arrayOf(propTypes.string)
    .isRequired,
    price:propTypes.number.isRequired,
  }
    
  )
}

export default Room;
