import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms } = this.context;

    if (loading || !featuredRooms) {
      return <Loading />;
    }

    return (
      <section className='featured-rooms'>
        <Title title='featured rooms' />
        <div className='featured-rooms-center'>
          {featuredRooms.map(room => (
            <Room key={room.id} room={room} />
           
          ))}
           <button>Reserve</button>
        </div>
      </section>
    );
  }
}
