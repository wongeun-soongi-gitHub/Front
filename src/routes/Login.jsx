import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            Login
            <hr/>
            <Link to='/join'>회원가입</Link>
        </div>
    );
};

export default Login;