import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import logo from '../images/owl.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
        };

        useEffect(() => {
            showButton()
        },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar-main">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img class="navbar-logo__image" src={logo} />
                    <p className="navbar-logo__text">北の国から</p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                            Services
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
                            Products
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/blog' className='nav-links' 
                        onClick={closeMobileMenu} >
                            Blog
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
                            Contact
                        </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>  
        </>
    )
}

export default Navbar
