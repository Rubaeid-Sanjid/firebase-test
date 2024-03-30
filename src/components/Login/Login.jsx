import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      {user ? 
        <button onClick={handleSignOut}>Sign Out</button> : 
        <button onClick={handleSignIn}>Sign In</button>
      }
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
