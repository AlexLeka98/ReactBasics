import styles from './Member.module.css';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../store';

const Member = (props) => {
    const dispatch = useDispatch();

    const onDeleteMember = () => {
        dispatch(usersActions.removeUser(props.id));
    }

    return (
        <div className={styles.member}>
            <h1 className={styles.nameStyle}>{props.name}</h1>
            <h1 className={styles.emailStyle}>{props.email}</h1>
            <Button onClick={onDeleteMember}>DELETE</Button>
        </div>
    )
}


export default Member;