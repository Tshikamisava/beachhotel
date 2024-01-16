import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from './Modal';

class Navbar extends Component {
  state = {
    isOpen: false,
    showModal: false,
    email: '',
    password: '',
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLogin = () => {
    // Implement your login logic here
    // Access email and password from this.state.email and this.state.password
    // For simplicity, let's just close the modal for now
    this.setState({ showModal: false, email: '', password: '' });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isOpen, showModal, email, password } = this.state;

    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='Beach Resort' />
            </Link>
            <button type='button' className='nav-btn' onClick={this.handleToggle}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
            <li>
              <Link to='/bookings'>Bookings</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to={Modal}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        {/* Modal */}
        <div className={`modal ${showModal ? 'is-active' : ''}`}>
          <div className='modal-background' onClick={() => this.setState({ showModal: false })}></div>
          <div className='modal-content'>
            {/* Your login form goes here */}
            <h2>Login Form</h2>
            <form>
              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input
                    className='input'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder='Enter your email'
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input
                    className='input'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder='Enter your password'
                  />
                </div>
              </div>
              {/* Add your input fields, labels, and buttons for login */}
              <button type='button' onClick={this.handleLogin} className='button is-primary'>
                Login
              </button>
            </form>
          </div>
          <button className='modal-close is-large' aria-label='close' onClick={() => this.setState({ showModal: false })}></button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
