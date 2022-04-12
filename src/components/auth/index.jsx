import React, { useEffect } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase';
import { firebaseConfig } from '../../firebase-config';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useDispatch } from 'react-redux'
import { addEmail } from '../../actions';

import { Wrapper } from './components'

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
const firebaseAppAuth = firebaseConfig.auth();


const AuthComponent = ({ user, signOut, signInWithGoogle }) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addEmail(user?.email));
  }, )

  return (
    <Wrapper>
      {
        user
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in</p>
      }

      {
        user
          ? <IconButton onClick={signOut} color="primary" aria-label="button" m="auto">
              <LogoutIcon />
            </IconButton>
          
          : <IconButton onClick={signInWithGoogle} color="primary" aria-label="button" m="auto">
              <AssignmentIndIcon />
            </IconButton>
      }
    </Wrapper>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AuthComponent);