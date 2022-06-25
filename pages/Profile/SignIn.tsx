import { useState, useEffect, FC } from 'react'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Profile<FC>({user, signOut}) {

  return (
    <div>
      { user && <h1>Welcome, {user.username}</h1> }
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default withAuthenticator(Profile)