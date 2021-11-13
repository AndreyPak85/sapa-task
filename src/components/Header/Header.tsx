import { icons } from '../../utils/icons';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container d-flex h100'>
          <div className='header__logo'>
            <img src={icons.logo} alt='' />
          </div>
          <nav className='header__nav'>
            <ul className='header__nav__wrapper'>
              <li className='header__nav__item'>1</li>
              <li className='header__nav__item'>2</li>
              <li className='header__nav__item'>3</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
