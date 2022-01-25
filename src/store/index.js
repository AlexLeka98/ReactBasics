import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'Login',
    initialState: {
        isLogin: false
    },
    reducers: {
        toggleLogin(state) {
            state.isLogin = !state.isLogin;
        }
    }
})

const usersSlice = createSlice({
    name: 'Users',
    initialState: {
        usersList: [],
        name: '',
        email: '',
        showUserCart: false,
        loginState: {
            success: '',
            message: '',
            classlist: ''
        }
    },
    reducers: {
        initializeUsers(state, action) {
            let items = [];
            for (const key in action.payload) {
                let pushItem = {
                    name: action.payload[key].name,
                    email: action.payload[key].email,
                    id: Math.random()
                }
                items.push(pushItem);
            }
            state.usersList = items;
        },
        addUser(state, action) {
            const newItem = action.payload;
            const existingItem = state.usersList.find(item => item.email === newItem.email);
            if (!existingItem) {
                state.usersList.push({
                    name: newItem.name,
                    email: newItem.email,
                    id: newItem.id,
                })
                state.loginState.success = 'success';
                state.loginState.message = 'Success! You are now a member.';
                state.loginState.classlist = 'successMessage';
            }
            else {
                state.loginState.success = 'error';
                state.loginState.message = 'This email already exists';
                state.loginState.classlist = 'errorMessage';
            }
            state.name = '';
            state.email = '';

        },
        removeUser(state, action) {
            const id = action.payload;
            const existingItem = state.usersList.find(item => item.id === id);
            if (existingItem) {
                state.usersList = state.usersList.filter(item => item.id !== id);
            }
            if (state.usersList.length === 0) {
                state.showUserCart = false;
            }
        },
        setName(state, action) {
            state.name = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        toggleUserCard(state) {
            state.showUserCart = !state.showUserCart;
        }
    }
})

// 
const calculatorSlice = createSlice({
    initialState: { value: '0', number: '0', result: null, operation: null, },
    name: 'Calculator',
    reducers: {
        operationBuffer(state, action) {
            if (state.operation === null) {
                state.value = `${state.value} ${action.payload} `
                state.operation = action.payload;
                state.result = state.number;
                state.number = '';

            }
            else {
                if (state.operation === '+') {
                    state.result = `${parseFloat(state.result) + parseFloat(state.number)}`;
                    state.value = `${state.result} ${action.payload} `;
                    state.number = '';
                }
                else if (state.operation === '-') {
                    state.result = `${parseFloat(state.result) - parseFloat(state.number)}`;
                    state.value = `${state.result} ${action.payload} `;
                    state.number = '';
                }
                else if (state.operation === 'x') {
                    state.result = `${parseFloat(state.result) * parseFloat(state.number)}`;
                    state.value = `${state.result} ${action.payload} `;
                    state.number = '';
                }
                else if (state.operation === '/') {
                    state.result = `${parseFloat(state.result) / parseFloat(state.number)}`;
                    state.value = `${state.result} ${action.payload} `;
                    state.number = '';
                }

                if (action.payload === '=') {
                    state.operation = null;
                    state.value = state.result;
                    state.number = state.result;
                    state.result = '';
                }
                else {
                    state.operation = action.payload;
                }
            }
        },
        numberBuffer(state, action) {
            if (state.value === '0') {
                state.value = '';
                state.number = '';
            }
            state.value = state.value + action.payload;
            state.number = state.number + action.payload;
        },
        cleanBuffers(state) {
            state.value = '0';
            state.number = '';
            state.result = null;
            state.operation = null;
        },
        delBuffer(state) {
            if (state.number !== '') {
                state.number = state.number.slice(0, state.number.length - 1);
                state.value = state.value.slice(0, state.value.length - 1);
                if (state.number.length === 0) {
                    state.value = '0';
                    state.number = '0';
                }
            }
            else if (state.operation !== null) {
                state.operation = null;
                state.number = state.result;
                state.result = null;
                state.value = state.number;
            }

        }
    }
})

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        isLogin: loginSlice.reducer,
        calc: calculatorSlice.reducer
    }
})

export const usersActions = usersSlice.actions;
export const loginActions = loginSlice.actions;
export const calActions = calculatorSlice.actions;


export const sendMemberData = (member) => {
    return async (dispatch) => {
        dispatch(usersActions.addUser(member));
        try {
            const res = await fetch('https://react-http-a713f-default-rtdb.europe-west1.firebasedatabase.app/members.json',
                {
                    method: 'POST',
                    body: JSON.stringify(member)
                })
            if (!res.ok) {
                throw new Error('Something happened');
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}





export default store;