import styles from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={styles.listItem}>
            <p>{props.children}</p>
        </li>
    )
}

export default NavItem;