import styles from './Form.module.css'
import Input from '../UI/Input';
import Button from '../UI/Button'
import { useSelector, useDispatch } from 'react-redux';
import { loginActions, usersActions, sendMemberData } from '../../store/index';


const Form = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.isLogin.isLogin);
    const loginState = useSelector(state => state.users.loginState);
    const nameValue = useSelector(state => state.users.name);
    const emailValue = useSelector(state => state.users.email);

    const toggleLogin = (event) => {
        event.preventDefault();
        dispatch(loginActions.toggleLogin());
    }

    const onChangeNameHandler = (event) => {
        dispatch(usersActions.setName(event.target.value));
    }

    const onChangeEmailHandler = (event) => {
        dispatch(usersActions.setEmail(event.target.value));
    }


    const onSubmitForm = (event) => {
        event.preventDefault();
        const newMember = { name: nameValue, email: emailValue, id: Math.random() };
        dispatch(sendMemberData(newMember));
        console.log(loginState);
        if (loginState.success === 'success') {
            dispatch(loginActions.toggleLogin());
        }
    }
    return (
        <div className={styles.formContainer}>
            <form onSubmit={onSubmitForm} className={styles.formStyle} >
                {isLogin ? <h1>You are logged in!</h1> : <h1>You are NOT logged in!</h1>}
                <Input name="Name" value={nameValue} onChange={onChangeNameHandler} type="text" />
                <Input name="Email" value={emailValue} onChange={onChangeEmailHandler} type="email" />
                <Button type='submit'>Login</Button>

                {loginState.success === 'success' && <p className={styles[`${loginState.classlist} .alert-hidden`]}>{loginState.message}</p>}
                {loginState.success === 'error' && <p className={styles[`${loginState.classlist} .alert-hidden`]}>{loginState.message}</p>}
            </form>
        </div>
    )
}


export default Form;