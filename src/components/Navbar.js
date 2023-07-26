import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'My Profile',
    },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={planet} alt="Logo" />
          <h1>
            <a href="/">Space Traveler&apos;s Hub</a>
          </h1>
        </div>
        <ul className="ulElement">
          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink
                style={{ textDecoration: 'none', color: 'blue' }}
                to={link.path}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
