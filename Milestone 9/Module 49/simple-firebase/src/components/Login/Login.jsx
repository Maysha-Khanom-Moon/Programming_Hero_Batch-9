import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from './../../firebase/firebase.init';
import { useState } from "react";

export default function Login() {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('auth:',auth, '\nprovider:',provider);
        
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            setUser(result.user);
        })
        .catch((error) => {
            console.log('ERROR:', error);  
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('User signed out');
            setUser(null);
        })
        .catch((error) => {
            console.log('Sign out error:', error);
        });
    }

    return (
        <div>
            {
                user ? <button onClick={handleSignOut}>Sign Out</button>
                : 
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            }

            { user && (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="User Avatar" />
                </div>
            )}
        </div>
    );
}
