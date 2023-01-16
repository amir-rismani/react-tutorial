import styles from './NavBar.module.css'
// Object destructuring
const NavBar = ({ totalItems }) => {
    return (
        <header className={styles.header}>
            <h1>Test Shop</h1>
            <span>{totalItems}</span>
        </header>
    );
}

export default NavBar;