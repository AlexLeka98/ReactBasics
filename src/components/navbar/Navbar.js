import Button from '../UI/Button';
import styles from './Navbar.module.css'
import NavItem from './NavItem';
import { usersActions } from '../../store';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();

    const showMembers = () => {
        dispatch(usersActions.toggleUserCard());
    }

    return (
        <nav className={styles.navbar} >
            <ul>
                <NavItem>Home</NavItem>
                <NavItem>About us</NavItem>
                <Button>Login</Button>
                <Button onClick={showMembers}>Members</Button>
            </ul>
        </nav>
    )
}


export default Navbar;