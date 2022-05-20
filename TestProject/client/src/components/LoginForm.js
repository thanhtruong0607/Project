import React, { useState, useEffect } from 'react';
import validation from './validation';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import axios from '../service/axios';
import { useNavigate } from 'react-router-dom'

const LOGIN_URL = '/login';
const LoginForm = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/')
        }
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setErrors(validation(username, password));

        const users = { username, password };

        const response = await axios.post(LOGIN_URL, users)
        console.log(response);

        localStorage.setItem('users', JSON.stringify(response))
        navigate('/');

    }
    const [hidden, setHidden] = useState(false);

    const hiddenPassword = () => {
        setHidden(preventHidden => !preventHidden);
    }

    return (
        <div className='container-fluid row my-header' >

            <div className='img text-center pb-4 mb-3 col-12'>

                <img alt='Logo'
                    src='https://www.xboss.com/web/image/res.company/3/logo?unique=cecfb71'>
                </img>

            </div>

            <div className='app-wrapper'>

                <div>
                    <h2 className='title'>
                        Welcome Back</h2>
                </div>
                <form>
                    <div className='username'>
                        <label className='label'>
                            User Name</label>
                        <input className='input'
                            type='text' name='username'
                            value={username}
                            onChange={(e) => { setUserName(e.target.value) }}></input>
                    </div>
                    {errors.username &&
                        <p className='error'>
                            {errors.username}</p>}
                    <div className='password'>
                        <label className='label'>
                            Password</label>
                        <input className='input'
                            type={hidden ? "text" : "password"}
                            name='password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}></input>
                        <svg className='eye'
                            onClick={hiddenPassword}>
                            {hidden ? <AiOutlineEye /> :
                                <AiOutlineEyeInvisible />
                            }
                        </svg>
                    </div>
                    {errors.password &&
                        <p className='error'>
                            {errors.password}</p>}
                    <div>
                        <button className='submit'
                            onClick={handleFormSubmit}>
                            Login</button>
                    </div>
                </form>
                <div className='title'>
                    <a href='https://www.xboss.com/'>
                        Don't have an account</a>
                </div>
                <div className='title'>
                    <a href='https://www.xboss.com/' >
                        Log in as superuser</a>
                </div>
                <span className='title'>
                    <a href='https://www.xboss.com/'>
                        Manage Database</a>
                </span>
                <span className='title'>
                    <a href='https://www.xboss.com/'>
                        Powered by Xboss</a>
                </span>
            </div>
        </div>
    );
};

export default LoginForm;