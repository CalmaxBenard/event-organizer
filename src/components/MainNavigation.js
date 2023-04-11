import styles from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
