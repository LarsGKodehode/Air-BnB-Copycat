import styles from './Navbar.module.css';

import logo from '/logo.svg';

function Navbar() {
  return(
    <div className={styles['navbar-wrapper']}>
      {/* Main Logo */}
      <img className={styles['logo']} src={logo}/>
      <h3 className={styles['logo-title']}>Navbar</h3>

      {/* Navbar links */}
      <nav className={styles['link-wrapper']}>
        <li><a className={styles['link']} href='index.html'>Home</a></li>
        <li><a className={styles['link']} href='index.html'>About</a></li>
        <li><a className={styles['link']} href='index.html'>Project</a></li>
        <li><a className={styles['link']} href='index.html'>Explore</a></li>
      </nav>
    </div>
  );
};

export default Navbar;