import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoginFormSuccess from './LoginFormSuccess';

const Form = () => {

    const [loginIsSubmited, setLoginIsSubmited] = useState(false);

    const submitForm = () => {
        setLoginIsSubmited(true);
    }

    return (
        <div>
            {!loginIsSubmited ? <LoginForm submitForm={submitForm}/> : <LoginFormSuccess/>}
        </div>
    );
};

export default Form;

