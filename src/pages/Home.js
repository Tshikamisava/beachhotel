import React, { useState } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Login from '../components/Login';

import Modal from '../components/Modal';



export default function Home() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <>
    <Hero>
        <Banner title='luxurious rooms' subtitle='deluxe rooms starting at R300'>
        <Link to='/rooms' className='btn-primary'>
            our rooms
        </Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />

    <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <Login />
      </Modal>
    
    </>
  )
}
