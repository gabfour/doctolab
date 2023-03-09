import * as React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Button } from '@mui/material';
import { auth } from './index';

export function MeetingForm() {
    const [signOut] = useSignOut(auth); // loading, error

    const SignUserOut = () => signOut(auth);

    return(
        <Button onClick={SignUserOut}>Sign Out</Button>
    );
}