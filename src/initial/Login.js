import React from 'react';
import LoginFormaFinal from './LoginForm.js';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

let statusLog;

const Login = (props) =>{
   

    const functionForma = (datos) => {
        //console.log(datos);
        axios.post('https://blog-api-u.herokuapp.com/v1/login',{
            login:{
                email: datos.email,
                password: datos.password
            }
        })
        .then(function(response){
            
            statusLog = true;
            localStorage.setItem('statusLog', statusLog);
            
            console.log(response);
            props.login(response.data); 
        })
        .catch(function(error){
            statusLog = false;
            localStorage.setItem('statusLog', statusLog);

            //console.log(error);
            props.errorLogin();

            
        })
    }

    if (localStorage.getItem('statusLog') === 'true') {
        return(
             <Redirect to={'/home'}/> 
        )
        localStorage.removeItem('statusLog');
    }

    return(
      <div>
          <LoginFormaFinal onSubmit={functionForma} />
      </div>
    )

    
}

const mapStateToProps = (state) => {
    return {
        mensaje: state.userStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (datos) => {
            dispatch({type: 'LOGIN', data: datos});
        },
        errorLogin: () => {
            dispatch({type: 'USER_ERROR'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

//export default Login;
