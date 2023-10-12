"use client"
import React from 'react';
import {useSession} from 'next-auth/react';
import LoggedIn from './LoggedIn'; 
import LoggedOut from './LoggedOut';
import Link from 'next/link';



const AuthHeader = () => {
  const {data: session} = useSession()
 
  return (
    <div>
        {(session && session.user) ? <LoggedIn/> : <LoggedOut/>}     
        {(session && session.user && session.user.subRole === 'unverified') && 
           <button>
            <Link href='/auth/verify'>
              Verify Your Account
            </Link>
           </button>
           
          } 
    </div>
  );
};

export default AuthHeader;