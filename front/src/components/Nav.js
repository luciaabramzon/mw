
import React, { useState, useEffect } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import '../styles/navbar.css';
import logo from '../images/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const phone = '0059894343939';
  useEffect(() => {
    const handleResize = () => {
      const navItemsOutsideNavbar = document.querySelector('.navItemsOutsideNavbar');
      if (navItemsOutsideNavbar) {
        if (window.innerWidth >= 769) {
          navItemsOutsideNavbar.style.display = 'none';
        } else {
          navItemsOutsideNavbar.style.display = 'flex';
        }
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleItemClick = (name) => {
    setActiveItem(name);
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuVisible(false); // Ocultamos el menú hamburguesa después de hacer clic en un elemento
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ behavior: 'smooth' });
    setMenuVisible(false); 
  };

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible); 
  };

  return (
    <div className='navContainer'>
      <Menu className='nav'>
        <div className='navbar'>
          <Menu.Item className='logo' name='logo' onClick={scrollToTop}>
            <img src={logo} alt='Logo' />
            <p className='logoTitle'>Martin Williams</p>
          </Menu.Item>
          <div className='navItems'>
            <Menu.Item className='itemsNav'>
              <Link
                to='academia'
                smooth={true}
                duration={500}
                onClick={() => handleItemClick('academia')}
                className={activeItem === 'academia' ? 'active-link' : ''}
              >
                La academia
              </Link>
            </Menu.Item>
            <Menu.Item className='itemsNav'>
              <Link
                to='galeria'
                smooth={true}
                duration={500}
                onClick={() => handleItemClick('galeria')}
                className={activeItem === 'galeria' ? 'active-link' : ''}
              >
                Galeria
              </Link>
            </Menu.Item>
            <Menu.Item className='itemsNav'>
              <Link
                to='servicios'
                smooth={true}
                duration={500}
                onClick={() => handleItemClick('servicios')}
                className={activeItem === 'servicios' ? 'active-link' : ''}
              >
                Servicios
              </Link>
            </Menu.Item>
            <Menu.Item className='itemsNav'>
              <Link
                to='contacto'
                smooth={true}
                duration={500}
                onClick={() => handleItemClick('contacto')}
                className={activeItem === 'contacto' ? 'active-link' : ''}
              >
                Contacto
              </Link>
            </Menu.Item>
            <Menu.Item className='itemsNav'>
              <a href={`https://wa.me/${phone}`} target='_blank' rel='noopener noreferrer'>
                <button className='whatsappButton'>
                  <Icon name='whatsapp' />
                  Whatsapp
                </button>
              </a>
            </Menu.Item>
          </div>
          <div className='hamburger' onClick={toggleMenu}>
            <Icon name={menuVisible ? 'close' : 'bars'} />
          </div>
        </div>
        
        <div className={`navItems ${menuVisible ? 'visible' : ''} navItemsOutsideNavbar`}>
          <Menu.Item className='itemsNav'>
            <Link
              to='academia'
              smooth={true}
              duration={500}
              onClick={() => handleItemClick('academia')}
              className={activeItem === 'academia' ? 'active-link' : ''}
            >
              La academia
            </Link>
          </Menu.Item>
          <Menu.Item className='itemsNav'>
            <Link
              to='galeria'
              smooth={true}
              duration={500}
              onClick={() => handleItemClick('galeria')}
              className={activeItem === 'galeria' ? 'active-link' : ''}
            >
              Galeria
            </Link>
          </Menu.Item>
          <Menu.Item className='itemsNav'>
            <Link
              to='servicios'
              smooth={true}
              duration={500}
              onClick={() => handleItemClick('servicios')}
              className={activeItem === 'servicios' ? 'active-link' : ''}
            >
              Servicios
            </Link>
          </Menu.Item>
          <Menu.Item className='itemsNav'>
            <Link
              to='contacto'
              smooth={true}
              duration={500}
              onClick={() => handleItemClick('contacto')}
              className={activeItem === 'contacto' ? 'active-link' : ''}
            >
              Contacto
            </Link>
          </Menu.Item>
          <Menu.Item className='itemsNav'>
            <a href={`https://wa.me/${phone}`} target='_blank' rel='noopener noreferrer'>
              <button className='whatsappButton'>
                <Icon name='whatsapp' />
                Whatsapp
              </button>
            </a>
          </Menu.Item>
        </div>
      </Menu>
    </div>
  );
};

export default Nav;
