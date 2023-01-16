import styles from './NavBar.module.css'
const NavBar = (props) => {
    return (
        <header className={styles.header}>
            <h1>Test Shop</h1>
            <span>{props.totalItems}</span>
        </header>
    );
}

export default NavBar;