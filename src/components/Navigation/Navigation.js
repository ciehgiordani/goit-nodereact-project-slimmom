import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

function Navigation({ ...DOMprops }) {
  return (
    <nav>
      <div className={styles.navigation}>
        <NavLink
          to="/diary"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          {...DOMprops}
        >
          Diary
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          {...DOMprops}
        >
          Calculator
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
