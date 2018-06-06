import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const userCreated = (state={}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'USER_CREATED':
            nuevoEstado = {mensaje: "El usuario se creó con éxito"}
            return nuevoEstado;
        case 'USER_ERROR':
            nuevoEstado = {mensaje: "El usuario no se creó o los datos no son correctos"}
            return nuevoEstado;
        default:
            return {};
    }
}

const session = (state= null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'LOGIN':
        nuevoEstado = action.data;
        return nuevoEstado;
        case 'LOGOUT':
        nuevoEstado = null;
        return nuevoEstado;
        default:
            return state;
    }
}


const reducer = combineReducers({
    form: formReducer,
    userStatus: userCreated
});

const store = createStore(reducer);

export default store;
