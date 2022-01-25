import './App.css';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import Content from './components/UI/Content';
import MembersCart from './components/members/MembersCart';
import Calculator from './components/calculator/Calculator';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from './store';
import useHttp from './store/hooks/useHttp';
import { useEffect } from 'react';
import Todo from './components/todo/Todo';

function App() {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogin.isLogin);
    
    const addDataToStore = (data) => {
        dispatch(usersActions.initializeUsers(data));
    }

    const reqInfo = {
        url: 'https://react-http-a713f-default-rtdb.europe-west1.firebasedatabase.app/members.json',
        method: 'GET',
        body: null,
        headers: undefined
    }
    const { error, isLoading, httpRequest: fetchData } = useHttp(reqInfo, addDataToStore);
    useEffect(() => {
        fetchData();
    }, [])
    const showUserCart = useSelector(state => state.users.showUserCart);
    return (
        <div className="App" >
            <Navbar />
            {isLoading && <h2>We are loading...</h2>}
            {showUserCart && <MembersCart />}
            <Content>
                {!isLogged && <Form />}
                {isLogged && <h1>Welcome back bro!</h1>}
            </Content>
            <Calculator />
            <Todo />
        </div>
    );
}

export default App;