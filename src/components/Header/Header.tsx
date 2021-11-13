import { Link, NavLink, useHistory } from 'react-router-dom';
import { icons } from '../../utils/icons';

export const Header = () => {
  const history = useHistory();
  return (
    <>
      <header className='header'>
        <div className='container d-flex h100'>
          <div className='header__logo' onClick={() => history.push('/')}>
            <img src={icons.logo} alt='' />
          </div>
          <nav className='header__nav'>
            <ul className='header__nav__wrapper'>
              <NavLink to='/' exact activeClassName='active-link'>
                <li className='header__nav__item'>Main</li>
              </NavLink>
              <NavLink to='/task' exact activeClassName='active-link'>
                <li className='header__nav__item'>Task</li>
              </NavLink>
              <NavLink to='/contacts' exact activeClassName='active-link'>
                <li className='header__nav__item'>Contacts</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
