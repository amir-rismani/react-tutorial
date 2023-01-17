import styles from './NavBar.module.css'
// Object destructuring
const NavBar = ({ totalItems }) => {
    console.log('NavBar.js render.')
    return (
        <header className={styles.header}>
            <h1>Test Shop</h1>
            <span>{totalItems}</span>
        </header>
    );
}

export default NavBar;