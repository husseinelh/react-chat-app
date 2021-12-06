import React, { useRef } from 'react';
import { link, useHistory } from 'react-router-dom';
import { GoogleOutlined } from '@ant-design/icons';
import { auth } from './Firebase';

import firebase from './Firebase';

const Signup = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (

        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to the Superchat</h2>
                <div className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined />   Sign In with Google
                </div>

            </div>
        </div>
    );
}

export default Signup;