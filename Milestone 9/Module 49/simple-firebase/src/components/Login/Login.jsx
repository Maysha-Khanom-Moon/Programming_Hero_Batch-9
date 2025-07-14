import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './../../firebase/firebase.init';

export default function Login() {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('auth:',auth, '\nprovider:',provider);
        
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => {
            console.log('ERROR:', error);
            
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
}
