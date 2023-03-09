// Login page, mail authentification only

import { useEffect, useState } from 'react';
//import firebase from 'firebase/compat/app';
//import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
//import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './index';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        /*loading,
        error,*/
      ] = useSignInWithEmailAndPassword(auth);

    useEffect (() => {
        if(user) {
            //navigation a form
        }
    }, [user])

    const signin = () => signInWithEmailAndPassword(email, password);

    return (
        <div>
            <form>
                <label>
                    login :
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    mot de passe :
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="button" value="Confirmer" onClick={signin} />
            </form>
        </div>
    )
};