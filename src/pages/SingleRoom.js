import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RoomContext } from '../context';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import StyledHero from '../components/styledHero';
import defaultImg from '../images/room-1.jpeg';

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = React.useContext(RoomContext);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className='error'>
        <h3>No such room could be found</h3>
        <Link to='/rooms' className='btn-primary'>
          Back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  return (
    <>
      <StyledHero img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {images.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : R{price}</h6>
            <h6>size : {size} SQFT</h6>
            
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>extras </h6>
        <ul className='extras'>
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
