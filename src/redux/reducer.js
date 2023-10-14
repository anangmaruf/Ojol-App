import {combineReducers} from 'redux';

const initialState = {
  name: 'Anang',
};

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'Ini adalah reducer register',
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const initialStateLogin = {
  info: 'Tolong masukan password dan email',
  isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
