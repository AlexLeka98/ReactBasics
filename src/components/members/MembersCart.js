import styles from './MembersCart.module.css';
import Button from '../UI/Button';
import Member from './Member';
import { useSelector } from 'react-redux';


const MembersCart = () => {

    const membersList = useSelector(state => state.users.usersList);

    return (
        <div className={styles.cartContainer}>
            {membersList.map(member => <Member
                name={member.name}
                email={member.email}
                id={member.id}
                key={member.id} />)}
        </div>
    )
}


export default MembersCart;