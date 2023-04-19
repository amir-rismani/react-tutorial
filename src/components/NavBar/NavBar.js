import styles from './NavBar.module.css'
import { useProducts } from '../Providers/ProductsProvider';
// Object destructuring
const NavBar = () => {
    const products = useProducts();
    const totalItems = products.length;
    console.log('NavBar.js render.')
    return (
        <header className={styles.header}>
            <h1>Test Shop</h1>
            <span>{totalItems}</span>
        </header>
    );
}

export default NavBar;